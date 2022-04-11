import React from "react"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from './screens/Users';
import Station from './screens/stations';
import Owners from './screens/Owners';
import StationReq from './screens/StationReq';
import HelpReq from './screens/helpReq';
import UserHelpReq from './screens/UserHelpReq';
import CreateNewStation from './screens/addStation';
import Login from './screens/login'
import UserOperation from './CrudOperation/user'
import OwnerOperation from './CrudOperation/owner'
import StationOperation from './CrudOperation/station'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="User" element={<Users />} />
        <Route path="station" element={<Station />} />
        <Route path="Owners" element={<Owners />} />
        <Route path="StationReq" element={<StationReq />} />
         <Route path="CreateNewStation" element={<CreateNewStation />} />
        <Route path="HelpReq" element={<HelpReq />} />
        <Route path="Login" element={<Login />} />
        <Route path="UserHelpReq" element={<UserHelpReq />} />
        <Route path="UserOperation" element={<UserOperation />} />
        <Route path="OwnerOperation" element={<OwnerOperation />} />
        <Route path="StationOperation" element={<StationOperation />} />
      </Routes>
    </BrowserRouter>
  );
}