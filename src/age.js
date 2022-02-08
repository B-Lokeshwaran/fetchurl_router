import React from 'react';
import {useEffect,useState} from'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'reactstrap'

const Age =() => {

  
    const[data,setData]=useState([]);
    useEffect(()=>{
     fetch("https://613476997859e700176a38af.mockapi.io/api/v1/user")
     .then((response)=>response.json())
     .then((data)=>setData(data));
    },[]);
    return(
      <div><Table bordered >
     <thead>
       <tr>
         <th>ID</th>
         <th>Name</th>
         <th>Email_id</th>
         <th>Mobile Number</th>
         <th>city</th>
         <th>Age</th>
         <th>Address</th>
       </tr>
     </thead>
    <tbody>
       {data.filter((value)=>{
         return value.age > 18
       }).map(function (value){
         return (
          <tr>
            <th >{value.id}</th>
            <td>{value.name}</td>
            <td>{value.email_id}</td>
            <td>{value.mobile_number}</td>
            <td>{value.city}</td>
            <td>{value.age}</td>
            <td>{value.address}</td>
          </tr>
        )
      })}
    </tbody>
    </Table>
    </div>
    )}

    export default Age;