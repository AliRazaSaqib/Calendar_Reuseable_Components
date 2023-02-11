import React, { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import styled from "styled-components";
import calendarIcon from "../../assets/calander.svg";
import inputIcon from "../../assets/inputIcon.svg";

const CalendarContainer = styled.div`
  position: relative;
  padding: 20px 0;
  margin-left: 50px;
`;

const CalendarInput = styled.div``;

const Input = styled.input`
  width: 82px;
  height: 24px;
  background: #ffffff;
  border: 1px solid #a9aebc;
  border-radius: 8px;
  padding: 8px 8px 8px 46px;
  outline: none;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  max-width: 320px;
  width: 100%;
  max-height: 350px;
  height: 100vh;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 8px;
  border-radius: 8px;
  background-color: ${(props) => (props.confirm ? "#004555" : "transparent")};
  color: ${(props) => (props.confirm ? "white" : "#383000")};
  font-weight: 600;
  font-size: 14px;
  border: none;
  cursor: pointer;
`;

const Image = styled.img`
  position: absolute;
  padding-right: ${(props) => (props.inputCalendarIcon ? "10px" : "")};
  border-right: ${(props) =>
    props.inputCalendarIcon ? "1px solid #A9AEBC" : ""};
  left: ${(props) => (props.inputCalendarIcon ? "12px" : "28px")};
  top: ${(props) => (props.inputCalendarIcon ? "32px" : "20px")};
`;

const Calendar = ({ onConfirm, onCancel }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selected, setSelected] = useState(null);

  const months = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "June",
    "July",
    "Aug.",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];

  const formatDate = (date) => {
    const dayOfWeek = date.toLocaleString("default", { weekday: "short" });
    const month = months[date.getMonth()];
    const day = date.getDate();
    return `${dayOfWeek}, ${month} ${day}`;
  };

  let footer = "";
  if (selected) {
    footer = (
      <>
        <ButtonContainer>
          <Button
            onClick={() => {
              onCancel(setSelected);
              setShowCalendar(false);
            }}
          >
            Cancel
          </Button>
          <Button
            confirm
            onClick={() => {
              onConfirm(formatDate(selected));
              setShowCalendar(false);
            }}
          >
            Confirm
          </Button>
        </ButtonContainer>
      </>
    );
  }

  return (
    <CalendarContainer>
      <CalendarInput>
        <Image src={inputIcon} inputCalendarIcon />
        <Input
          value={selected ? formatDate(selected) : ""}
          onClick={() => setShowCalendar(true)}
        />
      </CalendarInput>

      {showCalendar && (
        <DateContainer>
          <Image src={calendarIcon} />

          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={footer}
          />
        </DateContainer>
      )}
    </CalendarContainer>
  );
};

export default Calendar;
