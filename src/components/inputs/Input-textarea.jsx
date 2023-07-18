import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import PropTypes from "prop-types";

const StyledTextArea = styled.textarea`
  display: flex;
  width: 23.75rem;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  height: 56px;
  outline: none;
  resize: none;
  border: 1px solid ${colors.pink.light};
  color: ${colors.gray.dark};
  :hover {
    background-color: ${colors.gray.bg_light};
  }
  :focus {
    border: 2px solid ${colors.pink.pink};
  }

  ::placeholder {
    color: ${colors.gray.light};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledLabel = styled.label`
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

function TextArea({
  id,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  label,
}) {
  return (
    <InputWrapper>
      {label ? <StyledLabel htmlFor={id || name}>{label}</StyledLabel> : ""}
      <StyledTextArea
        id={id || name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
}

TextArea.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

export default TextArea;

