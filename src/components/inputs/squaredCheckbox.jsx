import "./squaredCheckbox.css";
import styled from "@emotion/styled";

function SquaredCheckbox() {
  return (
    <>
      <label className="SquaredCheckboxWrapper">
        <input type="Checkbox" />
        <span className="SquareCheckmark"></span>
      </label>
    </>
  );
}

export default SquaredCheckbox;
