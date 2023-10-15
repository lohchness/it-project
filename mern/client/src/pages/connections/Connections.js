import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

import ShowResults from "../../components/connections/ShowResults";
import AddNewConnection from "../../components/connections/AddNewConnection";
import PageNumBox from "../../components/connections/Page1";
import ConnectionComponent from "../../components/connections/ConnectionComponent";

import styles from "./Connections.module.css";
import Navbar from "../../components/Navbar";

const Connections = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const tokenValue = cookies.get("USER-TOKEN");

    // If token does not exist, redirect to login page
    useEffect(() => {
        if (!tokenValue) {
            navigate("/login");
        }
    }, []);

    // Check to see if JWT token exists before laoding page
    if (!tokenValue) {
        navigate("/login");
    } else {
        return (

            <div className="connections">
                <Navbar />
                <div className={styles.connectionsCrmContainer}>
                    <span className={styles.sortBy}>Connections</span>
                    <span className={styles.crm}>
                        <span className={styles.span}>{` `}</span>
                        <span>{`> CRM`}</span>
                    </span>
                </div>
                <div className={styles.background}>
                    <img className={styles.backgroundIcon} alt="" src="/background.svg" />
                    <div className={styles.heading}>
                        <input className={styles.searchBar} placeholder="search..." type="text" />
                        <div className={styles.headingChild} />
                        <div className={styles.sortByContainer}>
                            <span className={styles.sortBy}>{`Sort by `}</span>
                            <span>▼</span>
                        </div>
                        <div className={styles.filters}>
                            <button className={styles.filterAll}>
                                <div className={styles.filters1} />
                                <div className={styles.all}>ALL</div>
                            </button>
                            <button className={styles.filterRegistered}>
                                <div className={styles.filters2} />
                                <div className={styles.registered}>REGISTERED</div>
                            </button>
                            <button className={styles.filterMadeup}>
                                <div className={styles.filters3} />
                                <div className={styles.madeUp}>MADE UP</div>
                            </button>
                        </div>
                        <div className={styles.filter}>Filter :</div>
                    </div>
                    <div className={styles.bar}>
                        <button className={styles.name}>Name</button>
                        <button className={styles.lastContact}>Last Contact</button>
                        <button className={styles.touch}>Touch</button>
                        <button className={styles.tag}>Tag</button>
                    </div>


                    <ShowResults
                        showingResultsNum="Showing 8 out of 254 Results"
                        showing8OutTop="782px"
                        showing8OutLeft="87px"
                    />
                    <AddNewConnection
                        addNewConnectionTop="730px"
                        addNewConnectionLeft="138px"
                        vector="/add-icon.svg"
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
                    <div className={styles.pages}>
                        <PageNumBox
                            pageNum="1"
                            page1Left="0px"
                            rectangleDivBackgroundColor="#1cbabd"
                            rectangleDivBorder="unset"
                            rectangleDivBoxSizing="unset"
                            divLeft="13px"
                        />
                        <PageNumBox
                            pageNum="2"
                            page1Left="36px"
                            rectangleDivBackgroundColor="unset"
                            rectangleDivBorder="1px solid var(--color-white-100)"
                            rectangleDivBoxSizing="border-box"
                            divLeft="11px"
                        />
                        <PageNumBox
                            pageNum="..."
                            page1Left="72px"
                            rectangleDivBackgroundColor="unset"
                            rectangleDivBorder="1px solid var(--color-white-100)"
                            rectangleDivBoxSizing="border-box"
                            divLeft="11px"
                        />
                        <PageNumBox
                            pageNum="31"
                            page1Left="108px"
                            rectangleDivBackgroundColor="unset"
                            rectangleDivBorder="1px solid var(--color-white-100)"
                            rectangleDivBoxSizing="border-box"
                            divLeft="9px"
                        />
                        <PageNumBox
                            pageNum="32"
                            page1Left="144px"
                            rectangleDivBackgroundColor="unset"
                            rectangleDivBorder="1px solid var(--color-white-100)"
                            rectangleDivBoxSizing="border-box"
                            divLeft="7px"
                        />
                    </div>

                    <div className={styles.backgroundChild} />

                    <div className={styles.connectionlist}>
                        <ConnectionComponent
                            connectionName="Oreo McFlurry"
                            lastContact="3rd Dec, 2022"
                            touchStatus="Losing Touch"
                            tagName="Landlord"
                            avatar="/undefined2.png"
                            lastContactLeft="251px"
                            deleteTop="12.5%"
                            deleteBottom="48.75%"
                            connectionLeft="0px"
                            connectionWidth="927px"
                            losingTouchLeft="483px"
                            landlordLeft="743px"
                            deleteWidth="2.16%"
                            deleteLeft="97.84%"
                            vectorIconBottom="-2.3%"
                            deleteHeight="38.75%"
                            connection2Position="absolute"
                            connection2Top="20px"
                            nameTextDecoration="unset"
                            nameCursor="pointer"
                            nameBorder="none"
                            namePadding="0"
                            nameBackgroundColor="transparent"
                            vector2="/vector-2.svg"
                            vectorIconObjectFit="unset"
                            vector="/vector.svg"
                            vectorIconObjectFit1="unset"
                            vector1="/vector4.svg"
                            vectorIconObjectFit2="unset"
                            vector3="/vectore2.svg"
                            vectorIconObjectFit3="unset"
                        />
                    </div>
                </div>

            </div>
        );
    }
};

export default Connections;
