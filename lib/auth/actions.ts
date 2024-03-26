import { z } from "zod";
import { sql } from "@vercel/postgres";

import { getUser } from "./data";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import * as bcrypt from "bcryptjs";

export type State = {
  errors?: {
    //* this type will need update on comments or what this is used for
    fullName?: string[];
    password?: string[];
    confirmPassword?: string[];
    email?: string[];
  };
  message?: string;
};

export const UserSchema = z
  .object({
    fullName: z.string().trim().min(3, "Full name is required"),
    email: z.string().email("Invalid email format").trim(),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .trim(),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // This will highlight the `confirmPassword` field if there's an error
  });

export async function createAccount(prevState: State, formData: FormData) {
  const validatedFields = UserSchema.safeParse({
    email: formData.get("email"),
    fullName: formData.get("fullName"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Account.",
    };
  }

  const { email, fullName, password } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  // * Select the email first if exist throw error if it does
  const existingUser = await getUser(email);

  if (existingUser) {
    return {
      errors: { email: ["Email already exists"] },
      message: "Failed to Create Account.",
    };
  }

  try {
    await sql`
        INSERT INTO users (fullName, email, password)
        VALUES (${fullName}, ${email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;

    return { message: "Account created successfully" };
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Account.",
    }; // Include the original error for debugging
  } finally {
    redirect("/login");
  }
}
