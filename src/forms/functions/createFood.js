"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function createFood(data) {
    await prisma.food.create({
        data: {
            'name': data.name,
            'weight': data.weight,
            'description': data.description
        }
    });
}