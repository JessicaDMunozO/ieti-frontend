import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom'

import "../../components/Signup/Signup.css"

const Signup = () => {
    const [name, setName] = useState("");
    const [document, setDocument] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [eps, setEps] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");


    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    };

    const handleDocumentChange = (event) => {
        const value = event.target.value;
        setDocument(value);
    };

    const handleAddressChange = (event) => {
        const value = event.target.value;
        setAddress(value);
    };

    const handleCityChange = (event) => {
        const value = event.target.value;
        setCity(value);
    };

    const handlePhoneChange = (event) => {
        const value = event.target.value;
        setPhone(value);
    };

    const handleEPSChange = (event) => {
        const value = event.target.value;
        setEps(value);
    };

    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);
    };

    const handleRoleChange = (event) => {
        const value = event.target.value;
        setRole(value);
    };

    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const baseURL = "http://localhost:80/db/user/register";

        const json = JSON.stringify({ "name": name, "document": document, "address": address, "city": city, "phone": phone, "eps": eps, "password": password, "role": role });


        try {
            await axios.post(baseURL, json, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='bodySignup'>
            <form className="form" onSubmit={handleSubmit}>
                <p className="title">Register </p>
                <div className="flex">
                    <label>
                        <input className="input" type="text" placeholder="" required="" value={name} onChange={handleNameChange} />
                        <span>Name</span>
                    </label>

                    <label>

                        <input className="input" type="text" required="" value={document} onChange={handleDocumentChange} />

                        <span>Document</span>
                    </label>
                </div>

                <div className="flex">
                    <label>

                        <input className="input" type="text" required="" value={address} onChange={handleAddressChange} />

                        <span>Address</span>
                    </label>

                    <label>

                        <input className="input" type="text" required="" value={city} onChange={handleCityChange} />

                        <span>City</span>
                    </label>
                </div>

                <div className="flex">
                    <label>

                        <input className="input" type="text" required="" value={phone} onChange={handlePhoneChange} />

                        <span>Phone</span>
                    </label>

                    <label>

                        <input className="input" type="text" required="" value={eps} onChange={handleEPSChange} />

                        <span>EPS</span>
                    </label>
                </div>

                <label>
                    <input className="input" type="password" placeholder="Password" required="" value={password} onChange={handlePasswordChange} />
                </label>

                <div className="container">
                    <form>
                        <label>
                            <input type="radio" name="radio" value="doctor" onChange={handleRoleChange}/>
                                <span>Doctor</span>
                        </label>
                        <label>
                            <input type="radio" name="radio" value="farmacia" onChange={handleRoleChange}/>
                                <span>Pharmacy</span>
                        </label>
                    </form>
                </div>


                <button className="submit">Submit</button>
            </form>
        </div>
    );
}

export default Signup;