import styled from "@emotion/styled";
import { IoMdClose } from "react-icons/io";
import { colors } from "../../styles/colors";

const TagWrapper = styled.div`
  max-width: 116px;
  height: 24px;
  background-color: ${colors.pink.shallow};
  border-radius: 8px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 4px;
  padding: 8px 4px;
`;

const TagText = styled.div`
  font-size: 12px;
  color: #616161;
  max-width: 80px;
  white-space: nowrap;
  font-family: Inter;
  font-style: normal;
  letter-spacing: 0.4px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const TagIcon = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

function Tag() {
  return (
    <>
      <TagWrapper>
        <TagText>manufactoring</TagText>
        <TagIcon>
          <IoMdClose style={{ width: "16px", height: "16px", color: "gray" }} />
        </TagIcon>
      </TagWrapper>
    </>
  );
}

export default Tag;
