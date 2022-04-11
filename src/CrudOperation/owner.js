import React,{useState} from "react"
import { Row } from "react-bootstrap";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  MdAccountCircle,
} from "react-icons/md";
import { Link,useLocation } from "react-router-dom";
export default function BasicTable() {
  const location = useLocation();
  const [firstName,setFirstName]=useState(location.state.row.firstName)
  const [lastName,setLastName]=useState(location.state.row.lastName)
  const [email,setEmail]=useState(location.state.row.email) 
  const contactNo = location.state.row.contactNo
  const[newcontactNo,setNewContactNo]=useState(location.state.row.contactNo)

  const ChangeData = ()=>{ 
    
    let data = { firstName,lastName,email,contactNo,newcontactNo};

    fetch(`http://evspoint.com/api/OwnerData/update`,{
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
       window.location.href = "Owners";
      })
    })
  }
  return (
    <div className="row grid-com">
      <div className="col-2 grid-left-com pt-5">
      <MdAccountCircle size={120} className="icon-color" />
          <h1>Admin</h1>
          <h6>admin123@gmail.com</h6>
          <hr/>
          <p>
          <Link to="/User"  className="links">
              Users
            </Link>
            </p>
            <p>
          <Link to="/Owners"  className="links">
              Owners
            </Link>
            </p>
            <p>
          <Link to="/station"  className="links">
              Stations
            </Link>
            </p>
            <p>
          <Link to="/StationReq"  className="links">
              Stations Request
            </Link>
            </p>
            <p>
          <Link to="/UserHelpReq"  className="links">
              User Help Request
            </Link>
            </p>
            <p>
          <Link to="/HelpReq"  className="links">
             Owner Help Requests
            </Link>
            </p>
          <hr />
          <button className="btn btn-success">
            Log Out
          </button>
        </div>
        <div className="d-flex justify-content-center align-items-center  mb-3 ">
            <div className="p-3 bg Edit">
            <div className="d-flex justify-content-center align-items-center  mb-3">
              <h4 className="text-right bold title">Edit User</h4>
            </div>  
            <Row className="mb-3">
            <div className="col-md-6">
                <label for="floatingInput" className="bold">FirstName</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter FirstName" 
                  defaultValue={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />            

            </div>
           
            <div className="col-md-6">
                <label for="floatingInput" className="bold">LastName</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter LastName" 
                  defaultValue={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />            
            </div>
            </Row>
            <Row className="mb-3">
            <div className="col-md-6">
                <label for="floatingInput" className="bold">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter Email" 
                  defaultValue={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />            
            </div>
            <div className="col-md-6">
                <label for="floatingInput" className="bold">ContactNo</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter ContactNo" 
                  defaultValue={newcontactNo}
                  onChange={(e) => {
                    setNewContactNo(e.target.value);
                  }}
                />            
            </div>
            </Row>
            <div className="mt-5 text-center">
              <button
                className="btn btn-success profile-button subbtn"
                type="button"
                onClick={ChangeData}
              >
                Submit Request
              </button>
            </div>
          </div>
  </div>
    </div>
  );
}