import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

function typeStyles(type) {
  switch (type) {
    case "primary":
      return `
        background-color: ${colors.pink.pink};
        color: ${colors.white};
        &:hover {
          background-color: ${colors.pink.dark};
        }
        &:active {
          background-color: ${colors.pink.pink};
        }
        &:focus {
          outline: 2px solid ${colors.pink.pink};
        }
      `;

    case "secondary":
      return `
        background-color: ${colors.white};
        color: ${colors.gray.gray};
        border: 1px solid ${colors.pink.pink};
        &:hover {
          background-color: ${colors.pink.shallow};
          border: 1px solid ${colors.pink.dark};
          color: ${colors.gray.dark};
        }
        &:active {
          background-color: ${colors.pink.shallow};
          border: 1px solid ${colors.pink.dark};
          color: ${colors.gray.dark};
        }
        &:focus {
          outline: 1px solid ${colors.pink.dark};
        }
      `;
    case "tertiary":
      return `
        background-color: ${colors.white};
        color: ${colors.gray.gray};
        
        &:hover {
          background-color: ${colors.pink.shallow};
          color: ${colors.gray.dark}; 
        }
        &:active {
          background-color: ${colors.white};
        }
        &:focus {
          outline: 1px solid ${colors.white};
        }
      `;

    case "inactive":
      return `
          background-color: ${colors.gray.bg_dark};
          color: ${colors.gray.light};
          &:hover {
            background-color: ${colors.gray.bg_dark};
            color: ${colors.gray.light};
          }
          &:focus {
            outline: none;
          }
        `;

    default:
      break;
  }
}

function sizeStyles(size, rounded) {
  switch (size) {
    case "sm":
      return `
        padding: 0.5rem ${rounded ? "" : "1rem"};
        ${typography.button}
        line-height: 1em;
        width: 10.0625rem;
        height: 2.5rem;
      `;

    case "lg":
      return `
          padding: 1rem ${rounded ? "" : "1.5rem"};
          ${typography.button}
          line-height: 1em;
          width: 11.0625rem;
          height: 3.5rem;
        `;

    default:
      break;
  }
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: ${colors.gray.light};
  color: ${colors.gray.dark};
  border: none;
  ${typography.button}
  line-height: 2em;
  cursor: pointer;

  width: ${({ isFullWidth }) => (isFullWidth ? "100%" : "fit-content")};
  padding: 0.75rem ${({ rounded }) => (rounded ? "0.75rem" : "1rem")};
  border-radius: ${({ rounded }) => (rounded ? "999px" : "1rem")};

  &:hover {
    background-color: ${colors.gray.gray};
  }
  &:active {
    background-color: ${colors.gray.gray};
  }
  &:focus {
    outline: 2px solid ${colors.gray.gray};
  }
  &:disabled {
    opacity: 60%;
    cursor: not-allowed;
  }

  ${(props) => typeStyles(props.type)}
  ${(props) => sizeStyles(props.size, props.rounded)}
`;

function Button({ icon, children, ...props }) {
  return (
    <StyledButton {...props}>
      {icon}
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["sm", "lg"]),
  icon: PropTypes.element,
  isFullWidth: PropTypes.bool,
  children: PropTypes.string,
  onClick: PropTypes.func,
  rounded: PropTypes.bool,
};

export default Button;
