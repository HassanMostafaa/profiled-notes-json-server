require("dotenv").config();
// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./data/db.json");
const middlewares = jsonServer.defaults();
const server_port = process.env.PORT || 3000;
const server_host = process.env.YOUR_HOST || "0.0.0.0";
server.use(middlewares);
server.use(router);
server.listen(server_port, server_host, () => {
  console.log(
    `JSON Server is running on server_port ${server_port} 
    \nServer_Link http://localhost:${server_port}\n
    Data_Link: http://localhost:${server_port}/data`
  );
});
