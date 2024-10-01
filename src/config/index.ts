import * as fs from "node:fs";
import { parse } from "yaml";
import * as process from "node:process";
import * as path from "node:path";

type Config = {
  mysql: {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    poolSize: number;
  };
};

const file = fs.readFileSync(
  path.join(__dirname, `./config.${process.env.NODE_ENV || "development"}.yml`),
  "utf8",
);

const config = parse(file) as Config;

export default config;
