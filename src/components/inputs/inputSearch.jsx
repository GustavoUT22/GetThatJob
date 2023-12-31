import styled from "@emotion/styled";
import { CiSearch } from "react-icons/ci";
import { colors } from "../../styles/colors";
import { StyledLabel, InputWrapper } from "./Input";

const InputSearchWrapper = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
  height: 36px;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid ${colors.pink.light};
  background-color: ${colors.white};
  :hover {
    border-color: #ff6f80;
    box-shadow: 0 0 5px rgba(255, 111, 128, 0.5);
  }
  :focus {
    border: 2px solid ${colors.pink.pink};
  }

  ::placeholder {
    color: ${colors.gray.light};
  }
`;

const SearchInput = styled.input`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  outline: none;
  background: none;
  color: ${colors.gray.dark};
  border: none;

  ::placeholder {
    color: ${colors.gray.light};
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  gap: 4px;
  margin-bottom: 8px;
`;

function InputSearch({ onChange, value }) {
  return (
    <SearchWrapper>
      <StyledLabel>search by job title or company name</StyledLabel>
      <InputSearchWrapper>
        <CiSearch
          style={{
            width: "20px",
            height: "20px",
            color: `${colors.gray.light}`,
          }}
        />
        <SearchInput
          onChange={onChange}
          value={value}
          placeholder="manufacturing, sales, swim"
        />
      </InputSearchWrapper>
    </SearchWrapper>
  );
}

export default InputSearch;
