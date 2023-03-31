import { HelloRequest } from "pages/api/hello";
import { object, SchemaOf, string } from "yup";

export const helloSchema: SchemaOf<HelloRequest["body"]> = object()
  .defined()
  .shape({
    userName: string().required("User Name field is required.")
  });
