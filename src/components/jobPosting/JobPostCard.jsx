import React, { useState } from "react";
import styled from "@emotion/styled";

import {
  RiAccountCircleLine,
  RiMailOpenLine,
  RiBuilding3Line,
  RiCalendar2Line,
  RiMoneyDollarCircleLine,
  RiSearchLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";

const jobPostInfo = [
  { title: "Category", icon: <RiBuilding3Line />, value: "Manufacturing" },
  { title: "Category", icon: <RiCalendar2Line />, value: "Full Time" },
  {
    title: "Category",
    icon: <RiMoneyDollarCircleLine />,
    value: "2.0k - 2.5k",
  },
];

const Container = styled.div`
  diplay: flex;
  flex-direction: column;
  background-color: blue;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e1e2e1;
  background: white;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div:nth-of-type(1) > h3 {
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 140% */
    letter-spacing: 0.15px;
  }
  & > div:nth-of-type(1) > div {
    display: flex;
    color: #8e8e8e;
    gap: 8px;
  }
  & > div:nth-of-type(1) > div > div {
    display: flex;
    align-items: center;
    gap: 4px;
    & > span {
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px; /* 133.333% */
      letter-spacing: 0.4px;
    }
  }
  & > div:nth-of-type(2) {
    display: flex;
    gap: 4px;
  }

  & > div:nth-of-type(2) > div {
    text-align: center;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
    letter-spacing: 0.4px;
    color: #616161;
    width: 80px;
    height: 48px;
  }
  & > div:nth-of-type(2) > div:last-child {
    color: #f48fb1;
  }
  & > div:nth-of-type(3) {
    display: flex;
  }
  & > div:nth-of-type(3) > div {
    padding-right: 16px;
  }
`;

const JobDetailCard = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  & > div > h3 {
    color: #bf5f82;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.15px;
    margin-bottom: 8px;
  }
  & > div > p {
    color: #373737;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: 0.25px;
    width: 760px;
  }
`;

const JobPostCard = () => {
  const [showDetail, setShowDetail] = useState(false);

  function handleShowDetail() {
    if (showDetail) {
      setShowDetail(false);
    }
    if (!showDetail) {
      setShowDetail(true);
    }
  }
  return (
    <Container>
      <CardContainer>
        <div>
          <h3>The job title</h3>
          <div>
            {jobPostInfo.map((jobPost, index) => (
              <div key={index}>
                {jobPost.icon}
                <span>{jobPost.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div>
            <RiMailOpenLine />
            <p>Open on</p>
            <p>07/11/20</p>
          </div>
          <div>
            <div>
              <RiAccountCircleLine />
              <span>5</span>
            </div>
            <p>Total</p>
            <p>Candidates</p>
          </div>
          <div>
            <div>
              <RiAccountCircleLine />
              <span>3</span>
            </div>
            <p>Candidates</p>
            <p>on Track</p>
          </div>
        </div>
        <div>
          <div>
            <button>Show</button>
            <button>Close</button>
          </div>
          <div onClick={handleShowDetail}>
            <RiArrowDownSLine />
          </div>
        </div>
      </CardContainer>
      {showDetail && (
        <JobDetailCard>
          <div>
            <h3>About the job position</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quis diam fringilla, luctus lectus dictum, volutpat lacus. Vivamus
              lacinia felis ut mauris lacinia elementum. Sed faucibus dapibus
              egestas. Etiam dolor neque, posuere at purus cursus, molestie
              eleifend lacus. Aenean eu diam eu enim commodo accumsan ut sit
              amet odio. Nam maximus varius leo, et porttitor ante sodales ut.
              Pellentesque euismod commodo nunc ut tincidunt. Sed fringilla nunc
              leo, a euismod ipsum aliquet placerat. Integer suscipit semper mi,
              sit amet mollis augue mollis in. Proin vestibulum accumsan elit,
              id pellentesque diam fermentum eget. Aliquam mattis quis quam ut
              faucibus. Duis finibus nulla nec enim eleifend dapibus.
            </p>
          </div>
          <div>
            <h3>Mandatory Requirements</h3>
            <p>
              - Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />-
              Aenean aliquam turpis eget egestas porta. <br />- Quisque
              tristique nunc ut sem pretium bibendum.
              <br /> - Phasellus sit amet turpis laoreet, mattis elit ut, luctus
              ligula. <br />- Nullam blandit arcu eget justo hendrerit finibus.
            </p>
          </div>
          <div>
            <h3>Optional Requirements</h3>
            <p>
              - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />- Maecenas vel metus imperdiet, malesuada dolor a, pulvinar
              tellus.
            </p>
          </div>
        </JobDetailCard>
      )}
    </Container>
  );
};

export default JobPostCard;
