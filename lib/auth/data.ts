"use server";

import { sql } from "@vercel/postgres";
import type { User } from "@/lib/auth/definitions";
import { encrypt } from "../utils";
import { cookies } from "next/headers";

export async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    const userData = user.rows[0];
    const expires = new Date(Date.now() + 1000 * 60 * 60 * 24);
    const sessionData = await encrypt({ userData, expires });
    await cookies().set("session", sessionData, { expires, httpOnly: true });

    return user.rows[0];
  } catch (error) {
    console.log(error);
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}
