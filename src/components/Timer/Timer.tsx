import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./timer.css";

const RowContainer = styled.div`
  color: hsl(0, 0%, 100%);
  display: flex;
  justify-content: center;
  gap: 1.4vmax;
  background-color: #944700cc;
  width: 700px;
  padding: 50px 0;
  margin: 0 auto;
  border: 2px solid white;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    width: 500px;
  }
  @media screen and (max-width: 576px) {
    width: 300px;
  }
`;

// const Heading = styled.h1`
//   color: #000000;
//   text-shadow: 0px 0px 10px rgb(0 0 0 / 30%);
//   font-family: "RocknRoll One", Sans-serif;
//   font-size: 32px;
// `;
// const Title = styled.p`
//   font-size: 16px;
//   line-height: 24px;
//   margin-bottom: 40px;
//   color: white;
// `;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 2px solid white;
  background-color: #313131;
  border-radius: 50%;
  @media screen and (max-width: 768px) {
  }
`;

const ItemValue = styled.span`
  color: white;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 0px;
  text-align: center;
`;
const ItemLabel = styled.p`
  color: white;
  font-size: 14px;
  margin-bottom: 3px;
  letter-spacing: 0;
`;

const Card = styled.div`
  align-self: baseline;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const Timer = ({ mintStartAt }: any) => {
  const [title, setTitle] = useState("");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerVisible, setTimerVisible] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now() / 1000;
      if (now < mintStartAt) {
        setTitle(`Countdown`);
        setDays(Math.floor((mintStartAt - now) / (60 * 60 * 24)));
        setHours(Math.floor((mintStartAt - now) / (60 * 60)) % 24);
        setMinutes(Math.floor((mintStartAt - now) / 60) % 60);
        setSeconds(Math.floor(mintStartAt - now) % 60);
        setTimerVisible(true);
      } else {
        setTimerVisible(false);
      }
    }, 0);
    return () => clearInterval(timer);
  }, [mintStartAt]);

  return timerVisible ? (
    <div className="timer-mint-container">
      <Card>
        <RowContainer className="timer-container">
          <Item className="days-cirlce">
            <ItemValue id="days">
              {days.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
            </ItemValue>
            <ItemLabel>DAYS</ItemLabel>
          </Item>
          <Item className="hours-cirlce">
            <ItemValue id="days">
              {hours.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
            </ItemValue>
            <ItemLabel>HOURS</ItemLabel>
          </Item>
          <Item className="minutes-cirlce">
            <ItemValue id="days">
              {minutes.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
            </ItemValue>
            <ItemLabel>MINUTES</ItemLabel>
          </Item>
          <Item className="seconds-cirlce">
            <ItemValue id="days">
              {seconds.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
            </ItemValue>
            <ItemLabel>SECONDS</ItemLabel>
          </Item>
        </RowContainer>
      </Card>
    </div>
  ) : (
    <>{/* <Mint /> */}</>
  );
};

export default Timer;
