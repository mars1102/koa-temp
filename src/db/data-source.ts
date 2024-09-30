import { DataSource } from "typeorm";
import { User } from "../modules/user/entity/user.entity";

export const mysqlDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "koa_test",
  synchronize: true,
  logging: ["query", "error"],
  entities: [User],
  poolSize: 10,
});

/**
 * 初始化数据源
 */
export const initializeDataSource = () => {
  mysqlDataSource
    .initialize()
    .then(() => {
      console.log("connected to mysql");
    })
    .catch((error) => console.log(error));
};
