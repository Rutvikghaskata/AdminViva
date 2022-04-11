import React, { useEffect, useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Avatar,TableFooter,TablePagination} from '@material-ui/core';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  MdAccountCircle,
  // MdSupervisorAccount,
  // MdSpeed,
  // MdOutlinePayment,


} from "react-icons/md";
import { Link ,useNavigate} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  txt:{
    
  },
  table: {
    minWidth: 650,
  },
  tableContainer: {
      borderRadius: 15,
      margin: '10px 10px',
      maxWidth: 1550,
  
  },
  foot:{
    maxWidth: 1550
  },
  tableHeaderCell: {
      fontWeight: 'bold',
      backgroundColor: '#75c31e',
      color: theme.palette.getContrastText(theme.palette.primary.dark)
  },
  avatar: {
      backgroundColor: '#75c31e',
      color: theme.palette.getContrastText(theme.palette.primary.light)
  },
  name: {
      fontWeight: 'bold',
      // color: theme.palette.secondary.dark
      fontSize:15
  },
  h1:{
    marginTop:50
  },
  status: {
      fontWeight: 'bold',
      fontSize: '0.75rem',
      color: 'white',
      backgroundColor: 'grey',
      borderRadius: 8,
      padding: '3px 10px',
      display: 'inline-block'
  },
  btn:{
    width:70,
    height:45,
    fontWeight: 'bold',
    backgroundColor: 'blue',
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    borderWidth:0,
    borderRadius:10,
    marginRight:10
  },
  btn1:{
    width:70,
    height:45,
    fontWeight: 'bold',
    backgroundColor: 'red',
    color: theme.palette.getContrastText(theme.palette.primary.dark),
    borderWidth:0,
    borderRadius:10,
  }
}));
export default function BasicTable() {
    const [users, setUsers] = useState([])
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

  const fetchData = () => {
 fetch("http://evspoint.com/api/station")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])
  const navigate = useNavigate();
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
            <p className="focus">
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
        <div className="col-10 grid-right-com">
        <div className="d-flex justify-content-center align-items-center  mb-3"> 
         <h1 className={classes.h1}>Station inforamtion</h1>
         </div>
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell className={classes.tableHeaderCell}>ID</TableCell>
            <TableCell className={classes.tableHeaderCell}>OwnerName</TableCell>
            <TableCell className={classes.tableHeaderCell}>StationName</TableCell>
            <TableCell className={classes.tableHeaderCell}>ContactNo</TableCell>
            <TableCell className={classes.tableHeaderCell}>Address</TableCell>
            <TableCell className={classes.tableHeaderCell}>City</TableCell>
            <TableCell className={classes.tableHeaderCell}>Pincode</TableCell>
            <TableCell className={classes.tableHeaderCell}>State</TableCell>
            <TableCell className={classes.tableHeaderCell}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Avatar alt={row.ownerName} src='.' className={classes.avatar} />
              </TableCell>
              <TableCell className={classes.name}>{row.ownerName}</TableCell>
              <TableCell className={classes.name}>{row.StationName}</TableCell>
              <TableCell className={classes.name}>{row.ContactNo}</TableCell>
              <TableCell className={classes.name}>{row.address}</TableCell>
              <TableCell className={classes.name}>{row.city}</TableCell>
              <TableCell className={classes.name}>{row.pincode}</TableCell>
              <TableCell className={classes.name}>{row.state}</TableCell>
              <TableCell><button type="button" className={classes.btn} onClick={()=>{navigate('/StationOperation',{state:{row}})}}>Edit</button><button className={classes.btn1} type="button" >Delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
     
      </Table>
      <TableFooter className={classes.foot}>
        <TablePagination
            
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </TableFooter>
    </TableContainer>
    </div>
    </div>
  );
}