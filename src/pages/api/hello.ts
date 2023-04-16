import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { HelloRequestBody, helloSchema } from "schemas";
import { ApiResponseBase } from "types";
import { ZodError } from "zod";

export interface HelloRequest extends NextApiRequest {
  body: HelloRequestBody;
}

export interface HelloResponse {
  message: `Hello ${string}!`;
}

const handler = nc<HelloRequest, NextApiResponse<ApiResponseBase<HelloResponse>>>({
  onError: (err, req, res, next) => {
    console.log(err.message);

    res
      .status(err.statusCode || 500)
      .json({ error: err instanceof ZodError ? err.issues : err.message });
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
