import { startOfMonth, endOfMonth, differenceInDays, subMonths, format } from "date-fns";
import { useState } from "react";
import "./CalendarContainer.css";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarContainer = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startDate = startOfMonth(currentDate);
  const endDate = endOfMonth(currentDate);
  const numDays = differenceInDays(endDate, startDate) + 1;
  const startDay = startDate.getDay();
  const endDay = 6 - endDate.getDay();

  function prevMonth(value) {
    return setCurrentDate((prev) => {
      return { ...prev, ...value };
    });
  }

  return (
    <div className="calendar-wrapper">
      <div className="calendar-heading">
        <div >{`<`}</div>
        <div className="heading">{currentDate.toLocaleDateString('en-us', { year:"numeric", month:"long"})}</div>
        <div >{`>`}</div>
      </div>
      <div className="grid-wrapper">
        {days.map((day) => <div >{day}</div>)}
        {Array.from({length: startDay}).map((_) => ( <div className = "cell" />))}
        {Array.from({length: numDays}).map((_, index) => ( <div className="cell">{index+1}</div>))}
        {Array.from({length: endDay}).map((_) => ( <div className = "cell" />))}
      </div>
    </div>
  );
};

export default CalendarContainer;