import PropTypes from "prop-types";

const Floor = ({ floor, callElevator }) => {
    return (
        <div className="floor">
            <span>Floor {floor}</span>
            <button onClick={() => callElevator(floor, "up")}>▲</button>
            <button onClick={() => callElevator(floor, "down")}>▼</button>
        </div>
    );
};

Floor.propTypes = {
    floor: PropTypes.number.isRequired,
    callElevator: PropTypes.func.isRequired,
};

export default Floor;
