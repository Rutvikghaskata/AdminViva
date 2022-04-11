import React, { useState } from "react";
import {
  MdAccountCircle,

} from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { Link,useLocation } from "react-router-dom";
import { Row } from "react-bootstrap";
import "../App.css";

export default function BasicTable() {

 const location = useLocation();
  const [ownerName,setownerName]=useState(location.state.row.ownerName)
  const [StationName,setStationName]=useState(location.state.row.StationName)
  const [NewContactNo,setNewContactNo]=useState(location.state.row.ContactNo)
  const ContactNo = location.state.row.ContactNo
  const [address,setaddress]=useState(location.state.row.address)
  const [city,setcity]=useState(location.state.row.city)
  const [state,setstate]=useState(location.state.row.state)
  const [pincode,setpincode]=useState(location.state.row.pincode)
  const [Plug1,setPlug1]=useState(location.state.row.Plug1)  
  const [Plug2,setPlug2]=useState(location.state.row.Plug2)
  const [Plug3,setPlug3]=useState(location.state.row.Plug3)
  const [Plug4,setPlug4]=useState(location.state.row.Plug4)
  const [Plug5,setPlug5]=useState(location.state.row.Plug5)
  const [openingTime,setopeningTime]=useState(location.state.row.openingTime)
  const [closeTime,setcloseTime]=useState(location.state.row.closeTime)
  const [Latitude,setLatitude]=useState(location.state.row.Latitude)
  const [Longitude,setLongitude]=useState(location.state.row.Longitude)
  const [Image,setImage]=useState(location.state.row.Image)
  const [rating,setrating]=useState(location.state.row.rating)
  const [review,setreview]=useState(location.state.row.review)
  const [Location,setLocation]=useState(location.state.row.Location)

  function saveDataget() {
   
    let data = { ownerName, StationName,ContactNo,NewContactNo,address,city,pincode,state,Plug1,Plug2,Plug3,Plug4,Plug5,openingTime,closeTime,Latitude,Longitude,Image,rating,review,Location};
    fetch(`http://evspoint.com/api/StationData/update`,{
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIffsInR5cCI6IkpXVCJ1.eyJ1c2VySWQiOiI2MWJjNWRlMzEyODRlN2ZjYTM3OGMwMzAiLCJffpYXQiOjE2Mzk3MzQ3NTV2.bHygAffPHN6AUUldKvEyvLLdtWvjGYPdaxjtrPnYw88Vo",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((response) => {
       window.location.href = "station";
      })
    })
  }
  
  return (
    <>
      <div className="row grid-com">
        <div className="col-2 grid-left-com pt-5">
          <MdAccountCircle size={120} className="icon-color" />
          <h1>Admin</h1>
          <h6>admin123@gmail.com</h6>
          <hr />
          <p>
            <Link to="/User" className="links">
              Users
            </Link>
          </p>
          <p>
            <Link to="/Owners" className="links">
              Owners
            </Link>
          </p>
          <p>
            <Link to="/station" className="links">
              Stations
            </Link>
          </p>
          <p>
            <Link to="/StationReq" className="links">
              Stations Request
            </Link>
          </p>
          <p>
            <Link to="/UserHelpReq" className="links">
              User Station
            </Link>
          </p>
          <p>
            <Link to="/HelpReq" className="links">
              Owner Requests
            </Link>
          </p>
          <hr />
          <button className="btn btn-success">
            Log Out
          </button>
        </div>
        <div className="col-10 grid-right-com">
          <h2 className="history">
            <IoMdAddCircle className="icon-color" />
            Change Station Details
          </h2>
          <div className="d-flex justify-content-center align-items-center  mb-3 ">
  <div className="p-3 bg addstation ">
            <div className="d-flex justify-content-center align-items-center  mb-3">
              <h4 className="text-right bold title">Change Station Details</h4>
            </div>  
            <Row className="mb-3">
            <div className="col-md-4">
                <label for="floatingInput" className="bold">OwnerName:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter Your OwnerName" 
                  defaultValue={ownerName}
                  onChange={(e) => {
                    setownerName(e.target.value);
                  }}
                />         
            </div>
            <div className="col-md-4">
                <label for="floatingInput" className="bold">StationName:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter Your StationName" 
                  defaultValue={StationName}
                  onChange={(e) => {
                    setStationName(e.target.value);
                  }}
                  
                />
                {/* <p className="err">{emailerror}</p> */}
           
            </div>
            <div className="col-md-4">
                <label for="floatingInput" className="bold">ContactNo:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter Your ContactNo" 
                  defaultValue={NewContactNo}
                  onChange={(e) => {
                    setNewContactNo(e.target.value);
                  }}
                  
                />             
            </div>
            </Row>
            <Row className="mb-3">
            <div className="col-md-8">
                <label for="floatingInput" className="bold">Address:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter Your Address" 
                  defaultValue={address}
                  onChange={(e) => {
                    setaddress(e.target.value);
                  }}
                />           
            </div>
            <div className="col-md-4">
                <label for="floatingInput" className="bold">City:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter Your City" 
                  defaultValue={city}
                  onChange={(e) => {
                    setcity(e.target.value);
                  }}
                  
                />           
            </div>
            </Row>
            <Row className="mb-3">
            
             
          
            <div className="col-md-4">
                <label for="floatingInput" className="bold">state:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter Your state" 
                  defaultValue={state}
                  onChange={(e) => {
                    setstate(e.target.value);
                  }}
                  
                />          
            </div>
            <div className="col-md-4">
                <label for="floatingInput" className="bold">pincode:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter Your pincode" 
                  defaultValue={pincode}
                  onChange={(e) => {
                    setpincode(e.target.value);
                  }}
                  
                />          
            </div>
            <div className="col-md-4">
                <label for="floatingInput" className="bold">openingTime:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter Your openingTime" 
                  defaultValue={openingTime}
                  onChange={(e) => {
                    setopeningTime(e.target.value);
                  }}
                />
            </div>
            </Row>
            <Row className="mb-3">
           
            <div className="col-md-4">
                <label for="floatingInput" className="bold">closeTime:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter Your closeTime" 
                  defaultValue={closeTime}
                  onChange={(e) => {
                    setcloseTime(e.target.value);
                  }}
                />          
            </div>
            <div className="col-md-4">
                <label for="floatingInput" className="bold">Plug1:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter Plug1" 
                  defaultValue={Plug1}
                  onChange={(e) => {
                    setPlug1(e.target.value);
                  }}
                 
                />
            </div>
           
              <div className="col-md-4">
                <label for="floatingInput" className="bold">Plug2:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter Your Plug2" 
                  defaultValue={Plug2}
                  onChange={(e) => {
                    setPlug2(e.target.value);
                  }}
                />           
            </div>
            </Row>
            <Row className="mb-3">
           
           <div className="col-md-4">
               <label for="floatingInput" className="bold">Plug3:</label>
               <input
                 type="text"
                 className="form-control"
                 placeholder="enter Plug3"   
                 defaultValue={Plug3}              
                 onChange={(e) => {
                  setPlug3(e.target.value);
                }}
               />         
           </div>
           <div className="col-md-4">
               <label for="floatingInput" className="bold">Plug4:</label>
               <input
                 type="text"
                 className="form-control"
                 placeholder="enter Plug4" 
                 defaultValue={Plug4}
                 onChange={(e) => {
                  setPlug4(e.target.value);
                }}
                
               />
           </div>
          
             <div className="col-md-4">
               <label for="floatingInput" className="bold">Plug5:</label>
               <input
                 type="text"
                 className="form-control"
                 placeholder="enter Plug5" 
                 defaultValue={Plug5}
                 onChange={(e) => {
                  setPlug5(e.target.value);
                }}
               />
            
           </div>
           </Row>
            <Row className="mb-3">
            <div className="col-md-4">
                <label for="floatingInput" className="bold">Latitude</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter Your Latitude" 
                  defaultValue={Latitude}
                  onChange={(e) => {
                    setLatitude(e.target.value);
                  }}
                />            
            </div>
            <div className="col-md-4">
                <label for="floatingInput" className="bold">Longitude</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter Your Longitude" 
                  defaultValue={Longitude}
                  onChange={(e) => {
                    setLongitude(e.target.value);
                  }}
                />             
            </div>
            <div className="col-md-4">
                <label for="floatingInput" className="bold">Image</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Image" 
                  defaultValue={Image}
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />            
            </div>
  
            </Row>
            <Row className="mb-3">
            <div className="col-md-4">
                <label for="floatingInput" className="bold">Location</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter Station Location" 
                  defaultValue={Location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                />            
            </div>
            <div className="col-md-4">
                <label for="floatingInput" className="bold">rating</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="rating" 
                  defaultValue={rating}
                  onChange={(e) => {
                    setrating(e.target.value);
                  }}
                />            
            </div>
            <div className="col-md-4">
                <label for="floatingInput" className="bold">review</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="review" 
                  defaultValue={review}
                  onChange={(e) => {
                    setreview(e.target.value);
                  }}
                />            
            </div>
  
            </Row>
            <div className="mt-5 text-center">
              <button
                className="btn btn-success profile-button subbtn"
                type="button"
                 onClick={saveDataget}
              >
                Submit Changes
              </button>
            </div>
          </div>
  </div>
        </div >
      </div >
    </>
  );
};

