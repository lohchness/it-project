import "./ConnectionComponent.css";

const ConnectionComponent = (connection) => {
    // const 
  return (
    <div className="connection1">
      <div className="last_contact">{connection.last_contact}</div>
      <div className="in_touch">connection.touch_status</div>
      <button className="name">connection.name</button>
      <div className="connection-child" />
      <div className="tags">connection.tag</div>
      <img className="mask-group-icon" alt="" src="/undefined2.png" />
      <img className="connection1-item" alt="" src="/vector-2.svg" />
      <button className="delete">
        <img className="vector-icon3" alt="" src="/vector.svg" />
        <img className="vector-icon4" alt="" src="/vector1.svg" />
        <img className="vector-icon5" alt="" src="/vector2.svg" />
      </button>
    </div>
  );
};

export default ConnectionComponent;
