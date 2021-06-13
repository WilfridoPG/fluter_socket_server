const express = require("express");
//app expres
const app = express();
const path = require("path");
require("dotenv").config();
//Node server configuration
const server = require("http").createServer(app);
module.exports.io = require("socket.io")(server);
require("./sockets/socket");
//mensajes de sockets

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

//escuchando el puerto 300
server.listen(process.env.PORT, () => {
  console.log(`puerto que se esta ejecutando  je${process.env.PORT}`);
});
