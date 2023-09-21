import TaskContainer from "../../components/dashboard/TaskContainer";
import UpcomingEventsContainer from "../../components/dashboard/UpcomingEventsContainer";
import ConnectionsForm from "../../components/dashboard/ConnectionsForm";
import Header from "../../components/Header";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-crm-container">
        <span className="span">{` Dashboard `}</span>
        <span className="crm">{`> CRM`}</span>
      </div>
      <TaskContainer />
      <div className="total-connections">
        <div className="connections-made-this">Total connections</div>
        <div className="total-connect">254</div>
      </div>
      <div className="monthly-connections">
        <div className="connections-made-this">Connections made this month</div>
        <div className="monthly-connect">22</div>
      </div>
      <UpcomingEventsContainer />
      <ConnectionsForm />
      <Header />
    </div>
  );
};

export default Dashboard;
