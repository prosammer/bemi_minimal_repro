"use server"
import { PrismaClient } from "@prisma/client";
import { withPgAdapter } from "@bemi-db/prisma";

export async function getPosts() {
    const prisma = withPgAdapter(new PrismaClient());
    const res = await prisma.post.findMany();
    return res;
}