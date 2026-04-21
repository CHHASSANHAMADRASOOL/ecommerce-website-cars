import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET all cars
export async function GET() {
  try {
    const cars = await prisma.car.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(cars);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch cars" }, { status: 500 });
  }
}

// POST new car (For Admin)
export async function POST(req: Request) {
  const body = await req.json();
  try {
    const newCar = await prisma.car.create({
      data: {
        model: body.model,
        brand: body.brand,
        price: parseFloat(body.price),
        image: body.image,
        description: body.description,
      }
    });
    return NextResponse.json(newCar);
  } catch (error) {
    return NextResponse.json({ error: "Error creating car" }, { status: 500 });
  }
}