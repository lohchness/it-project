import CalendarContainer from "../../components/CalendarContainer";
import AddActivityForm from "../../components/AddActivityForm";
import Header from "../../components/Header";

//import "./Calendar.css";
const Calendar = () => {

  return (
    <div className="calendar">
      <div className="calendar-crm-container">
        <span>Calendar</span>
        <span className="span">{` `}</span>
        <span className="crm">{`> CRM`}</span>
      </div>
      <CalendarContainer />
      <AddActivityForm />
      <Header />
    </div>
  );
};

export default Calendar;
