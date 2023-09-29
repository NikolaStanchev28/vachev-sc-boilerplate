import { NextResponse } from "next/server";
import { helloSchema } from "schemas";
import { ZodError } from "zod";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    helloSchema.parse(body);
    return NextResponse.json({ message: `Hello ${body.userName}!` }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      {
        errors:
          err instanceof ZodError
            ? err.issues.map(issue => `${issue.path}: ${issue.message}`)
            : [err.message]
      },
      { status: 400 }
    );
  }
}
