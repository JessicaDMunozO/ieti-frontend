import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

import "../../components/UpdateMedicine/UpdateMedicine.css"

const UpdateMedicine = () => {
    const [medicine, setMedicine] = useState("");
    const [laboratory, setLaboratory] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");

    const { pharmacy } = useParams();
    const localStorageToken = localStorage.getItem("token");

    const handleMedicineChange = (event) => {
        const value = event.target.value;
        setMedicine(value);
    };

    const handleLaboratoryChange = (event) => {
        const value = event.target.value;
        setLaboratory(value);
    };

    const handlePriceChange = (event) => {
        const value = event.target.value;
        setPrice(value);
    };

    const handleStockChange = (event) => {
        const value = event.target.value;
        setStock(value);
    };

    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = JSON.parse(localStorageToken);
        const baseURL = "http://localhost:80/db/providers/update";
        const json = JSON.stringify({ "pharmacy": pharmacy, "medicine_name": medicine, "laboratory": laboratory,  "price": price, "stock": stock });

        try {
            await axios.put(baseURL, json, {
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${token}`
                }
            });
            navigate('/providers');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='bodyUpdateMedicine'>
            <form className="form" onSubmit={handleSubmit}>
                <p className="title">Update medicine data for {pharmacy} </p>
                <div>
                    <label>
                        <input className="input" type="text" required="" value={medicine} onChange={handleMedicineChange} />
                        <span>Medicine</span><br></br>
                        <input className="input" type="text" required="" value={laboratory} onChange={handleLaboratoryChange} />
                        <span>Laboratory</span><br></br>
                        <input className="input" type="text" required="" value={price} onChange={handlePriceChange} />
                        <span>Price</span><br></br>
                        <input className="input" type="text" required="" value={stock} onChange={handleStockChange} />
                        <span>Stock</span><br></br>
                    </label>
                </div>
                <button className="submit">Update</button>
            </form>
        </div>
    );
}

export default UpdateMedicine;