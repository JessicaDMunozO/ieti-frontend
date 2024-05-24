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
        <div className='bodyProviders'>
            <h1>Providers</h1>
            <button className='addProvider_button' onClick={handleAddProvider} disabled={role === "doctor"}>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> Add provider
                </span>
            </button>
            <div className="group">
                <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                    <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                </svg>
                <input placeholder="Providers or medicines... " type="search" className="input_search" value={search} onChange={handleSearchChange} />
            </div>
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