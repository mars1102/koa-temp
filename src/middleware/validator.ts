import { Context, Next } from "koa";
import Ajv, { JTDDataType } from "ajv/dist/jtd";
import ajvErrors from "ajv-errors";

const ajv = new Ajv({
  removeAdditional: true,
  allErrors: true,
});

// ajvErrors(ajv);

const validatorParams = (schema: any, data: any) => {
  type Data = JTDDataType<typeof schema>;
  const validator = ajv.compile<Data>(schema);

  return validator(data);
};

export const validator = async (ctx: Context, next: Next) => {
  ctx.validate = validatorParams;
  await next();
};
