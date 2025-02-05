import PropTypes from "prop-types";

const Elevator = ({ elevator }) => {
    return (
        <div
            className={`elevator ${elevator.isDoorOpen ? "open" : ""}`}
            style={{ transform: `translateY(-${elevator.currentFloor * 50}px)` }}
        >
            🚪 <div className="floor-number">{elevator.currentFloor}</div>
        </div>
    );
};

Elevator.propTypes = {
    elevator: PropTypes.shape({
        id: PropTypes.number.isRequired,
        currentFloor: PropTypes.number.isRequired,
        isDoorOpen: PropTypes.bool.isRequired, // Thêm trạng thái mở cửa
    }).isRequired,
};

export default Elevator;
