import React from "react";
import  JsPDF  from "jspdf";


function SearchTrip() {

    const generatePDF = () => {
        console.log("hhh");
        const report = new JsPDF('landscape','px','a4');
        report.html(document.querySelector('#ticket')).then(() => {
            report.save('report.pdf');
        })
      }
  return (
    <>

    <div className="flex justify-center items-center " id="ticket">
    <div className="stats bg-primary text-primary-content ">
      <div className="stat">
        <div className="stat-title">From</div>
        <div className="stat-value">Safi</div>
        <div className="stat-actions">
          <div className="btn btn-sm btn-success">Date Depart : 1971-07-17</div>
        </div>
      </div>

      <div className="stat">
        <div className="stat-title">To</div>
        <div className="stat-value">Berkane</div>
        <div className="stat-actions">
          <div className="btn btn-sm">Date Arrive :2030-01-01</div>
        </div>
      </div>
      <div className="stat">
        <div className="stat-title">Price</div>
        <div className="stat-value">$18.00</div>
        <div className="stat-actions">
          <div className="btn btn-sm">Time :6 h 5 min</div>
          <div className="btn btn-sm">Time :8 h 5 min</div>
        </div>
      </div>
          <button className="btn  glass" onClick={()=>generatePDF()}>Take One</button>
    </div>
    </div>
    </>
  );
}

export default SearchTrip;
