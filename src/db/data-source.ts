import { DataSource } from "typeorm";
import { User } from "../modules/user/entity/user.entity";
import config from "../config";

export const mysqlDataSource = new DataSource({
  type: "mysql",
  host: config.mysql.host,
  port: config.mysql.port,
  username: config.mysql.username,
  password: config.mysql.password,
  database: config.mysql.database,
  synchronize: true,
  logging: ["query", "error"],
  entities: [User],
  poolSize: config.mysql.poolSize,
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
