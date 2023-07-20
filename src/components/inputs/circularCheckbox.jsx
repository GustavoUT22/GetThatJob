import "./circularCheckbox.css";
import styled from "@emotion/styled";

function CircularCheckbox() {
  return (
    <>
      <label className="CircularCheckboxWrapper">
        <input type="Checkbox" />
        <span className="CircleCheckmark"></span>
      </label>
    </>
  );
}

export default CircularCheckbox;
