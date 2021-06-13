const { io } = require("../index");
io.on("connection", (client) => {
  console.log("clientes conectado");
  client.on("disconnect", () => {
    console.log("clientes desconetado");
  });
  client.on("mensaje", (payload) => {
    console.log("Mensaje !!", payload);
    io.emit("mensaje", { admin: "Nuevo mensaje" });
  });
});
