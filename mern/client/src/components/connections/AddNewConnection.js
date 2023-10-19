import { useCallback, useMemo,useState} from "react";
import styles from "./AddNewConnection.module.css";
import AddConnectionPopUp from "./AddConnectionPopUp";
import PortalPopup from "../PortalPopup";

const AddNewConnection = ({
    addNewConnectionTop,
    addNewConnectionLeft,
    vector,
    vectorIconHeight,
    vectorIconWidth,
    vectorIconTop,
    vectorIconRight,
    vectorIconBottom,
    vectorIconLeft,
    vectorIconMaxWidth,
    vectorIconMaxHeight,
    vectorIconObjectFit,
}) => {
    const addNewConnectionStyle = useMemo(() => {
        return {
            top: addNewConnectionTop,
            left: addNewConnectionLeft,
        };
    }, [addNewConnectionTop, addNewConnectionLeft]);

    const vectorIcon4Style = useMemo(() => {
        return {
            height: vectorIconHeight,
            width: vectorIconWidth,
            top: vectorIconTop,
            right: vectorIconRight,
            bottom: vectorIconBottom,
            left: vectorIconLeft,
            maxWidth: vectorIconMaxWidth,
            maxHeight: vectorIconMaxHeight,
            objectFit: vectorIconObjectFit,
        };
    }, [
        vectorIconHeight,
        vectorIconWidth,
        vectorIconTop,
        vectorIconRight,
        vectorIconBottom,
        vectorIconLeft,
        vectorIconMaxWidth,
        vectorIconMaxHeight,
        vectorIconObjectFit,
    ]);

    const [isPopUpOpen, setPopUpOpen] = useState(false);

    const openConnectionPopUp = useCallback(() => {
        setPopUpOpen(true);
    }, []);

    const closeConnectionPopUp = useCallback(() => {
        setPopUpOpen(false);
    }, []);

    return (
        <button className={styles.addNewConnection} style={addNewConnectionStyle} onClick={openConnectionPopUp}>+
            <img
                className={styles.vectorIcon}
                alt=""
                src={vector}
                style={vectorIcon4Style}
            />
            <div className={styles.addNewConnection1}>Add New Connection</div>
            {isPopUpOpen && (
                <PortalPopup
                overlayColor="rgba(0, 0, 0, 0)"
                placement="centered"
                onOutsideClick={closeConnectionPopUp}
                >
                    <AddConnectionPopUp onClose={closeConnectionPopUp} />
                </PortalPopup>
            )}
        </button>
    );
};

export default AddNewConnection;
