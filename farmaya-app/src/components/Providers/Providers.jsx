import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import "../../components/Providers/Providers.css"

const Providers = () => {
    const [providers, setProviders] = useState();

    const baseURL = "http://localhost:80/db/providers";

    const localStorageToken = localStorage.getItem("token");

    useEffect(() => {
        if (localStorageToken) {
            const token = JSON.parse(localStorageToken).token;
            axios.get(baseURL, {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            }).then((response) => {
                setProviders(response.data);
            });
        }
    }, []);

    const navigate = useNavigate();

    const handleUpdateMedicine = (pharmacy) => {
        localStorage.setItem("pharmacy", JSON.stringify(pharmacy));
        navigate("/updateMedicine");
    };

    const handleAddMedicine = () => {
        navigate("/addMedicine");
    };


    if (!providers) return null

    return (
        <div>
            <h1>Providers</h1>
            <div className='cards-container'>
                {providers.map((provider) => (
                    <div className="card" key={provider._id}>
                        <div className="card-border-top">
                        </div>
                        <span>Provider {provider.pharmacy}</span>
                        <p className="medicines"> Medicines: </p>
                        <ul>
                            {provider.medicines.map((medicine, i) => (
                                <div className='medicine_data'>
                                    <li className="medicine_name" key={i + medicine.medicine_name}>Medicine: {medicine.medicine_name}</li>
                                    <li className="medicine_description" key={i + medicine.description}>Description: {medicine.description}</li>
                                    <li className="medicine_laboratory" key={i + medicine.laboratory}>Laboratory: {medicine.laboratory}</li>
                                    <li className="medicine_price" key={i + medicine.price}>Price: {medicine.price}</li>
                                    <li className="medicine_stock" key={i + medicine.stock}>Stock: {medicine.stock}</li>
                                </div>
                            ))}
                        </ul>
                        <div className='providers_buttons'>
                            <button className='update_button' onClick={() => handleUpdateMedicine(provider.pharmacy)}>Update medicine</button>
                            <button className='add_button' onClick={handleAddMedicine}>Add medicine</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Providers;