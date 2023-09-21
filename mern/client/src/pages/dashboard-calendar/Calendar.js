import CalendarContainer from "/Users/a1/Downloads/it-project/mern/client/src/components/CalendarContainer";
import AddActivityForm from "/Users/a1/Downloads/it-project/mern/client/src/components/AddActivityForm";
import Header from "/Users/a1/Downloads/it-project/mern/client/src/components/Header";

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
