import { UserDao } from "./user.dao";
import { CreateUserDTO, QueryUserDto, UserLoginDTO } from "./user.dto";
import { USER_STATUS } from "./user.enum";
import { isNil, pickBy } from "lodash";
import { sign } from "../../utils/jwt";

export const queryUsers = async (data: QueryUserDto) => {
  const users = await UserDao.findMany(pickBy(data, Boolean));

  return users;
};

export const getUserInfoBuId = async (id: number) => {
  const userInfo = await UserDao.findOneById(id);

  if (isNil(userInfo)) {
    throw new Error("用户不存在");
  }
  return userInfo;
};

export const insert = async (user: CreateUserDTO) => {
  return await UserDao.insertOne({
    id: Math.floor(Math.random() * 10000),
    ...user,
    status: USER_STATUS.enabled,
  });
};

export const login = async (data: UserLoginDTO) => {
  const user = await UserDao.findOneByCodePsd(data.code, data.password);

  if (!user) {
    throw new Error("用户名或密码错误");
  }
  if (user.status === USER_STATUS.disabled) {
    throw new Error("该用户已停用");
  }

  return {
    token: sign({
      id: user.id,
      name: user.name,
      code: user.code,
      status: user.status,
    }),
  };
};
