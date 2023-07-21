import "./circularCheckbox.css";
import styled from "@emotion/styled";

function CircularCheckbox({ children }) {
  return (
    <>
      <label className="CircularCheckboxWrapper">
        <input type="Checkbox" />
        <span className="CircleCheckmark">{children}</span>
      </label>
    </>
  );
}

export default CircularCheckbox;
