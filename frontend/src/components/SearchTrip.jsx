import React from "react";
import  JsPDF  from "jspdf";
import { useEffect,useState } from "react";
import axios from "axios";


function SearchTrip() {
 const [array,setArray]= useState([])
    const generatePDF = () => {
        console.log("hhh");
        const report = new JsPDF('landscape','px','a4');
        report.html(document.querySelector('#ticket')).then(() => {
            report.save('report.pdf');
        })
      }
      
     
      useEffect(()=>{
       const searchall = async ()=>{
      
        const formReserve = JSON.parse(localStorage.getItem("data"))
        const res = await axios.post("http://localhost:8000/api/trips/search",formReserve) 
       // array = res.data;
       // console.log(res.data)
        setArray(res.data)
       }
       searchall() 
       
      },[])
      console.log(array,'arr')
      const user = localStorage.getItem('user')
      console.log(user)
  return (
    <>

     {array?.map((item)=>(
       <div className="flex justify-center items-center my-8" id="ticket" key={item._id}>
       <div className="stats bg-primary text-primary-content ">
         <div className="stat">
           <div className="stat-title">From</div>
           <div className="stat-value">{item.from}</div>
           <div className="stat-actions">
             <div className="btn btn-sm btn-success">Date Depart : 2022-07-17</div>
           </div>
         </div>
   
         <div className="stat">
           <div className="stat-title">To</div>
           <div className="stat-value">{item.to}</div>
           <div className="stat-actions">
             <div className="btn btn-sm">Date Arrive :2022-01-01</div>
           </div>
         </div>
         <div className="stat">
           <div className="stat-title">Price</div>
           <div className="stat-value">${item.price_trip}.00</div>
           <div className="stat-actions">
             <div className="btn btn-sm">Time :6 h 5 min</div>
             <div className="btn btn-sm">Time :8 h 5 min</div>
           </div>
         </div>
      {user && (

             <button className="btn  glass" onClick={()=>generatePDF()}>Take One</button>
      )}
       </div>
       </div>
     ))

     }
    </>
  );
}

export default SearchTrip;
