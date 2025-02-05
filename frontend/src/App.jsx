import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./styles/App.css";

const socket = io("http://localhost:3000");

function App() {
  const [elevators, setElevators] = useState([]);

  useEffect(() => {
    socket.on("updateElevators", (data) => {
      setElevators([...data]);
    });
    return () => socket.off("updateElevators");
  }, []);

  const callElevator = (floor, direction) => {
    socket.emit("callElevator", floor, direction);
  }; 

  return (
    <div className="building">
      {/* Cột hiển thị danh sách tầng và nút bấm */}
      <div className="floors-container">
        {[...Array(10).keys()].reverse().map((floor) => (
          <div key={floor} className="floor">
            <span>Floor {floor}</span>
            <button onClick={() => callElevator(floor, "up")}>▲</button>
            <button onClick={() => callElevator(floor, "down")}>▼</button>
          </div>
        ))}
      </div>

      {/* Khu vực chứa 3 thang máy */}
      <div className="elevator-shafts">
        {elevators.map((elevator) => (
          <div key={elevator.id} className="elevator-shaft">
            <div
              className="elevator"
              style={{
                transform: `translateY(-${elevator.currentFloor * 50}px)`,
              }}
            >
              🚪
              <div className="floor-number">{elevator.currentFloor}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
