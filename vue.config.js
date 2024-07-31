const { defineConfig } = require("@vue/cli-service");
const fs = require('fs');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'dashboard.admfirst.my.id',
    port: 443,
    https: {
      key: fs.readFileSync('./certs/dashboard.admfirst.my.id.key'),
      cert: fs.readFileSync('./certs/dashboard_admfirst_my_id.chained.crt'),
    },
    client: {
      webSocketURL: 'auto://0.0.0.0:0/ws'
    }
  }
});