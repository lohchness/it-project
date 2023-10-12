import CalendarContainer from "../../components/calendar/CalendarContainer";
import AddActivityForm from "../../components/calendar/AddActivityForm";
import Header from "../../components/Header";

import "./Calendar.css";
const Calendar = () => {

  return (
    <div className="calendar">
      <Header />
      <div className="calendar-crm-container">
        <span className="span">{` Calendar `}</span>
        <span className="crm">{`> CRM`}</span>
      </div>
      <CalendarContainer />
      <AddActivityForm />
      
    </div>
  );
};

export default Calendar;