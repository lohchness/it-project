import "./ConnectionComponent.css";

const ConnectionComponent = (connection) => {
    const date = new Date(connection.last_contact);
    console.log(date);
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    return (
        <div className="connectionitem">
            <button className="name">{connection.made_up_name}</button>
            <div className="last_contact">{day}-{month}-{year}</div>
            <div className="touch">{connection.touch_status}</div>
            <div className="tags">{connection.tags}</div>
            {/* <img className="mask-group-icon" alt="" src="/undefined2.png" /> */}
            <button className="delete">
                <img className="del-button" alt="" src="/DeleteIcon.png" />
                {/* <img className="vector-icon3" alt="" src="/vector.svg" />
                <img className="vector-icon4" alt="" src="/vector1.svg" />
                <img className="vector-icon5" alt="" src="/vector2.svg" /> */}
            </button>
        </div>
    );
};

export default ConnectionComponent;
