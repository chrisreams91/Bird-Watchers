//import styles from '../mybirds.css'
//import React, { useState, useEffect, useRef } from 'react';
//import { useParams } from 'react-router-dom';
//
//import axios from 'axios';
//
//
//const DonationRequestData = () => {
//
//
//    const[donation_request, setDonationReq]=useState('')
//    const[donation_link, setDonationLink]=useState('')
//    const { id } = useParams();
//    const[donations, setDonations]=useState([]);
//    const donationReqName = useRef("");
//    const dateName = useRef("");
//    const donationLinkName = useRef("");
//    const { username } = useParams();
//
//
//
//     useEffect(() => {
//       const fetchDonations = async () => {
//         try {
//           const token = localStorage.getItem('jwtToken');
//           let response;
//            if (username) {
//             response = await axios.get(`http://localhost:8080/donations/entries/${username}`, {
//             headers: {
//               Authorization: `Bearer ${token}`
//             }
//            });
//           } else {
//           response = await axios.get("http://localhost:8080/donations/entries", {
//               headers: {
//                   Authorization: `Bearer ${token}`
//                 }
//               });
//           }
//           setDonations(response.data);
//         } catch (error) {
//           console.error('Error fetching donation requests:', error);
//         }
//       };
//
//      fetchDonations();
//      const intervalId = setInterval(fetchDonations, 2000);
//      return () => clearInterval(intervalId);
//    }, []);
//
//
// const loadDonations = async () => {
//          const result = await axios.get(`http://localhost:8080/donations/add/${id}`);
//          setDonations(result.data);
//        };
//
//
//
//    return (
//     <div>
//
//     <div className="myEntry">
//         <h2>User Donation Requests</h2>
//      <table>
//        <tbody>
//        <br/>
//        <br/>
//        <br/>
//        <br/>
//        <br/>
//            {donations.map((donation) => (
//            <div>
//            <div className="entryText">
//            <div className="container">
//
//               <br/>
//               <br/>
//               <br/>
//               <br/>
//               <br/>
//               <br/>
//               <br/>
//               <br/>
//               <br/>
//               <br/>
//               <br/>
//               <br/>
//              <p>
//                  <h2 className="title">{donation.donation_request}</h2>
//                      <div className="list">
//                      <div className="column">
//                           <li>Donation Link: {donation.donation_link}</li>
//                           <li>Date Requested: {donation.date}</li>
//
//                      </div>
//                      </div>
//              </p>
//              </div>
//              </div>
//              </div>
//            ))}
//        </tbody>
//      </table>
//      </div>
//      </div>
//    )
//  }
//export default DonationRequestData;