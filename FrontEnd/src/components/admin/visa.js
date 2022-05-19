import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Details = (props) => (
 <tr>
   <td>{props.visa.name}</td>
   <td>{props.visa.cardNumber}</td>
   <td>{props.visa.cvvNumber}</td>
   <td>{props.visa.expDate}</td>
   <td>
    <button type="button" class="btn btn-success">
     <Link className="text-light" to={`/edit/${props.visa._id}`}>Edit</Link> </button> &nbsp;
     <button type="button" class="btn btn-danger"
       onClick={() => {
        
         props.deleteRecord(props.visa._id);
         
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
     const response = await fetch(`http://localhost:8090/visa/all`);
 
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
 
 // This method will delete a visa
 async function deleteRecord(id) {
   await fetch(`http://localhost:8090/visa/delete/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((visa) => {
     return (
       <Details
         visa={visa}
         deleteRecord={() => deleteRecord(visa._id)}
         key={visa._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3 className="container text-center">Visa List</h3>
     <table className="table table-sm table-dark container" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name On card</th>
           <th>Card Number</th>
           <th>Cvv Number</th>
           <th>Expiration Date</th>
           
           <th colSpan={2}>Action</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}