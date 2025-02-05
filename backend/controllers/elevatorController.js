const Elevator = require("../models/elevator");

const NUM_ELEVATORS = 3;
const elevators = Array.from({ length: NUM_ELEVATORS }, (_, i) => new Elevator(i));

function callElevator(floor, direction) {
    let availableElevators = elevators.filter(e => !e.isMoving || e.direction === direction);
    if (availableElevators.length === 0) availableElevators = elevators;

    let bestElevator = availableElevators.reduce((prev, curr) =>
        Math.abs(curr.currentFloor - floor) < Math.abs(prev.currentFloor - floor) ? curr : prev
    );

    bestElevator.addRequest(floor);
    return elevators;
}

module.exports = { elevators, callElevator };
