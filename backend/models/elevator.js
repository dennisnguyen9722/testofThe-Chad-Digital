class Elevator {
    constructor(id) {
        this.id = id;
        this.currentFloor = 0;
        this.targetFloors = [];
        this.isMoving = false;
        this.direction = null;
    }

    move() {
        if (this.targetFloors.length > 0) {
            this.isMoving = true;
            let nextFloor = this.targetFloors.shift();
            this.direction = nextFloor > this.currentFloor ? "up" : "down";
            this.currentFloor = nextFloor;
            this.isMoving = false;
            this.direction = null;
        }
    }

    addRequest(floor) {
        if (!this.targetFloors.includes(floor)) {
            this.targetFloors.push(floor);
            this.targetFloors.sort((a, b) => this.direction === "up" ? a - b : b - a);
        }
    }
}

module.exports = Elevator;
