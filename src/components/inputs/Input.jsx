import styled from "@emotion/styled";
import PropTypes from "prop-types";

import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

const StyledInput = styled.input`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 0.5rem;
  padding: 0.5rem;
  height: 2.25rem;
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
    ${typography.body.sm};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledLabel = styled.label`
  font-style: normal;
  line-height: normal;
  ${typography.overline};
`;

function Input({
  id,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  label,
  required,
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
        required={required}
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
  required: PropTypes.bool,
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
