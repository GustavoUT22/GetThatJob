import styled from "@emotion/styled";
import { StyledLabel } from "./Input";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  /* margin-bottom: 25px; */
  padding: 8px 0px;
`;

const InputBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 4px;
`;

const AmountInput = styled.input`
  width: 102px;
  height: 32px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${colors.pink.light};
  background-image: url("src/assets/images/money-dollar-icon.svg");
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 4px;
  padding-left: 25px;
  :focus {
    outline: #fa4a0c;
    border: 1px solid ${colors.pink.pink};
  }

  ::placeholder {
    color: ${colors.gray.light};
    ${typography.body.sm};
  }
`;

function Price() {
  return (
    <div>
      <FormContainer>
        <StyledLabel>Salary Range</StyledLabel>
        <InputBox>
          <AmountInput type="number" placeholder="min"></AmountInput>
          <div>-</div>
          <AmountInput type="number" placeholder="max"></AmountInput>
        </InputBox>
      </FormContainer>
    </div>
  );
}

export default Price;
