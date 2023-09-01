import { NextResponse } from "next/server";
import * as yup from "yup";

export async function validate(data: any, schema: yup.Schema) {
    try {
        await schema.validate(data);
        return true;
    } catch (err) {
        return new NextResponse(JSON.stringify({ err }), { status: 401 });
    }
}