import * as Koa from "koa";
import * as Router from "@koa/router";
import * as json from "koa-json";
import body from "koa-body";
import * as cors from "@koa/cors";
import globalException from "./middleware/globalException";
import "reflect-metadata";
import { initializeDataSource } from "./db/data-source";
import userRouter from "./modules/user/user.controller";
import { checkToken } from "./middleware/checkToken";
import { validator } from "./middleware/validator";

const app = new Koa();
const router = new Router();

initializeDataSource();

router.prefix("/api/v1");
router.use(json());
router.use(body());
router.use(userRouter.routes(), userRouter.allowedMethods());

app.use(cors());
app.use(globalException);
app.use(checkToken);
app.use(validator);
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
