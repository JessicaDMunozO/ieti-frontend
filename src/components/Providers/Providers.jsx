import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import "../../components/Providers/Providers.css"

const Providers = () => {
    const [providers, setProviders] = useState();

    const [search, setSearch] = useState("");

    const baseURL = "http://localhost:80/db/providers";

    const localStorageToken = localStorage.getItem("token");
    const role = JSON.parse(localStorage.getItem("role"));

    useEffect(() => {
        if (localStorageToken) {
            const token = JSON.parse(localStorageToken);
            axios.get(baseURL, {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            }).then((response) => {
                const filteredProviders = response.data.filter(provider => {
                    return provider.pharmacy.toLowerCase().includes(search.toLowerCase()) || provider.medicines.some(medicine => medicine.medicine_name.toLowerCase().includes(search.toLowerCase()));
                });
                setProviders(filteredProviders);
            });
        }
    }, [search]);

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

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    const handleAddProvider = () => {
        navigate(`/addProvider`);
    };


    if (!providers) return null

    return (
        <div>
            <h1>Providers</h1>
            <button className='addProvider_button' onClick={handleAddProvider}>Add provider</button>
            <input type="text" value={search} onChange={handleSearchChange} placeholder="providers or medicines... " />
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
                            <button className='update_button' onClick={() => handleUpdateMedicine(provider.pharmacy)} disabled={role === "doctor"}>Update medicine</button>
                            <button className='add_button' onClick={() => handleAddMedicine(provider.pharmacy)} disabled={role === "doctor"}>Add medicine</button>
                            <button className='delete_button' onClick={() => handleDeleteMedicine(provider.pharmacy)} disabled={role === "doctor"}>Delete medicine</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Providers;