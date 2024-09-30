import { UserPojo } from "./pojo/user.pojo";
import { mysqlDataSource } from "../../db/data-source";
import { User } from "./entity/user.entity";
import { QueryUserDto } from "./user.dto";
import { Like } from "typeorm";

export class UserDao {
  /**
   * 获取所有用户
   */
  static async findMany(data: QueryUserDto): Promise<UserPojo[]> {
    const whereConditions: any = {};

    if (data.code) {
      whereConditions.code = Like(`%${data.code}%`);
    }
    if (data.name) {
      whereConditions.name = Like(`%${data.name}%`);
    }
    return await mysqlDataSource
      .getRepository(User)
      .createQueryBuilder("user")
      .select(["user.id", "user.name", "user.code", "user.status"])
      .where(whereConditions)
      // .orderBy({
      //   "user.id": "ASC",
      // })
      .getMany();
  }

  /**
   * 根据ID获取一个用户
   * @param id
   */
  static async findOneById(id: number): Promise<User> {
    return await mysqlDataSource
      .getRepository(User)
      .createQueryBuilder("user")
      .select(["user.id", "user.name", "user.code", "user.status"])
      .where({ id })
      .getOne();
  }

  /**
   * 根据账号密码获取用户
   * @param code
   * @param password
   */
  static async findOneByCodePsd(code: string, password: string): Promise<User> {
    return await mysqlDataSource
      .getRepository(User)
      .createQueryBuilder("user")
      .where({
        code,
        password,
      })
      .getOne();
  }

  static async insertOne(data: UserPojo) {
    return await mysqlDataSource
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(data)
      .execute();
  }
}
