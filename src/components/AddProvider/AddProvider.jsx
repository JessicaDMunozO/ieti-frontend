import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

import "../../components/AddProvider/AddProvider.css"

const AddProvider = () => {
    const [pharmacy, setPharmacy] = useState("");

    const localStorageToken = localStorage.getItem("token");

    const handlePharmacyChange = (event) => {
        const value = event.target.value;
        setPharmacy(value);
    };

    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = JSON.parse(localStorageToken);
        const baseURL = "http://localhost:80/db/providers/new";
        const json = JSON.stringify({ "pharmacy": pharmacy, 
        "medicines": [
        ]});

        try {
            await axios.post(baseURL, json, {
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${token}`
                }
            });
            navigate('/addMedicine/'+pharmacy);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='bodyAddProvider'>
            <form className="form" onSubmit={handleSubmit}>
                <p className="title">New provider</p>
                <div>
                    <label>
                        <input className="input" type="text" required="" value={pharmacy} onChange={handlePharmacyChange} />
                        <span>Pharmacy</span><br></br>
                    </label>
                </div>
                <button className="submit">Add provider</button>
            </form>
        </div>
    );
}

export default AddProvider;