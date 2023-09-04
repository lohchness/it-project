import "./Group.css";
const Group = () => {
  return (
    <div className="frame-parent">
      <div className="frame-group">
        <div className="mask-group-parent">
          <img className="mask-group-icon1" alt="" src="/mask-group1@2x.png" />
          <div className="name-lastname-parent">
            <div className="name-lastname">Name LastName</div>
            <div className="job-position">Job position</div>
          </div>
        </div>
        <div className="icon-logo-facebook-parent">
          <img
            className="icon-logo-facebook"
            alt=""
            src="/-icon-logo-facebook.svg"
          />
          <img
            className="icon-logo-instagram"
            alt=""
            src="/-icon-logo-instagram.svg"
          />
          <img
            className="icon-logo-twitter"
            alt=""
            src="/-icon-logo-twitter.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Group;
