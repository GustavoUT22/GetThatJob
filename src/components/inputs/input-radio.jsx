import { useState, useEffect } from "react";
import { StyledLabel } from "./Input";
import styled from "@emotion/styled";

const RadioInput = styled.input`
  appearance: none;
  border: 2px solid #f48fb1;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  cursor: pointer;
  outline: none;
  margin: 0;
  position: relative;

  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: #f48fb1;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transform: scale(0);
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  &:checked:before {
    transform: scale(1);
    opacity: 1;
  }
`;

const RadioComponent = () => {
  const [selectedOption, setSelectedOption] = useState("newcv");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "8px 4px",
        gap: "4px",
        height: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "4px",
        }}
      >
        <RadioInput
          id="cvold"
          name="cvoption"
          value="cvold"
          type="radio"
          checked={selectedOption === "cvold"}
          onChange={handleOptionChange}
        />
        <StyledLabel
          style={{ display: "flex", alignSelf: "center" }}
          selectedRole={selectedOption === "cvold"}
          htmlFor="cvold"
        >
          Use your CV
        </StyledLabel>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "4px",
        }}
      >
        <RadioInput
          id="newcv"
          name="cvoption"
          value="newcv"
          type="radio"
          checked={selectedOption === "newcv"}
          onChange={handleOptionChange}
        />
        <StyledLabel
          style={{ display: "flex", alignSelf: "center" }}
          selectedRole={selectedOption === "newcv"}
          htmlFor="newcv"
        >
          Upload new CV
        </StyledLabel>
      </div>
    </div>
  );
};

export default RadioComponent;
