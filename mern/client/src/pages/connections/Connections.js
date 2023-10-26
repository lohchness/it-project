import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

import ShowResults from "../../components/connections/ShowResults";
import AddNewConnection from "../../components/connections/AddNewConnection";
import PageNumBox from "../../components/connections/Page1";
import ConnectionComponent from "../../components/connections/ConnectionComponent";

import styles from "./Connections.module.css";
import Navbar from "../../components/Navbar";

import { React, useEffect, useState } from "react";
import { SERVER_URL } from "../../index.js";


const Connections = ({ setProfileUserEmail }) => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const tokenValue = cookies.get("token");
    const [connections, setConnections] = useState([]);
    const [connectionsCount, setConnectionsCount] = useState(0);

    useEffect(() => {
        if (!tokenValue) {
            navigate("/login");
        }
        async function getConnections() {

            const email = await fetch(`${SERVER_URL}/user/get-current-user`, {
                method: 'GET',
                headers: {
                  'Authorization': `Bearer ${tokenValue}`
                }
            });
            const emailData = await email.json();
            const userEmail = emailData.user.userEmail;      

            const response = await fetch(`${SERVER_URL}/connection?email=${userEmail}`);

            if (!response.ok) {
                const message = `An error occured: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const connections = await response.json();
            console.log("connections");
            if (connections.registered_user == true) {

            }
            setConnectionsCount(connections.length); // set the count
            setConnections(connections);
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

    const handleAddConnection = (newConnection) => {
        fetch(`${SERVER_URL}/connection`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newConnection),
        })
            .then(response => response.json())
            .then(data => {
                // The new connection has been added, now add it to the state
                setConnections(prevConnections => [...prevConnections, data]);
            });
    };

    // Check to see if JWT token exists before laoding page
    if (!tokenValue) {
        navigate("/login");
    } else {
        return (
            <>
                <Navbar />
                <div className="connections" >
                    <div className={styles.connectionsContainer}>
                        <div className={styles.heading}>
                            <div className={styles.sortByContainer}>
                                <span className={styles.sortBy}>{`Sort by `}</span>
                                <span>▼</span>
                            </div>
                            <div className={styles.filterContainer}>
                                <div className={styles.filter}>Filter:</div>
                                <div className={styles.filters}>
                                    <button className={styles.filterAll}>ALL</button>
                                    <button className={styles.filterRegistered}>REGISTERED</button>
                                    <button className={styles.filterMadeup}>MADE UP</button>
                                </div>
                            </div>
                            <input className={styles.searchBar} placeholder="search..." type="text" />
                        </div>
                        <div className={styles.bar}>
                            <button className={styles.name}>Name</button>
                            <button className={styles.lastContact}>Last Contact</button>
                            <button className={styles.touch}>Touch</button>
                            <button className={styles.tag}>Tag</button>
                        </div>


                        <div className={styles.connectionlist}>
                            {connections.map((connection) => (
                                <ConnectionComponent
                                    key={connection._id.$oid}
                                    connection={connection}
                                    setProfileUserEmail={setProfileUserEmail}
                                />
                            ))}
                        </div>

                        <div className={styles.connectionsFooter}>
                            <ShowResults
                                showingResultsNum={`Showing ${connectionsCount} connections`}
                                showing8OutTop="530px"
                                showing8OutLeft="87px"
                            />

                            <AddNewConnection
                                addNewConnectionTop="500px"
                                addNewConnectionLeft="87px"
                                vector="/public/add-icon.svg"
                                vectorIconHeight="20px"
                                vectorIconWidth="20px"
                                vectorIconTop="2px"
                                vectorIconRight="unset"
                                vectorIconBottom="unset"
                                vectorIconLeft="0px"
                                vectorIconMaxWidth="unset"
                                vectorIconMaxHeight="unset"
                                vectorIconObjectFit="unset"
                            />
                        </div>

                    </div>

                </div>
            </>
        );
    }
};

export default Connections;
