import { Context, Next } from "koa";
import ResResult from "../common/resResult";

/**
 * 全局异常处理
 * @param ctx
 * @param next
 */
const globalException = async (ctx: Context, next: Next) => {
  try {
    await next();
  } catch (error: any) {
    ctx.body = ResResult.failure(error.message || '服务器异常');
  }
};

export default globalException;
