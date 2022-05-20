import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
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
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3 className="container text-center">Details List</h3>
     <table className="table table-sm table-dark container" style={{ marginTop: 20 }}>
       <thead>
         <tr>
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