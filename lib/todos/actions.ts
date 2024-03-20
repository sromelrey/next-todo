"use server";
import { z } from "zod";
import { sql, Client } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "lib/utils";

const TodoSchema = z.object({
  // userId: z.string(),
  date: z.string({
    invalid_type_error: "Please select a date.",
  }),
  title: z.string(),
  todos: z.array(
    z.object({
      name: z.string(),
      status: z.enum(["done", "pending"]),
    })
  ),
});

export async function createTodo(prevState: any, formData: any) {
  const session = await getSession();
  const validatedFields = TodoSchema.safeParse({
    date: formData.dateSelected,
    title: formData.todoTitle,
    todos: formData.stateAddTask,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Todo.",
    };
  }
  const { date, title, todos } = validatedFields.data;
  const formatedDate = new Date(date).toISOString().split("T")[0];

  const userId = session?.userData?.id;

  try {
    await sql`INSERT INTO tasks (userId, date, title, todos)
    VALUES (${userId}, ${date}, ${title}, ${JSON.stringify(todos)})`;
  } catch (e) {}
  redirect(`/dashboard/todo`);
}

export async function updateTodo(prevState: any, formData: any) {
  const session = await getSession();

  const validatedFields = TodoSchema.safeParse({
    date: formData.dateSelected,
    title: formData.todoTitle,
    todos: formData.stateAddTask,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Todo.",
    };
  }

  const { date, title, todos } = validatedFields.data;
  const formatedDate = new Date(date).toISOString().split("T")[0];

  const userId = session?.userData?.id;

  try {
    await sql`
    UPDATE tasks
    SET date = ${formatedDate}, title = ${title}, todos = ${JSON.stringify(todos)}
    WHERE id=${formData.id}
  `;
  } catch (error) {
    console.log(error);
    return {
      message: "Database Error: Failed to Update Todo.",
    };
  }

  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}

export async function deleteTodo(id: string) {
  try {
    await sql`DELETE FROM tasks WHERE id=${id}`;
  } catch (error) {
    return {
      message: "Database Error: Failed to DELETE Invoice.",
    };
  }

  revalidatePath("/dashboard/invoices");
}

export async function addTask(prevState: any, formData: FormData | any) {
  let tasks = [];
  if (!formData?.isUpdating) {
    tasks.push({ name: formData, status: "pending" });

    return prevState ? [...prevState, ...tasks] : tasks;
  }
  tasks = formData.state;
  tasks.push({ name: formData.formData, status: "pending" });
  return tasks;
}
