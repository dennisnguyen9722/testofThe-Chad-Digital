const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const { elevators, callElevator } = require("./controllers/elevatorController");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "http://localhost:5173" }
});

io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("callElevator", (floor, direction) => {
        const updatedElevators = callElevator(floor, direction);
        io.emit("updateElevators", updatedElevators);
    });

    setInterval(() => {
        elevators.forEach(elevator => elevator.move());
        io.emit("updateElevators", elevators);
    }, 2000);
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
