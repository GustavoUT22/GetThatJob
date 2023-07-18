import styled from "@emotion/styled";
import { StyledLabel } from "./Input";
import { colors } from "../../styles/colors";
const chevronDownSVGDataURL =
  "data:image/svg+xml,%3Csvg%20width%3D%2210%22%20height%3D%226%22%20viewBox%3D%220%200%2010%206%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0.292923%200.292893C0.683447%20-0.097631%201.31661%20-0.097631%201.70713%200.292893L5.00002%203.58579L8.29291%200.292893C8.68343%20-0.0976311%209.3166%20-0.0976311%209.70712%200.292893C10.0976%200.683417%2010.0976%201.31658%209.70712%201.70711L5.70713%205.70711C5.31661%206.09763%204.68344%206.09763%204.29292%205.70711L0.292923%201.70711C-0.0976004%201.31658%20-0.0976004%200.683417%200.292923%200.292893Z%22%20fill%3D%22%236B7280%22%20%2F%3E%3C%2Fsvg%3E";

const StyleSelectInput = styled.select`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
  align-content: center;
  width: 280px;
  height: 36px;
  border-radius: 8px;
  line-height: normal;
  border: 1px solid ${colors.pink.light};
  appearance: none;
  background-image: url(${chevronDownSVGDataURL});
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: calc(100% - 8px);
  option:first-of-type {
    opacity: 0.5;
    color: ${colors.gray.light};
  }
`;

const DefaultOption = styled.option`
  color: ${colors.gray.light};
`;

const optionsDefault = [
  { value: "option1", label: "Opción 1" },
  { value: "option2", label: "Opción 2" },
  { value: "option3", label: "Opción 3" },
];
function SelectInput({ label, options = optionsDefault, defaultValue }) {
  return (
    <div>
      {label ? <StyledLabel>{label}</StyledLabel> : ""}
      <StyleSelectInput>
        <DefaultOption style={{ color: "gray" }} selected>
          {defaultValue}
        </DefaultOption>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyleSelectInput>
    </div>
  );
}

export default SelectInput;
