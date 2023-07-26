import styled from "@emotion/styled";
import { StyledLabel } from "./Input";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";
import PropTypes from "prop-types";

const chevronDownSVGDataURL =
  "data:image/svg+xml,%3Csvg%20width%3D%2210%22%20height%3D%226%22%20viewBox%3D%220%200%2010%206%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0.292923%200.292893C0.683447%20-0.097631%201.31661%20-0.097631%201.70713%200.292893L5.00002%203.58579L8.29291%200.292893C8.68343%20-0.0976311%209.3166%20-0.0976311%209.70712%200.292893C10.0976%200.683417%2010.0976%201.31658%209.70712%201.70711L5.70713%205.70711C5.31661%206.09763%204.68344%206.09763%204.29292%205.70711L0.292923%201.70711C-0.0976004%201.31658%20-0.0976004%200.683417%200.292923%200.292893Z%22%20fill%3D%22%236B7280%22%20%2F%3E%3C%2Fsvg%3E";

const StyleSelectInput = styled.select`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
  align-content: center;
  width: 18.75rem;
  height: 2.25rem;
  border-radius: 8px;
  line-height: normal;
  color: ${colors.gray.light};
  ${typography.body.sm};
  border: 1px solid ${colors.pink.light};
  appearance: none;
  background-image: url(${chevronDownSVGDataURL});
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: calc(100% - 8px);
  outline: none;
  :hover {
    border: 1px solid ${colors.pink.pink};
  }
  :focus {
    border: 1px solid ${colors.pink.dark};
  }
  option:first-of-type {
    opacity: 0.5;
    color: ${colors.gray.light};
  }
  option {
    background-color: beige;
  }
`;

const DefaultOption = styled.option`
  color: ${colors.gray.light};
  ${typography.body.sm};
`;

const OptionSelect = styled.option`
  font-size: 14px;
  padding: 8px;
`;

function SelectInput({ label, placeholder, options, defaultValue }) {
  return (
    <div>
      {label ? <StyledLabel>{label}</StyledLabel> : ""}
      <StyleSelectInput>
        <DefaultOption style={{ color: "gray" }} selected>
          {placeholder}
          {defaultValue}
        </DefaultOption>
        {options.map((option) => (
          <OptionSelect key={option.value} value={option.value}>
            {option.label}
          </OptionSelect>
        ))}
      </StyleSelectInput>
    </div>
  );
}

SelectInput.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.func,
  defaultValue: PropTypes.string,
};

export default SelectInput;
