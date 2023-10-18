import "./ConnectionComponent.css";

const ConnectionComponent = (connection) => {
    const date = new Date(connection.last_contact);
    console.log(date);
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    
    return (
        <div className="connectionitem">
            <div className="last_contact">{day}-{month}-{year}</div>
            <div className="in_touch">{connection.touch_status}</div>
            <button className="name">{connection.made_up_name}</button>
            <div className="connection-child" />
            <div className="tags">{connection.tags}</div>
            {/* <img className="mask-group-icon" alt="" src="/undefined2.png" /> */}
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
