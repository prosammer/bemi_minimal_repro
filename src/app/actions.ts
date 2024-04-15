"use server"
import {db} from "~/server/db";

export async function getPosts() {
    const res = await db.post.findMany();
    return res;
}