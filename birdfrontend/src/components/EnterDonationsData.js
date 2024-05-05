import React from "react";
import { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Comments from "./Comments.js"

function DonationsData() {

  const[donation_request, setDonationReq]=useState('');
  const[date,setDate]=useState(getCurrentDate());
  const[donation_link, setDonationLink]=useState('');
  const[donations, setDonations]=useState([]);
  const donationReqName = useRef("");
  const dateName = useRef("");
  const donationLinkName = useRef("");
  const [errors, setErrors] = useState({});
  const commentName = useRef("");
  const[comment, setComment]=useState('');
  const[data, setData] = useState([]);
  const navigate = useNavigate();
  const [editId, setEditID] = useState(-1);

  useEffect(()=> {
  const updateDonations = async (id) => {
    axios.get(`http://localhost:8080/donations/add/${id}`)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
    }
  }, [])

  const clearFormFields = () => {
        setDonationReq('');
        setDonationLink('');
        setDate(getCurrentDate());

      };

    const getUsernameFromToken = (token) => {
          const decoded = jwtDecode(token);
          return decoded.sub;
        };


  function getCurrentDate() {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

const handleSubmit = async (event) => {
       event.preventDefault();
       donationReqName.current.value = "";
       donationLinkName.current.value = "";
       dateName.current.value = "";

       const token = localStorage.getItem('jwtToken');
       const decodedToken = getUsernameFromToken(token);
       const username = getUsernameFromToken(token);
       const newDonationEntry = { donation_request, donation_link, date, username};
       console.log("New Donation Entry", newDonationEntry);
       try {
         const token = localStorage.getItem('jwtToken');
         await fetch("http://localhost:8080/donations/add", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
             Authorization: `Bearer ${token}`
           },
           body: JSON.stringify(newDonationEntry)
         });
         console.log("New donation request has been added!");
         setDonationReq('');
         setDonationLink('');
         setDate('');


       } catch (error) {
         console.error("Error adding donation request:", error);
       }
     };

  const deleteDonations = async (id) => {
      try {
        const token = localStorage.getItem('jwtToken');
        await axios.delete(`http://localhost:8080/donations/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(`Donation with id ${id} has been deleted`);
      } catch (error) {
        console.error('Error deleting donation:', error);
      }
    };


  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        const response = await fetch('http://localhost:8080/donations/getAll', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Unauthorized');
        }
        const data = await response.json();
        setDonations(data);
      } catch (error) {
        console.error('Error fetching donations:', error);
      }
    };

     fetchDonations();
     const intervalId = setInterval(fetchDonations, 2000);
     return () => clearInterval(intervalId);
   }, []);

//      const loadDonations = async () => {
//               const result = await axios.get(`http://localhost:8080/donations/add/${id}`);
//               setDonations(result.data);
//             };


  return (
   <div>
    <div className="loginText">
      <form onSubmit={handleSubmit}>
        <br />
          <label htmlFor="title" className="loginEntry">Donation Requests</label>
          <input type="text" className="loginEntry" ref={donationReqName} id="donation_request" name="donation_request" value={donation_request} onChange={(event)=>setDonationReq(event.target.value)} required/>

          <br />
          <br />

           <label htmlFor="blogText"  className="loginEntry">Donation Link</label>
           <textarea id="blogText"  className="loginEntry" ref={donationLinkName} id="donation_link" name="donation_link" value={donation_link} onChange={(event)=>setDonationLink(event.target.value)} required></textarea>

           <br />
           <br />

           <label htmlFor="date">Date Seen:</label>
                     <input type="date" ref={dateName} id="date" name="date" value={date} onChange={(event)=>setDate(event.target.value)} required/>
                     <br />

          <button type="submit" className="loginButton">Submit Donation Request</button>
     </form>
   </div>
   <br />
   <br />

         <div className="myEntry">
             <h2>User Requests</h2>
          <table>
            <tbody>
                {donations.map((donation) => (
                <div key={donation.id}>
                <div className="blogText">
                <div className="container">
                   <br />
                  <div className="img">
                     <img width={250} height={250}></img>
                    </div>

                  <p>
                      <h2 className="title">{donation.donation_request}</h2>
                          <div className="list">
                          <div className="column">
                               <p>{donation.donation_link}</p>
                               <p>{donation.comment}</p>
                               <p>{donation.date}</p>
                               <p>{donation.username}</p>


                                       <br />
                                       <br />
                                       <div>
                                       <Comments currentUserId="1"/>
                                       </div>
                                         <br />


                          </div>
                          </div>
                          <div>
                          <div>
                          <td>

                               <button type="button" className="entryButtons">
                               <a href={`/updatedonations/${donation.id}`} className="entryButtons">
                               <div className="buttonLevel">
                               <img src="https://static.thenounproject.com/png/2473159-200.png" width={50} height={50}></img>
                               </div>
                               </a>
                               </button>

                              <div>
                              <td>
                              <div>
                              <td>
                              </td>
                              </div>
                              </td>
                              </div>
                              <button type="button" className="entryButtons" onClick={() => deleteDonations(donation.id)}>
                              <div className="buttonLevel">
                                  <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/delete-1476282-1248958.png?f=webp" width={50} height={50}></img>
                              </div>
                              </button>
                          </td>
                          </div>
                          </div>
                  </p>
                  </div>
                  </div>
                  </div>
                ))}
            </tbody>
          </table>
          </div>
          </div>
  )


}

export default DonationsData;