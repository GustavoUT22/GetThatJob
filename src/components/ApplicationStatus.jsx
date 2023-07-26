import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { format } from "date-fns";
import {
  RiChatCheckLine,
  RiMailCheckLine,
  RiPauseCircleLine,
  RiMailLine,
} from "react-icons/ri";
import { useNavigate, useParams } from "react-router";

import { typography } from "../styles";
import Button from "./buttons/Button";
import { colors } from "../styles";
import { updateStatus, getStatus } from "../services/recruiter-service";

const Container = styled.div`
  display: flex;
  gap: 3.1rem;
`;

const TextContainer = styled.div`
  display: flex;
  text-align: center;
  gap: 0.25rem;

  width: 10rem;
`;

const Status = styled.p`
  ${typography.caption};
  color: ${colors.pink.pink};
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SendOn = styled.p`
  ${typography.caption};
`;

const ApplicationStatus = ({ props, status, setStatus }) => {
  // const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleStart = async () => {
    console.log("handling");
    try {
      await updateStatus(props.id, { status: "Review in progress" });
      setStatus(!status);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleFinish = async () => {
    try {
      await updateStatus(props.id, { status: "Review finished" });
      setStatus(!status);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  // const handleUpdate = () => {
  //   setStatus(status + 1)
  // }

  const sendDate = props.created_at;

  function formatFecha(date) {
    const actualDate = new Date();
    const sendOnDate = new Date(date);
    const timeDifference = actualDate.getTime() - sendOnDate.getTime();
    const dayDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    const weekDifference = Math.floor(dayDifference / 7);

    if (dayDifference === 0) {
      return "Sent today";
    } else if (dayDifference === 1) {
      return "Sent 1 day ago";
    } else if (weekDifference === 1) {
      return "Sent 1 week ago";
    } else if (weekDifference > 1) {
      return `Sent on ${format(new Date(sendOnDate), "dd/MM/yy")}`;
    } else {
      return "Sent " + dayDifference + " days ago";
    }
  }

  const originalDate = sendDate;
  const result = formatFecha(originalDate);

  return (
    <Container>
      <TextContainer>
        <SendOn>
          <IconWrapper>
            <RiMailLine /> {result}
          </IconWrapper>
        </SendOn>
        <Status>
          <IconWrapper>
            {props.status === "Waiting for review" ? <RiPauseCircleLine /> : ""}
            {props.status === "Review in progress" ? <RiMailCheckLine /> : ""}
            {props.status === "Review finished" ? <RiChatCheckLine /> : ""}
            {props.status}
          </IconWrapper>
        </Status>
      </TextContainer>
      {props.status === "Waiting for review" ? (
        <Button type={"secondary"} size={"sm"} onClick={handleStart}>
          Mark as Started
        </Button>
      ) : props.status === "Review in progress" ? (
        <Button type={"secondary"} size={"sm"} onClick={handleFinish}>
          Mark as Finished
        </Button>
      ) : (
        <Button type={"inactive"} size={"sm"}>
          Finished
        </Button>
      )}
    </Container>
  );
};

export default ApplicationStatus;
