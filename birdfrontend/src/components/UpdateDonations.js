import React, { useEffect, useState, useRef } from "react";
import { useParams } from 'react-router-dom';
import styles from "../mybirds.css";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';

function UpdateDonations() {

    const[date,setDate]=useState(getCurrentDate());
    const[donation_request,setDonationReq]=useState('');
    const[donation_link, setDonationLink]=useState('');
    const[donations, setDonations]=useState([]);
    const donationReqName = useRef("");
    const dateName = useRef("");
    const donationLinkName = useRef("");

     function getCurrentDate() {
                const currentDate = new Date();
                const year = currentDate.getFullYear();
                const month = String(currentDate.getMonth() + 1).padStart(2, '0');
                const day = String(currentDate.getDate()).padStart(2, '0');
                return `${year}-${month}-${day}`;
              }

        const [username, setUsername] = useState('');
          useEffect(() => {
            const token = localStorage.getItem('jwtToken');
            if (token) {
              const decodedToken = jwtDecode(token);
              setUsername(decodedToken.sub);
            }
          }, []);


        const [donationsData, setDonationsData] = useState({
            donation_request: '',
            donation_link: '',
            date: ''
          });

           const {id} = useParams();

           const handleInputChange = (e) => {
               const { name, value } = e.target;
               setDonationsData({
                 ...donationsData,
                 [name]: value
               });
             };


         const handleSubmit = async (e) => {
           e.preventDefault();
           try {
             const token = localStorage.getItem('jwtToken');
             if (!token) {
               throw new Error('No JWT token found');
             }
             const response = await axios.put(
               `http://localhost:8080/donations/add/${id}`,
               {
                 ...donationsData,
                 username: username
               },
               {
                 headers: {
                   Authorization: `Bearer ${token}`
                 }
               }
             );
             console.log(response);
           } catch (err) {
             console.error(err);
           }
         };


    return (
           <div>
           <div className="entry">
                        <h2>Update Donation Request</h2>
                        </div>
           <div className="loginText">
           <form id="update-donations-post" onSubmit={handleSubmit}>


                <br />
                  <label htmlFor="title" className="loginEntry">Donation Request</label>
                  <input type="text" className="loginEntry" ref={donationReqName} id="donation_request" name="donation_request" value={donationsData.donation_request} onChange={handleInputChange} required/>

                  <br />
                  <br />

                   <label htmlFor="blogText"  className="loginEntry">Donation Link</label>
                   <textarea id="blogText"  className="loginEntry" ref={donationLinkName} name="donation_link" value={donationsData.donation_link} onChange={handleInputChange} required></textarea>

                   <br />
                   <br />

                    <label htmlFor="date">Date:</label>
                              <input type="date" ref={dateName} id="date" name="date" value={donationsData.date}
                                                                                               onChange={handleInputChange} required/>
                              <br />
                              <br />
                  <button className="loginButton">Update Donation Request</button>
            </form>
            </div>
           </div>
    )
}

export default UpdateDonations;