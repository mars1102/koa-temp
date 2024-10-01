import { Context, Next } from "koa";
import ResResult from "../common/resResult";
import logger from "../logger";

/**
 * 全局异常处理
 * @param ctx
 * @param next
 */
const globalException = async (ctx: Context, next: Next) => {
  try {
    await next();
  } catch (error: any) {
    logger.error(error.message || "服务器异常");
    ctx.body = ResResult.failure(error.message || "服务器异常");
  }
};

export default globalException;
