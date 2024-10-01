module.exports = {
  apps: {
    name: "koa-temp",
    script: "src/app.ts",
    cwd: "./",
    args: "",
    interpreter: "./node_modules/.bin/ts-node",
    interpreter_args: "",
    watch: false,
    ignore_watch: ["node_modules", "logs"],
    exec_mode: "cluster_mode",
    instances: 2,
    error_file: "./logs/app-err.log",
    out_file: "./logs/app-out.log",
    merge_logs: true,
    log_date_format: "YYYY-MM-DD HH:mm:ss",
    min_uptime: 6000,
    max_restarts: 30,
    autorestart: true,
    cron_restart: "",
    restart_delay: 60000,
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    },
  },
};
