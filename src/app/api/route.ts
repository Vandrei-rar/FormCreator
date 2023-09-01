import { formSchema } from "@/schemas/form.schema";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"
import { validate } from "@/validation/validate";

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  const data: IForms = await request.json();

  const isValid = await validate(data, formSchema);

  return isValid instanceof NextResponse ? isValid :
  new NextResponse(JSON.stringify({ dados: data }), { status: 200 });
}

export async function GET() {
  // const data = await prisma.form.findMany();

  return new NextResponse(JSON.stringify({  }), {status: 200});
}