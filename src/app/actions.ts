"use server";

import { neon } from "@neondatabase/serverless";

export async function getComments() {
    const sql = neon(process.env.DATABASE_URL ?? "");
    try {
        const data = await sql`SELECT * FROM comments ORDER BY id DESC`;
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function createComment(name: string, comment: string) {
    const sql = neon(process.env.DATABASE_URL ?? "");
    try {
        await sql`INSERT INTO comments (name, comment) VALUES (${name}, ${comment})`;
    } catch (error) {
        console.log(error);
        return false;
    }

    return true;
}

export async function isGuestConfirm(name: string) {
    const sql = neon(process.env.DATABASE_URL ?? "");
    console.log(name);
    try {
        const data =
            await sql`SELECT * FROM attendance WHERE name ILIKE ${"%" + name + "%"} ORDER BY id DESC`;
        console.log(data);
        return data.length > 0;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export async function confirmGuest(name: string, isAttend: boolean) {
    const sql = neon(process.env.DATABASE_URL ?? "");
    try {
        await sql`INSERT INTO attendance (name, is_attend) VALUES (${name}, ${isAttend})`;
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}
