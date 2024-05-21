import React, { useState, useEffect } from 'react'
import axios from "axios";

import "../../components/MainPage/MainPage.css"

const MainPage = () => {
    const [orders, setOrders] = useState();

    const baseURL = "http://localhost:80/db/orders";

    const localStorageToken = localStorage.getItem("token");

    const obtainOrders = () => {
        if (localStorageToken) {
            const token = JSON.parse(localStorageToken);
            axios.get(baseURL, {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            }).then((response) => {
                setOrders(response.data);
            });
        }
    };

    useEffect(() => {
        obtainOrders();
    }, []);

    const handleDeliveredClick = (orderId) => {
        const updateOrderURL = "http://localhost:80/db/orders/update";

        if (localStorageToken) {
            const token = JSON.parse(localStorageToken).token;

            const json = JSON.stringify({ "order_id": orderId });

            axios.put(updateOrderURL, json, {
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${token}`
                }
            }).then(() => {
                obtainOrders();
            });
        }
    };

    if (!orders) return null

    return (
        <div>
            <h1>Orders</h1>
            <div className='cards-container'>
                {orders.map((order) => (
                    <div className="card" key={order.order_id}>
                        <div className="card-border-top">
                        </div>
                        <span>Patient {order.patient_name}</span>
                        <p className="document"> Document: {order.patient_document}</p>
                        <p className="address"> Address: {order.address}</p>
                        {order.delivered ? <p className="delivered">State: delivered</p> : <p className="delivered">State: pending</p>}
                        <p className="doctor"> Doctor: {order.doctor_name}</p>
                        {order.domicile ? <p className="domicile">Domicile: Yes</p> : <p className="domicile">Domicile: No</p>}
                        <p className="provider"> Provider: {order.provider}</p>
                        <p className="medicines"> Medicines: </p>
                        <ul>
                            {order.medicines.map((medicine, i) => (
                                <li className="medicine" key={i}>{medicine.medicine_name}: {medicine.amount}</li>
                            ))}
                        </ul>
                        <button onClick={() => handleDeliveredClick(order.order_id)} disabled={order.delivered}> {order.delivered ? "Delivered" : "Mark as delivered"} </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MainPage;