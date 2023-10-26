import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./AddConnectionPopUp.css";
import Cookies from "universal-cookie";

import { SERVER_URL } from "../../index.js";



export default function AddConnection({ onClose }) {

    const cookies = new Cookies();
    const tokenValue = cookies.get("token");

    const [form, setForm] = useState({
        registered_user: true,
        made_up_name: "",
        current_user_id: "",
        friend_user_id: "",
        last_contact: "",
        tags: "",
        touch_status: "In touch",
    })
    const navigate = useNavigate();

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefault();

        // get user email
        const email = await fetch(`${SERVER_URL}/user/get-current-user`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${tokenValue}`
            }
        });
        const emailData = await email.json();
        const userEmail = emailData.user.userEmail;      

        // CONNECT YOU TO NEW CONNECTION
        const newConnection = { ...form };
        const newConnectionUser = await fetch(`${SERVER_URL}/user/get-user-by-email?email=${newConnection.friend_user_id}`, {
            method: 'GET',
            headers: {
                'Authorization' : `Bearer ${tokenValue}`
            }
        });
        const newConnectionUserData = await newConnectionUser.json();
        
        newConnection.current_user_id = userEmail;
        newConnection.last_contact = new Date();
        newConnection.made_up_name = `${newConnectionUserData.user.firstName} ${newConnectionUserData.user.lastName}`
        newConnection.tags = "";

        await fetch(SERVER_URL + "/connection", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newConnection),
        })
            .catch(error => {
                window.alert(error);
                return;
            });
        
        // CONNECT NEW CONNECTION TO YOU

        const yourConnection = { ...form };
        const yourConnectionUser = await fetch(`${SERVER_URL}/user/get-user-by-email?email=${userEmail}`, {
            method: 'GET',
            headers: {
                'Authorization' : `Bearer ${tokenValue}`
            }
        });
        const yourConnectionUserData = await yourConnectionUser.json();

        yourConnection.last_contact = new Date();
        yourConnection.current_user_id = newConnection.friend_user_id;
        yourConnection.friend_user_id = userEmail;
        yourConnection.made_up_name = `${yourConnectionUserData.user.firstName} ${yourConnectionUserData.user.lastName}`
        yourConnection.tags = "";

        await fetch(SERVER_URL + "/connection", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(yourConnection),
        })
            .catch(error => {
                window.alert(error);
                return;
        });
        

        setForm({current_user_id : ""});
        window.location.reload();
    }

    return (
        <div className="add-connection-popup">
            <form onSubmit={onSubmit}>
                <div className="conn-popup">
                    <input
                        className="conn-id"
                        placeholder="Connection E-mail"
                        type="text"
                        id="position"
                        value={form.ConnectionId}
                        onChange={(e) => updateForm({ friend_user_id: e.target.value })}
                        required
                    />
                    <div className="confirm-button">
                        <input
                            type="submit"
                            value="Confirm"
                            className="confirm-control"
                        />
                    </div>
                    <button className="cancel-button" onClick={onClose}>
                        <div className="cancel">Cancel</div>
                    </button>
                </div>

            </form>
        </div>
    )
}