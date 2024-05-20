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
        navigate(`/updateMedicine/${pharmacy}`);
    };

    const handleAddMedicine = (pharmacy) => {
        navigate(`/addMedicine/${pharmacy}`);
    };

    const handleDeleteMedicine = (pharmacy) => {
        navigate(`/deleteMedicine/${pharmacy}`);
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
                                    <li className="medicine_name" key={i + medicine.medicine_name}>{medicine.medicine_name}</li>
                                    <li className="medicine_description" key={i + medicine.description}>{medicine.description}</li>
                                    <li className="medicine_laboratory" key={i + medicine.laboratory}>{medicine.laboratory}</li>
                                    <li className="medicine_price" key={i + medicine.price}>{medicine.price}</li>
                                    <li className="medicine_stock" key={i + medicine.stock}>{medicine.stock}</li>
                                </div>
                            ))}
                        </ul>
                        <div className='providers_buttons'>
                            <button className='update_button' onClick={() => handleUpdateMedicine(provider.pharmacy)}>Update medicine</button>
                            <button className='add_button' onClick={() => handleAddMedicine(provider.pharmacy)}>Add medicine</button>
                            <button className='delete_button' onClick={() => handleDeleteMedicine(provider.pharmacy)}>Delete medicine</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Providers;