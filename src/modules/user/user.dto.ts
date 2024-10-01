export type QueryUserDto = {
  name?: string;
  code?: string;
  status?: number;
};

export type CreateUserDTO = {
  name: string;
  code: string;
  password: string;
};

export type UserLoginDTO = {
  code: string;
  password: string;
};
