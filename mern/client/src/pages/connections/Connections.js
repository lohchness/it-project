import { useCallback } from "react";
import ShowResults from "../../components/connections/ShowResults";
import AddNewConnection from "../../components/connections/AddNewConnection";
import PageNumBox from "../../components/connections/Page1";
import ConnectionComponent from "../../components/connections/ConnectionComponent";
import { useNavigate } from "react-router-dom";
import styles from "./Connections.module.css";
import Header from "../../components/Header";

const Connections = () => {
//   const navigate = useNavigate();

//   const onDashboardClick = useCallback(() => {
//     // Please sync "Dashboard" to the project
//   }, []);

//   const onConnectionsClick = useCallback(() => {
//     navigate("/");
//   }, [navigate]);

//   const onProfileClick = useCallback(() => {
//     // Please sync "Profile" to the project
//   }, []);

//   const onCalendarClick = useCallback(() => {
//     // Please sync "Calendar" to the project
//   }, []);

//   const onMessengerClick = useCallback(() => {
//     // Please sync "Messaging" to the project
//   }, []);

  return (
    <div className={styles.connections}>
      <div className={styles.background}>
        <img className={styles.backgroundIcon} alt="" src="/background.svg" />
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
        <div className={styles.connectionsCrmContainer}>
          <span className={styles.sortBy}>Connections</span>
          <span className={styles.crm}>
            <span className={styles.span}>{` `}</span>
            <span>{`> CRM`}</span>
          </span>
        </div>
        <div className={styles.backgroundChild} />
      </div>
      <div className={styles.connectionlist}>
        <ConnectionComponent
          connectionName="Aidan Tang"
          lastContact="28th Aug, 2023"
          touchStatus="In Touch"
          tagName="Student"
          avatar="/undefined2.png"
          lastContactLeft="246px"
          deleteTop="18.52%"
          deleteBottom="41.3%"
          connectionLeft="4px"
          connectionWidth="923px"
          losingTouchLeft="501px"
          landlordLeft="743px"
          deleteWidth="2.17%"
          deleteLeft="97.83%"
          vectorIconBottom="-2.3%"
          deleteHeight="40.19%"
          connection2Position="absolute"
          connection2Top="0px"
          nameTextDecoration="unset"
          nameCursor="pointer"
          nameBorder="none"
          namePadding="0"
          nameBackgroundColor="transparent"
          vector2="/vector-2.svg"
          vectorIconObjectFit="unset"
          vector="/vector.svg"
          vectorIconObjectFit1="unset"
          vector1="/vector1.svg"
          vectorIconObjectFit2="unset"
          vector3="/vector2.svg"
          vectorIconObjectFit3="unset"
        />
        <ConnectionComponent
          connectionName="Bunny Superlonglas..."
          lastContact="9th Feb, 2023"
          touchStatus="Losing Touch"
          tagName="Landlord"
          avatar="/undefined2.png"
          lastContactLeft="252px"
          deleteTop="17.86%"
          deleteBottom="43.39%"
          connectionLeft="4px"
          connectionWidth="923px"
          losingTouchLeft="483px"
          landlordLeft="743px"
          deleteWidth="2.17%"
          deleteLeft="97.83%"
          vectorIconBottom="-2.3%"
          deleteHeight="38.75%"
          connection2Position="absolute"
          connection2Top="70px"
          nameTextDecoration="unset"
          nameCursor="pointer"
          nameBorder="none"
          namePadding="0"
          nameBackgroundColor="transparent"
          vector2="/vector-2.svg"
          vectorIconObjectFit="unset"
          vector="/vector3.svg"
          vectorIconObjectFit1="unset"
          vector1="/vector1.svg"
          vectorIconObjectFit2="unset"
          vector3="/vector2.svg"
          vectorIconObjectFit3="unset"
        />
        <ConnectionComponent
          connectionName="Name Lastname"
          lastContact="14th May, 2021"
          touchStatus="Not In Touch"
          tagName="Landlord"
          avatar="/undefined2.png"
          lastContactLeft="248px"
          deleteTop="14.29%"
          deleteBottom="46.96%"
          connectionLeft="4px"
          connectionWidth="923px"
          losingTouchLeft="485px"
          landlordLeft="743px"
          deleteWidth="2.17%"
          deleteLeft="97.83%"
          vectorIconBottom="-2.3%"
          deleteHeight="38.75%"
          connection2Position="absolute"
          connection2Top="142px"
          nameTextDecoration="unset"
          nameCursor="pointer"
          nameBorder="none"
          namePadding="0"
          nameBackgroundColor="transparent"
          vector2="/vector-2.svg"
          vectorIconObjectFit="unset"
          vector="/vector3.svg"
          vectorIconObjectFit1="unset"
          vector1="/vector1.svg"
          vectorIconObjectFit2="unset"
          vector3="/vector2.svg"
          vectorIconObjectFit3="unset"
        />
        <ConnectionComponent
          connectionName="Chicken McSpicy"
          lastContact="22th Aug, 2023"
          touchStatus="In Touch"
          tagName="Other Renters"
          avatar="/undefined2.png"
          lastContactLeft="246px"
          deleteTop="14.29%"
          deleteBottom="46.96%"
          connectionLeft="0px"
          connectionWidth="927px"
          losingTouchLeft="501px"
          landlordLeft="724px"
          deleteWidth="2.16%"
          deleteLeft="97.84%"
          vectorIconBottom="-2.3%"
          deleteHeight="38.75%"
          connection2Position="absolute"
          connection2Top="214px"
          nameTextDecoration="unset"
          nameCursor="pointer"
          nameBorder="none"
          namePadding="0"
          nameBackgroundColor="transparent"
          vector2="/vector-2.svg"
          vectorIconObjectFit="unset"
          vector="/vector3.svg"
          vectorIconObjectFit1="unset"
          vector1="/vector1.svg"
          vectorIconObjectFit2="unset"
          vector3="/vector2.svg"
          vectorIconObjectFit3="unset"
        />
        <ConnectionComponent
          connectionName="Quarter Pounder"
          lastContact="28th Apr, 2020"
          touchStatus="Not In Touch"
          tagName="Student"
          avatar="/undefined2.png"
          lastContactLeft="248px"
          deleteTop="14.29%"
          deleteBottom="46.96%"
          connectionLeft="0px"
          connectionWidth="927px"
          losingTouchLeft="485px"
          landlordLeft="743px"
          deleteWidth="2.16%"
          deleteLeft="97.84%"
          vectorIconBottom="-2.3%"
          deleteHeight="38.75%"
          connection2Position="absolute"
          connection2Top="290px"
          nameTextDecoration="unset"
          nameCursor="pointer"
          nameBorder="none"
          namePadding="0"
          nameBackgroundColor="transparent"
          vector2="/vector-2.svg"
          vectorIconObjectFit="unset"
          vector="/vector3.svg"
          vectorIconObjectFit1="unset"
          vector1="/vector1.svg"
          vectorIconObjectFit2="unset"
          vector3="/vector2.svg"
          vectorIconObjectFit3="unset"
        />
        <ConnectionComponent
          connectionName="Chicken McNuggets"
          lastContact="5th Jan, 2023"
          touchStatus="Losing Touch"
          tagName="Other Renters"
          avatar="/undefined2.png"
          lastContactLeft="252px"
          deleteTop="16.07%"
          deleteBottom="45.18%"
          connectionLeft="0px"
          connectionWidth="927px"
          losingTouchLeft="483px"
          landlordLeft="725px"
          deleteWidth="2.16%"
          deleteLeft="97.84%"
          vectorIconBottom="-2.3%"
          deleteHeight="38.75%"
          connection2Position="absolute"
          connection2Top="362px"
          nameTextDecoration="unset"
          nameCursor="pointer"
          nameBorder="none"
          namePadding="0"
          nameBackgroundColor="transparent"
          vector2="/vector-2.svg"
          vectorIconObjectFit="unset"
          vector="/vector3.svg"
          vectorIconObjectFit1="unset"
          vector1="/vector4.svg"
          vectorIconObjectFit2="unset"
          vector3="/vector2.svg"
          vectorIconObjectFit3="unset"
        />
        <ConnectionComponent
          connectionName="Hash Brown"
          lastContact="18th Jul, 2023"
          touchStatus="In Touch"
          tagName="Landlord"
          avatar="/undefined2.png"
          lastContactLeft="251px"
          deleteTop="14.29%"
          deleteBottom="46.96%"
          connectionLeft="0px"
          connectionWidth="927px"
          losingTouchLeft="501px"
          landlordLeft="743px"
          deleteWidth="2.16%"
          deleteLeft="97.84%"
          vectorIconBottom="-2.3%"
          deleteHeight="38.75%"
          connection2Position="absolute"
          connection2Top="434px"
          nameTextDecoration="unset"
          nameCursor="pointer"
          nameBorder="none"
          namePadding="0"
          nameBackgroundColor="transparent"
          vector2="/vector-2.svg"
          vectorIconObjectFit="unset"
          vector="/vector5.svg"
          vectorIconObjectFit1="unset"
          vector1="/vector4.svg"
          vectorIconObjectFit2="unset"
          vector3="/vector2.svg"
          vectorIconObjectFit3="unset"
        />
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
          connection2Top="506px"
          nameTextDecoration="unset"
          nameCursor="pointer"
          nameBorder="none"
          namePadding="0"
          nameBackgroundColor="transparent"
          vector2="/vector-2.svg"
          vectorIconObjectFit="unset"
          vector="/vector3.svg"
          vectorIconObjectFit1="unset"
          vector1="/vector4.svg"
          vectorIconObjectFit2="unset"
          vector3="/vector2.svg"
          vectorIconObjectFit3="unset"
        />
      </div>
      <div className={styles.bar}>
        <button className={styles.name}>Name</button>
        <button className={styles.lastContact}>Last Contact</button>
        <button className={styles.touch}>Touch</button>
        <div className={styles.tag}>Tag</div>
      </div>
      <div className={styles.heading}>
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
      <input className={styles.searchBar} placeholder="search..." type="text" />
      <Header/>
      
      
    </div>
  );
};

export default Connections;
