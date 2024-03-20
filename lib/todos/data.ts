"use server";
import { sql } from "@vercel/postgres";
import { todos } from "@/lib/placeholder";
import { Todos } from "./definitions";
import { getSession } from "../utils";
import { unstable_noStore as noStore } from "next/cache";
import { transformTasks } from "../helpers";

interface RawTask {
  id: number; // Assuming id is a number in the database
  userid: string; // Assuming userId is a string in the database
  date: string;
  tasks: { id: number; title: string; todos: any[] }[] | null; // Assuming nested structure
}

interface TransformedTodo {
  id: string; // Change type to string if needed based on database
  userId?: string;
  title: string;
  no_of_tasks: number;
  no_of_tasks_done: number;
  date: string;
}

export async function fetchTodosById(id: string) {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();
  const session = await getSession();
  const userId = session?.userData?.id;

  const tasks = await sql`
  SELECT
    id,
    userid,
    date,
    json_agg(
      CASE WHEN todos IS NOT NULL THEN
        json_build_object('id', id, 'title', title, 'todos', todos)
      END
    ) AS tasks
  FROM tasks
  WHERE userId=${userId} AND id=${id}
  GROUP BY id, userid, date
`;
  return tasks.rows[0];
}

export async function fetchedFilteredTasks(query: string) {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();
  const session = await getSession();
  const userId = session?.userData?.id;
  let transformedData: Todos[] = [];

  try {
    const tasks = await sql`
     SELECT
  id,
  userid,
  title,
  date,
  json_agg(
    CASE WHEN todos IS NOT NULL THEN
      json_build_object('id', tasks.id, 'userid', tasks.userid, 'title', tasks.title, 'todos', tasks.todos)
    END
  ) AS tasks
FROM tasks
WHERE userid=${userId}
AND (tasks.title ILIKE ${`%${query}%`} OR tasks.title IS NULL) 
OR date::text ILIKE ${`%${query}%`}  OR date IS NULL
GROUP BY id, userid, title, date;
    `;
    transformedData = transformTasks(tasks.rows);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch tasks.");
  } finally {
    return transformedData;
  }
}
