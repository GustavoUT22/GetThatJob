import { InputWrapper, StyledLabel } from "./Input"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { typography } from "../../styles"
import { colors } from "../../styles"
import { RiUploadLine } from "react-icons/ri"

const File = styled.input`
  display: none;
`

const FileSection = styled.div`
  display: flex; 
  flex-direction: row; 
  align-items: center;
  gap: 8px;
`

const Caption = styled.label`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
  ${colors.gray.light};
  text-transform: capitalize;
`

const ChosenFile = styled.label`
  ${typography.body.sm}
`

const CustomButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: ${colors.gray.light};
  color: ${colors.gray.dark};
  border: none;
  ${typography.subtitle.sm}
  height: 2.5rem;
  line-height: 1em;
  cursor: pointer;
  width: fit-content;
  padding: 0.5rem;
  border-radius: 8px;
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
  &:disabled {
    opacity: 60%;
    cursor: not-allowed;
  }
`;

export default function InputFile({
  id,
  name,
  label,
  caption,
  onChange,
  file,
})  {
  return (
    <InputWrapper>
      {label ? <StyledLabel htmlFor={id || name}>{label}</StyledLabel> : ""}
      <FileSection>
        <CustomButton htmlFor={id || name}>
          {<RiUploadLine/>}
          {"Choose a File"}
        </CustomButton>
        <File
          id={id || name}
          type="file"
          name={name}
          onChange={onChange}
        ></File>
        {file ? <ChosenFile style={{color: `${colors.gray.dark}`}}>{file.name}</ChosenFile> : <ChosenFile style={{color: `${colors.gray.gray}`}}>No file chosen</ChosenFile>}
      </FileSection>
      <Caption>{caption}</Caption>
    </InputWrapper>
  )
}

InputFile.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  caption: PropTypes.string,
  onChange: PropTypes.func,
};