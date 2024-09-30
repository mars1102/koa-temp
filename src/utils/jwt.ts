import * as jwt from "jsonwebtoken";
import { UserPojo } from "../modules/user/pojo/user.pojo";

const SECRET = "qwe123";

/**
 * 签发
 */
export const sign = (user: UserPojo) => {
  return jwt.sign(user, SECRET, { expiresIn: 60 });
};

export const verify = (token: string) => {
  return jwt.verify(token, SECRET);
};
