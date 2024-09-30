import * as Router from "@koa/router";
import { getUserInfoBuId, insert, login, queryUsers } from "./user.service";
import ResResult from "../../common/resResult";

const userRouter = new Router();

userRouter.prefix("/user");

userRouter.post("/list", async (ctx) => {
  const users = await queryUsers(ctx.request.body);

  ctx.body = ResResult.success("success", users);
});

userRouter.post("/detail", async (ctx) => {
  const user = await getUserInfoBuId(ctx.request.body.id);

  ctx.body = ResResult.success("success", user);
});

userRouter.post("/create", async (ctx) => {
  const { name, code } = ctx.request.body;
  const result = await insert({ name, code });

  ctx.body = ResResult.success("success", result);
});

userRouter.post("/login", async (ctx) => {
  const { code, password } = ctx.request.body;
  const result = await login({ code, password });

  ctx.body = ResResult.success("success", result);
});

export default userRouter;
