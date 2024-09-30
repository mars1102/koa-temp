import { Context, Next } from "koa";
import { verify } from "../utils/jwt";
import ResResult from "../common/resResult";

export const checkToken = async (ctx: Context, next: Next) => {
  const url = ctx.request.url;

  if (url == "/api/v1/user/login") {
    await next();
  } else {
    const token = ctx.header["auth"] as string;

    if (!token) {
      ctx.body = ResResult.failure("token 不存在");
      return;
    }
    const payload = verify(token);

    if (typeof payload === "string") {
      ctx.body = ResResult.failure(payload);
      return;
    }
    const { exp } = payload;

    const data = new Date().getTime();
    if (data <= exp * 1000) {
      await next();
    } else {
      ctx.body = ResResult.failure("token 已过期");
    }
  }
};
