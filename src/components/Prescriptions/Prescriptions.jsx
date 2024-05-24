import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import "../../components/Prescriptions/Prescriptions.css"

const Prescriptions = () => {
    const [domicile, setDomicile] = useState("");
    const [address, setAddress] = useState("");
    const [provider, setProvider] = useState("");
    const [doctor_name, setDoctorName] = useState("");
    const [patient_document, setPatientDocument] = useState("");
    const [patient_name, setPatientName] = useState("");
    const [medicines, setMedicines] = useState([{ medicine_name: "", amount: "", authorization_required: "" }]);
    const [medicineQuantity, setMedicineQuantity] = useState(1);


    const localStorageToken = localStorage.getItem("token");

    const handleDomicileChange = (event) => {
        const value = event.target.value;
        setDomicile(value);
    };

    const handleAddressChange = (event) => {
        const value = event.target.value;
        setAddress(value);
    };

    const handleProviderChange = (event) => {
        const value = event.target.value;
        setProvider(value);
    };

    const handleDoctorNameChange = (event) => {
        const value = event.target.value;
        setDoctorName(value);
    };

    const handlePatientDocumentChange = (event) => {
        const value = event.target.value;
        setPatientDocument(value);
    };

    const handlePatientNameChange = (event) => {
        const value = event.target.value;
        setPatientName(value);
    };

    const handleMedicineChange = (index, field, value) => {
        const newMedicines = [...medicines];
        newMedicines[index][field] = value;
        setMedicines(newMedicines);
    };
    
    const handleMedicineQuantityChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setMedicineQuantity(value);
    
        const newMedicines = Array.from({ length: value }, (_, i) => medicines[i] || { 
            medicine_name: "", 
            amount: "", 
            authorization_required: "" });
        setMedicines(newMedicines);
    };

    
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = JSON.parse(localStorageToken).token;
        const baseURL = "http://localhost:80/db/orders/new";
        const json = JSON.stringify({ 
            "medicines": medicines.map(medicine => ({
                medicine_name: medicine.medicine_name,
                amount: medicine.amount,
                authorization_required: medicine.authorization_required
            })),
            "domicile": domicile,  
            "address": address, 
            "provider": provider,  
            "doctor_name": doctor_name, 
            "patient_document": patient_document,  
            "patient_name": patient_name
        });

        try {
            await axios.post(baseURL, json, {
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${token}`
                }
            });
            navigate('/mainPage');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='bodyCreatePrescriptions'>
            <form className="form" onSubmit={handleSubmit}>
                <p className="title">New Prescription</p>
                <label>
                    <input className="input" type="number" required="" value={medicineQuantity} onChange={handleMedicineQuantityChange} />
                    <span>Quantity</span><br></br>
                </label>
                {medicines.map((medicine, index) => (
                    <div key={index}>
                        <label>
                            <input className="input" type="text" required="" value={medicine.medicine_name} onChange={(e) => handleMedicineChange(index, 'medicine_name', e.target.value)} />
                            <span>Medicine Name</span><br></br>
                        </label>
                        <label>
                            <input className="input" type="text" required="" value={medicine.amount} onChange={(e) => handleMedicineChange(index, 'amount', e.target.value)} />
                            <span>Amount</span><br></br>
                        </label>
                        <label>
                            <input className="input" type="text" required="" value={medicine.authorization_required} onChange={(e) => handleMedicineChange(index, 'authorization_required', e.target.value)} />
                            <span>Authorization Required</span><br></br>
                        </label>
                    </div>
                ))}
                <label>
                    <input className="input" type="text" required="" value={domicile} onChange={handleDomicileChange} />
                    <span>Domicile</span><br></br>
                </label>
                <label>
                    <input className="input" type="text" required="" value={address} onChange={handleAddressChange} />
                    <span>Address</span><br></br>
                </label>
                <label>
                    <input className="input" type="text" required="" value={provider} onChange={handleProviderChange} />
                    <span>Provider</span><br></br>
                </label>
                <label>
                    <input className="input" type="text" required="" value={doctor_name} onChange={handleDoctorNameChange} />
                    <span>Doctor Name</span><br></br>
                </label>
                <label>
                    <input className="input" type="text" required="" value={patient_document} onChange={handlePatientDocumentChange} />
                    <span>Patient Document</span><br></br>
                </label>
                <label>
                    <input className="input" type="text" required="" value={patient_name} onChange={handlePatientNameChange} />
                    <span>Patient Name</span><br></br>
                </label>
                <button className="submit">Create Order</button>
            </form>
        </div>
    );
    
}

export default Prescriptions;