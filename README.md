# KOA

> koa template

## Env ⛲️

- node v18.20.4
- ts-node v10.9.2
- pm2 v5.4.2

## Usage 🔧

#### dev

```npm
npm run dev
```

#### prod

线上环境启动使用pm2守护进程

> 🐻使用pm2直接运行ts文件需要在pm2安装typescript
>
> ```bash
> $ pm2 install typescript
> ```

在项目依赖中安装ts-node

```npm
npm install ts-node
```

启动项目

```npm
npm run prod
```

重启项目

```npm
npm run restart
```

查看启动应用

```bash
$ pm2 [list|ls|status]
```

查看实时日志

```bash
$ pm2 logs
```

查看监控信息

```bash
$ pm2 monit
```

## Function 🎁

| seq | function  | npm package    | status |
| --- | --------- | -------------- | ------ |
| 1   | router    | @koa/router    | ✅     |
| 2   | mysql     | typeorm mysql2 | ✅     |
| 3   | auth      | jsonwebtoken   | ✅     |
| 4   | logger    | log4js         | ✅     |
| 5   | config    | cross-env yaml | ✅     |
| 6   | validator | ajv            | ☑️     |
| 7   | prod-env  | pm2            | ✅     |

## Todo ⏱️

- [ ] 校验不显示具体错误原因，只能显示，需配合ajv-errors
- [ ] 打包
- [ ] docker部署
