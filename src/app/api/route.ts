import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
import { log } from "console";
const prisma = new PrismaClient()

export async function POST(req: Request) {
    const data = await req.formData();
    
    return NextResponse.json({data: data})

    // const form = await prisma.form.create({
    //     data: {
    //         name: 'Formulario teste',
    //         description: 'Descrição teste',
    //     }
    // })

    //return NextResponse.json({form});
}

export async function GET() {
    const data = await prisma.form.findMany();

    return NextResponse.json({data})
}