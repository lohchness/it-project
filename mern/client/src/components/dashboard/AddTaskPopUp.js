import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./AddTaskPopUp.css";

import { SERVER_URL } from "../../index.js";
import Cookies from "universal-cookie";

export default function AddTask({ onClose }) {


  const [form, setForm] = useState({
    description: "",
    duedate: "",
    email:"",
    status:"inProgress",
  });


    useEffect(() => {
        // Fetch the user's email when the component mounts
        const cookies = new Cookies();
        const tokenValue = cookies.get("token");

        fetch(SERVER_URL + `/user/get-current-user`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${tokenValue}`
            }
        })
            .then((response) => response.json())
            .then((emailData) => {
                const userEmail = emailData.user.userEmail;
                // Set the email address in the state
                setForm((prevForm) => ({
                    ...prevForm,
                    email: userEmail,
                }));
            })
            .catch((error) => {
                console.error("Error fetching email:", error);
            });
    }, []); // The empty dependency array ensures this effect runs once when the component mounts

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();
        const newTask = { ...form };

        await fetch(SERVER_URL + "/task", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask),
        })
            .catch(error => {
                window.alert(error);
                return;
            });

        setForm({ description: "", duedate: "", email: form.email, status:"" });
        //navigate("/");
        window.location.reload();
    }
    return (
        <div className="add-task-popup">
            <form onSubmit={onSubmit}>
                <div className="popup">
                    <input
                        className="duedate"
                        placeholder="Due Date"
                        type="text"
                        id="position"
                        value={form.duedate}
                        onChange={(e) => updateForm({ duedate: e.target.value })}
                        required
                    />
                    <div className="description-wrapper">
                        <textarea
                            name="description"
                            placeholder="Description"
                            type="text"
                            id="position"
                            value={form.description}
                            onChange={(e) => updateForm({ description: e.target.value })}
                            required
                        />
                    </div>
                    <div className="add-task-confirm-button">
                        <input
                            type="submit"
                            value="Confirm"
                            className="confirm-control"
                        />
                    </div>
                    <button className="add-task-cancel-button" onClick={onClose}>
                        <div className="cancel">Cancel</div>
                    </button>
                </div>

            </form>
        </div>
    );
}