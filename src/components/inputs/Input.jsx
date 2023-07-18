import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import PropTypes from "prop-types";

const StyledInput = styled.input`
  display: flex;
  width: 23.75rem;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  width: 100%;
  height: 36px;
  outline: none;
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

function Input({
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
      <StyledInput
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

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

export default Input;

// <Input
//   id="email"
//   type="email"
//   name="email"
//   value={email}
//   onChange={handleChange}
//   placeholder="example@mail.com"
//   label="Email"
// />;
