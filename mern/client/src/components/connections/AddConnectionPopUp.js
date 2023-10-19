import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./AddConnectionPopUp.css";

import { SERVER_URL } from "../../index.js";

export default function AddConnection({ onClose }) {

    const [form, setForm] = useState({
        ConnectionId: "",
    })
    const navigate = useNavigate();

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefault();

        const newConnection = { ...form };

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

        setForm({ ConnectionId: "" });
        window.location.reload();
    }

    return (
        <div className="add-connection-popup">
            <form onSubmit={onSubmit}>
                <div className="conn-popup">
                    <input
                        className="conn-id"
                        placeholder="Connection ID"
                        type="text"
                        id="position"
                        value={form.ConnectionId}
                        onChange={(e) => updateForm({ ConnectionId: e.target.value })}
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