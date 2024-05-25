import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from "axios";
import '../UpdateMedicine/UpdateMedicine.css';

const UpdateUser = () => {
  const [userInfo, setUserInfo] = useState({});
  const [error, setError] = useState(false);


  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [eps, setEps] = useState("");
 ;

  const localStorageToken = localStorage.getItem("token");

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

  const handleEpsChange = (event) => {
    const value = event.target.value;
    setEps(value);
  };


  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = JSON.parse(localStorageToken);
    const baseURL = "http://localhost:80/db/user/update";
    const json = JSON.stringify({  "document": userInfo.document, "eps": eps, "address": address, "city": city, "phone": phone });

    try {
      await axios.put(baseURL, json, {
        headers: {
          'Content-Type': 'application/json',
          "authorization": `Bearer ${token}`
        }
      });
      navigate(`/profile/${userInfo.document}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("token"));

        if (!token) throw new Error('No token found');

        const document = localStorage.getItem('document');
        if (!document) throw new Error('No document found in localStorage');

        const response = await axios.get(`http://localhost:80/db/user/${document}`, {
          headers: {
            "authorization": `Bearer ${token}`,
          },
        });

        const userData = response.data[0];
        setUserInfo(userData);

      
        setAddress(userData.address || "");
        setCity(userData.city || "");
        setPhone(userData.phone || "");
        setEps(userData.eps || "");
    
      } catch (error) {
        console.error('Error fetching profile:', error);
        setError(true);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className='bodyUpdateMedicine'>
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Update Personal Data</p>
        <div>
          <label>
            
            
            <input
              className="input"
              type="text"
              required
              value={eps}
              onChange={handleEpsChange}
              placeholder="Eps"
            />
            <span>Eps</span><br />
            <input
              className="input"
              type="text"
              required
              value={address}
              onChange={handleAddressChange}
              placeholder="Address"
            />
            <span>Address</span><br />
            <input
              className="input"
              type="text"
              required
              value={city}
              onChange={handleCityChange}
              placeholder="City"
            />
            <span>City</span><br />
            <input className="input" type="text" required="" value={phone} onChange={handlePhoneChange}  placeholder="Phone"/>
              <span>Phone</span><br></br>
        
          </label>
        </div>
        <button className="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateUser;
