import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { z, ZodError } from "zod";
import { helloSchema } from "schemas";
import { ApiResponseBase } from "types";

export interface HelloRequest extends NextApiRequest {
  body: z.infer<typeof helloSchema>;
}

export type HelloResponse = NextApiResponse<
  ApiResponseBase<{
    message: `Hello ${string}!`;
  }>
>;

const handler = nc<HelloRequest, HelloResponse>({
  onError: (err, req, res, next) => {
    console.log(err.message);

    res.status(err.statusCode || 500).json({
      errors:
        err instanceof ZodError
          ? err.issues.map(issue => `${issue.path}: ${issue.message}`)
          : [err.message]
    });
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page not found");
  }
}).post(async (req, res) => {
  helloSchema.parse(req.body);

  const { userName } = req.body;

  return res.status(200).json({ message: `Hello ${userName}!` });
});

export default handler;
