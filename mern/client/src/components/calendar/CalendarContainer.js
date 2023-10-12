import { startOfMonth, endOfMonth, differenceInDays, subMonths, addMonths } from "date-fns";
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
        <div onClick={()=>setCurrentDate(subMonths(currentDate, 1))}>{`<`}</div>
        <div className="heading">{currentDate.toLocaleDateString('en-us', { year:"numeric", month:"short"})}</div>
        <div onClick={()=>setCurrentDate(addMonths(currentDate, 1))}>{`>`}</div>
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