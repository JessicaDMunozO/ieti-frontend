import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

import "../../components/DeleteMedicine/DeleteMedicine.css"

const DeleteMedicine = () => {
    const [medicine, setMedicine] = useState("");

    const { pharmacy } = useParams();
    const localStorageToken = localStorage.getItem("token");

    const handleMedicineChange = (event) => {
        const value = event.target.value;
        setMedicine(value);
    };

    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = JSON.parse(localStorageToken).token;
        const baseURL = "http://localhost:80/db/providers/" + pharmacy + "/" + medicine;

        try {
            await axios.delete(baseURL, {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            });
            navigate('/providers');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='bodyDeleteMedicine'>
            <form className="form" onSubmit={handleSubmit}>
                <p className="title">Delete a medicine for {pharmacy} </p>
                <div>
                    <label>
                        <input className="input" type="text" required="" value={medicine} onChange={handleMedicineChange} />
                        <span>Medicine</span><br></br>
                    </label>
                </div>
                <button className="submit">Delete medicine</button>
            </form>
        </div>
    );
}

export default DeleteMedicine;