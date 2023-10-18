import ShowResults from "../../components/connections/ShowResults";
import AddNewConnection from "../../components/connections/AddNewConnection";
import PageNumBox from "../../components/connections/Page1";
import ConnectionComponent from "../../components/connections/ConnectionComponent";



import styles from "./Connections.css";
import Navbar from "../../components/Navbar";

import { React, useEffect, useState } from "react";
import { SERVER_URL } from "../../index.js";

const Connections = () => {

    const [connections, setConnections] = useState([]);

    useEffect(() => {
        async function getConnections() {
            const response = await fetch(SERVER_URL + `/connection/`);

            if (!response.ok) {
                const message = `Response not ok. An error occured: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const connections = await response.json();
            setConnections(connections)
        }

        getConnections();

        return;
    }, [connections.length]);

    // This method will delete a record
    async function deleteConnection(id) {
        await fetch(SERVER_URL + `/connection/${id}`, {
            method: "DELETE"
        });

        const newConnections = connections.filter((el) => el._id !== id);
        setConnections(newConnections);
    }

    // function ConnectionsContainer() {
    //     return connections.map((connection) => {

    //     })
    // }

    return (
        <>
            <Navbar />

            <div className="connections">
                <div className="background">
                    <img className="background-icon" alt="" src="/background.svg"/>
                    
                    <button className="add-new-connections">
                        <img className="add-icon" alt="" src="/add-icon.svg" />
                        <div className="add-new-connection">Add New Connection</div>
                    </button>
                    
                    <div className="connections-crm-container">
                        <span className="sort-by">Connections</span>
                        <span className="crm">
                            <span className="span">{` `}</span>
                            <span>{`> CRM`}</span>
                        </span>
                    </div>
                    <div className="background-child"/>
                </div>

                <div className="connectionlist">
                    <ConnectionComponent/>
                </div>

                <div className="bar">
                    <button className="name">Name</button>
                    <button className="last-contact">Last Contact</button>
                    <button className="touch">Touch</button>
                    <div className="tag">Tag</div>
                </div>

                <div className="filters">
                    <button className="filter-all">
                        <div className="filters1" />
                        <div className="all">ALL</div>
                    </button>
                    <button className="filter-registered">
                        <div className="filters2" />
                        <div className="registered">REGISTERED</div>
                    </button>
                    <button className="filter-madeup">
                        <div className="filters3" />
                        <div className="made-up">MADE UP</div>
                    </button>
                </div>

                <div className="filter">Filter :</div>

            </div>
            <input className="search-bar" placeholder="search..." type="text" />
        </>


        // <div>
        //     <Navbar/>

        //     {/* <div className="background"> */}
        //         <div className="connections">
        //             <div className={styles.connectionsCrmContainer}>
        //             <span className={styles.sortBy}>Connections</span>
        //             <span className={styles.crm}>
        //                 <span className={styles.span}>{` `}</span>
        //                 <span>{`> CRM`}</span>
        //                 </span>
        //             </div>

        //             <div className={styles.connectionlist}>
        //                 {connections.map((connection) => (
        //                     <ConnectionComponent
        //                         key={connection._id} // Assume each connection has a unique property `_id`
        //                         connectionName={connection.name} // replace with actual property names
        //                         lastContact={connection.lastContact} // from your fetched data
        //                         touchStatus={connection.status}
        //                         tagName={connection.tag}
        //                     // ...other props
        //                     />
        //                 ))}
        //             </div>
        //         </div>
        //     {/* </div> */}

        // </div>
    );

    // ...rest of your component

};

export default Connections;
