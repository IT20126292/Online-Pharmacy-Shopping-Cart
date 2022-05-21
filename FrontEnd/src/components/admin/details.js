import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jspdf from 'jspdf';
import "jspdf-autotable";
 
const Details = (props) => (
 <tr>
   <td>{props.details.fname}</td>
   <td>{props.details.email}</td>
   <td>{props.details.tpnumber}</td>
   <td>{props.details.address}</td>
   <td>{props.details.city}</td>
   <td>{props.details.stpnumber}</td>
   <td>{props.details.status}</td>
   <td>
    <button type="button" class="btn btn-success">
     <Link className="text-light" to={`/admin/editdetails/${props.details._id}`}>Edit</Link> </button> &nbsp;
     <button type="button" class="btn btn-danger"
       onClick={() => {
        
         props.deleteRecord(props.details._id);
         
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:8090/details/all`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a details
 async function deleteRecord(id) {
   await fetch(`http://localhost:8090/details/delete/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((details) => {
     return (
       <Details
         details={details}
         deleteRecord={() => deleteRecord(details._id)}
         key={details._id}
       />
     );
   });
 }

  // genarate pdf
  const generatePDF = tickets => {

    const doc = new jspdf(); 
    var imgData = "https://upload.wikimedia.org/wikipedia/commons/2/25/Citymedicalslogo.png";   
    const tableColumn = ["Name", "Email", "Telephone", "Address", "City", "Status"];   
    const tableRows = [];        
    const date = Date().split(" ");        
    const dateStr = date[1] + " " + date[2] + ", " + date[3];

    tickets.map(ticket => {

      const ticketData = [
          
          ticket.fname,     
          ticket.email,
          ticket.tpnumber,
          ticket.address,
          ticket.city,
          ticket.status    

      ];  
      tableRows.push(ticketData);  
    })

    doc.addImage(imgData, 'JPEG', 77, 11, 60, 40);
    doc.text("Order Details", 14, 75).setFontSize(10);
    doc.text(`Date - ${dateStr}`, 14, 82);
    doc.text("All Right Reserved", 90, 284);
    doc.text("citymedicals@gmail.com | www.citymedicals.netlify.app | +94119 119 119", 47, 290);
    doc.text("© 2022 Copyright @CityMedicals", 79, 278).setFontSize(20);
    

    // right down width height

    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 9, }, startY:90});
    doc.save("Order Report.pdf");

    // © 2022 Copyright @CityMedicals

  };
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
    
     

     <div class="container mt-3">
       <div class="row">
       <div class="col-xs-12 col-sm-6">
         <h3>Details List</h3>
       </div><div class="col-xs-12 col-sm-6">
         <button type="button" class="btn btn-outline-dark d-block mr-0 ml-auto" onClick={() => generatePDF(records)}>
           <i class="fa fa-cloud-download" aria-hidden="true"></i></button>
       </div></div>
     </div>


     <table className="table table-striped container table-responsive" style={{ marginTop: 20 }}>
       <thead>
         <tr className="bg-dark text-light text-center">
           <th>Name</th>
           <th>Email</th>
           <th>Telephone</th>
           <th>Address</th>
           <th>City</th>
           <th>St Pnumber</th>
           <th>Status</th>
           <th colSpan={2}>Action</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}