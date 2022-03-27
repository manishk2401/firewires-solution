// export default function Overview() {
//   const [open, setOpen] = React.useState(false);
//   const [order, setOrder] = React.useState("asc");
//   const [orderBy, setOrderBy] = React.useState("calories");
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === "asc";
//     setOrder(isAsc ? "desc" : "asc");
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelecteds = rows.map((n) => n.name);
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, name) => {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
//     }

//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const isSelected = (name) => selected.indexOf(name) !== -1;

//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//   return (
//     <div style={{ padding: "10px", margin: "10px" }}>
//       <Grid container spacing={2} style={{ padding: "10px 0px" }}>
//         <Grid item xs={3}>
//           <div className={styles.widgetContainer}>
//             <div className={styles.widgetHeader}>
//               <div className={styles.widgetLeft}>
//                 <div className={styles.widgetIcon} style={{ background: "linear-gradient(180deg, #3e3d45 0%, #202020 100%)" }}>
//                   <AccountCircleIcon />
//                 </div>
//               </div>
//               <div className={styles.widgetRight}>
//                 <p style={{ margin: "5px", color: "gray" }}>Bookings</p>
//                 <h2 style={{ margin: "5px", color: "#344767" }}>228</h2>
//               </div>
//             </div>
//             <Divider></Divider>
//             <div className={styles.widgetFooter}>
//               <p style={{ color: "gray" }}>
//                 <span style={{ fontWeight: "bold", color: "#4CAF50" }}>+55%</span> than last week
//               </p>
//             </div>
//           </div>
//         </Grid>
//         <Grid item xs={3}>
//           <div className={styles.widgetContainer}>
//             <div className={styles.widgetHeader}>
//               <div className={styles.widgetLeft}>
//                 <div className={styles.widgetIcon} style={{ background: "linear-gradient(180deg, #E93B77 0%, #DA1F63 100%)" }}>
//                   <AddchartIcon />
//                 </div>
//               </div>
//               <div className={styles.widgetRight}>
//                 <p style={{ margin: "5px", color: "gray" }}>Bookings</p>
//                 <h2 style={{ margin: "5px", color: "#344767" }}>228</h2>
//               </div>
//             </div>
//             <Divider></Divider>
//             <div className={styles.widgetFooter}>
//               <p style={{ color: "gray" }}>
//                 <span style={{ fontWeight: "bold", color: "#4CAF50" }}>+55%</span> than last week
//               </p>
//             </div>
//           </div>
//         </Grid>
//         <Grid item xs={3}>
//           <div className={styles.widgetContainer}>
//             <div className={styles.widgetHeader}>
//               <div className={styles.widgetLeft}>
//                 <div className={styles.widgetIcon} style={{ background: "linear-gradient(180deg, #63B967 0%, #4BA64F 100%)" }}>
//                   <StoreMallDirectoryIcon />
//                 </div>
//               </div>
//               <div className={styles.widgetRight}>
//                 <p style={{ margin: "5px", color: "gray" }}>Bookings</p>
//                 <h2 style={{ margin: "5px", color: "#344767" }}>228</h2>
//               </div>
//             </div>
//             <Divider></Divider>
//             <div className={styles.widgetFooter}>
//               <p style={{ color: "gray" }}>
//                 <span style={{ fontWeight: "bold", color: "#4CAF50" }}>+55%</span> than last week
//               </p>
//             </div>
//           </div>
//         </Grid>
//         <Grid item xs={3}>
//           <div className={styles.widgetContainer}>
//             <div className={styles.widgetHeader}>
//               <div className={styles.widgetLeft}>
//                 <div className={styles.widgetIcon} style={{ background: "linear-gradient(180deg, #439DEE 0%, #1E78E9 100%)" }}>
//                   <PersonAddAltIcon />
//                 </div>
//               </div>
//               <div className={styles.widgetRight}>
//                 <p style={{ margin: "5px", color: "gray" }}>Bookings</p>
//                 <h2 style={{ margin: "5px", color: "#344767" }}>228</h2>
//               </div>
//             </div>
//             <Divider></Divider>
//             <div className={styles.widgetFooter}>
//               <p style={{ color: "gray" }}>
//                 <span style={{ fontWeight: "bold", color: "#4CAF50" }}>+55%</span> than last week
//               </p>
//             </div>
//           </div>
//         </Grid>
//       </Grid>

//     </div>
//   );
// }

import React from "react";
import styles from "./overview.module.css";
import Collapse from "@mui/material/Collapse";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddchartIcon from "@mui/icons-material/Addchart";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import CachedIcon from "@mui/icons-material/Cached";
import TurnRightIcon from "@mui/icons-material/TurnRight";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import {
  Alert,
  Checkbox,
  Divider,
  Grid,
  IconButton,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { alpha } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Box } from "@mui/system";

function createData(order, date, name, total, status, items, location, payment) {
  return {
    order,
    date,
    name,
    total,
    status,
    items,
    location,
    payment,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

const rowss = [
  createData(585694, "22/01/2021", "Dominik Lamakani", 129.0, "Refunded", 1, "Rohini, Delhi", "Subscription"),
  createData(568965, "25/01/2021", "Raj Lohiya", 259.0, "Approved", 3, "Viaks Puri, Delhi", "One-time"),
  createData(658952, "26/01/2021", "Sanjay Sharma", 209.0, "Pending", 2, "Tilak Nagar, Delhi", "One-time"),
  createData(585690, "26/01/2021", "Deepak Rai", 129.0, "Refunded", 1, "Rohini, Delhi", "Subscription"),
  createData(568945, "25/01/2021", "Karan Verma", 259.0, "Approved", 3, "Viaks Puri, Delhi", "One-time"),
  createData(658995, "02/02/2021", "Ravi Jha", 209.0, "Pending", 2, "Tilak Nagar, Delhi", "One-time"),
  createData(585625, "22/01/2021", "Sumit Kumar", 129.0, "Refunded", 1, "Rohini, Delhi", "Subscription"),
  createData(568915, "15/02/2021", "Vikas Kumar", 259.0, "Approved", 3, "Viaks Puri, Delhi", "One-time"),
  createData(568567, "25/01/2021", "Raj Dhanajay", 259.0, "Approved", 3, "Viaks Puri, Delhi", "One-time"),
  createData(658905, "08/03/2021", "Sanjay Sharma", 209.0, "Pending", 2, "Tilak Nagar, Delhi", "One-time"),
  createData(658995, "02/02/2021", "Ravi Jha", 209.0, "Pending", 2, "Tilak Nagar, Delhi", "One-time"),
  createData(585625, "22/01/2021", "Sumit Kumar", 129.0, "Refunded", 1, "Rohini, Delhi", "Subscription"),
  createData(568915, "15/02/2021", "Vikas Kumar", 259.0, "Approved", 3, "Viaks Puri, Delhi", "One-time"),
  createData(568567, "25/01/2021", "Raj Dhanajay", 259.0, "Approved", 3, "Viaks Puri, Delhi", "One-time"),
  createData(658905, "08/03/2021", "Sanjay Sharma", 209.0, "Pending", 2, "Tilak Nagar, Delhi", "One-time"),
];

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: "1 1 100%" }} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: "1 1 100%" }} variant="h6" id="tableTitle" component="div">
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

function Row(props) {
  const { row, selectAll } = props;
  const [open, setOpen] = React.useState(false);
  const [check, setCheck] = React.useState(false);

  const clickHandle = (e) => {
    props.selectItem(row.name, e);
    setCheck(e);
  };

  React.useEffect(() => {
    if (selectAll.includes(row.name)) {
      setCheck(true);
    }
  }, [row.name, selectAll]);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" scope="row" style={{ padding: "0px", textAlign: "center" }}>
          <Checkbox
            color="primary"
            checked={check}
            onClick={(e) => {
              clickHandle(e.target.checked);
            }}
            // selected={}
          />
        </TableCell>
        <TableCell component="th" scope="row" style={{ padding: "0px 10px", textAlign: "center" }}>
          <DoubleArrowIcon style={{ color: "#" + (Math.random().toString(16) + "00000").slice(2, 8) }}></DoubleArrowIcon>
        </TableCell>
        <TableCell component="th" scope="row" style={{ padding: "0px 10px" }}>
          <Link href="#"> #{row.order}</Link>
        </TableCell>
        <TableCell align="right" style={{ padding: "0px 10px", textAlign: "center" }}>
          {row.date}
        </TableCell>
        <TableCell align="left" style={{ padding: "0px 10px" }}>
          {row.name}
        </TableCell>
        <TableCell align="right" style={{ padding: "0px 10px", color: "rgba(16, 185, 129, 1)", fontWeight: "bold" }}>
          {row.total.toLocaleString("en-IN", { style: "currency", currency: "INR" })}
        </TableCell>
        <TableCell align="right" style={{ padding: "0px 10px", align: "center" }}>
          <span className={row.status === "Refunded" ? styles.refundedOrder : row.status === "Approved" ? styles.approvedOrder : styles.pendingOrder}>
            {row.status}
          </span>
        </TableCell>
        <TableCell align="right" style={{ padding: "0px 10px", textAlign: "center" }}>
          {row.items}
        </TableCell>
        <TableCell align="right" style={{ padding: "0px 10px" }}>
          {row.location}
        </TableCell>
        <TableCell align="right" style={{ padding: "0px 10px" }}>
          {row.payment === "Subscription" ? (
            <span style={{ display: "flex", alignItems: "center", paddingLeft: "20px" }}>
              {" "}
              <CachedIcon style={{ fontSize: "18px", marginRight: "10px" }} /> {row.payment}{" "}
            </span>
          ) : (
            <span style={{ display: "flex", alignItems: "center", paddingLeft: "20px" }}>
              {" "}
              <TurnRightIcon style={{ fontSize: "18px", marginRight: "10px" }} /> {row.payment}{" "}
            </span>
          )}
        </TableCell>
        <TableCell style={{ padding: "0px 10px" }}>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">{Math.round(historyRow.amount * row.price * 100) / 100}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    order: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    location: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    items: PropTypes.number.isRequired,
    payment: PropTypes.string.isRequired,
  }).isRequired,
};

export default function Overview() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedItem, setSelectedItem] = React.useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const getSelected = (item, checked) => {
    if (checked) {
      setSelectedItem((prevState) => [...prevState, item]);
    } else {
      setSelectedItem((prevState) => prevState.filter((prevItem) => prevItem !== item));
    }
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const checkAllHandle = (e) => {
    setSelectedItem([]);
    if (e.target.checked) {
      rowss.forEach((item) => {
        setSelectedItem((prevState) => [...prevState, item.name]);
      });
    }
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowss.length) : 0;
  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={2} style={{ padding: "20px 0px" }}>
        <Grid item xs={3}>
          <div className={styles.widgetContainer}>
            <div className={styles.widgetHeader}>
              <div className={styles.widgetLeft}>
                <div className={styles.widgetIcon} style={{ background: "linear-gradient(180deg, #3e3d45 0%, #202020 100%)" }}>
                  <AccountCircleIcon />
                </div>
              </div>
              <div className={styles.widgetRight}>
                <p style={{ margin: "5px", color: "gray" }}>Bookings</p>
                <h2 style={{ margin: "5px", color: "#344767" }}>228</h2>
              </div>
            </div>
            <Divider></Divider>
            <div className={styles.widgetFooter}>
              <p style={{ color: "gray" }}>
                <span style={{ fontWeight: "bold", color: "#4CAF50" }}>+55%</span> than last week
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={styles.widgetContainer}>
            <div className={styles.widgetHeader}>
              <div className={styles.widgetLeft}>
                <div className={styles.widgetIcon} style={{ background: "linear-gradient(180deg, #E93B77 0%, #DA1F63 100%)" }}>
                  <AddchartIcon />
                </div>
              </div>
              <div className={styles.widgetRight}>
                <p style={{ margin: "5px", color: "gray" }}>Bookings</p>
                <h2 style={{ margin: "5px", color: "#344767" }}>228</h2>
              </div>
            </div>
            <Divider></Divider>
            <div className={styles.widgetFooter}>
              <p style={{ color: "gray" }}>
                <span style={{ fontWeight: "bold", color: "#4CAF50" }}>+55%</span> than last week
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={styles.widgetContainer}>
            <div className={styles.widgetHeader}>
              <div className={styles.widgetLeft}>
                <div className={styles.widgetIcon} style={{ background: "linear-gradient(180deg, #63B967 0%, #4BA64F 100%)" }}>
                  <StoreMallDirectoryIcon />
                </div>
              </div>
              <div className={styles.widgetRight}>
                <p style={{ margin: "5px", color: "gray" }}>Bookings</p>
                <h2 style={{ margin: "5px", color: "#344767" }}>228</h2>
              </div>
            </div>
            <Divider></Divider>
            <div className={styles.widgetFooter}>
              <p style={{ color: "gray" }}>
                <span style={{ fontWeight: "bold", color: "#4CAF50" }}>+55%</span> than last week
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={styles.widgetContainer}>
            <div className={styles.widgetHeader}>
              <div className={styles.widgetLeft}>
                <div className={styles.widgetIcon} style={{ background: "linear-gradient(180deg, #439DEE 0%, #1E78E9 100%)" }}>
                  <PersonAddAlt1Icon />
                </div>
              </div>
              <div className={styles.widgetRight}>
                <p style={{ margin: "5px", color: "gray" }}>Bookings</p>
                <h2 style={{ margin: "5px", color: "#344767" }}>228</h2>
              </div>
            </div>
            <Divider></Divider>
            <div className={styles.widgetFooter}>
              <p style={{ color: "gray" }}>
                <span style={{ fontWeight: "bold", color: "#4CAF50" }}>+55%</span> than last week
              </p>
            </div>
          </div>
        </Grid>
      </Grid>

      {selectedItem.length ? <Alert severity="success">{selectedItem.length}</Alert> : ""}
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow style={{ background: "#ebebeb" }}>
              <TableCell style={{ padding: "5px 10px", width: "30px" }}>
                <Checkbox
                  onClick={(e) => {
                    checkAllHandle(e);
                  }}
                  checked={selectedItem.length === rowss.length ? true : false}
                />
              </TableCell>
              <TableCell style={{ padding: "5px 10px", width: "30px" }}>ORDER</TableCell>
              <TableCell style={{ padding: "5px 10px" }}></TableCell>
              <TableCell style={{ padding: "5px 10px" }} align="center">
                DATE
              </TableCell>
              <TableCell style={{ padding: "5px 10px" }} align="center">
                CUSTOMER
              </TableCell>
              <TableCell style={{ padding: "5px 10px" }} align="center">
                TOTAL
              </TableCell>
              <TableCell style={{ padding: "5px 10px" }} align="center">
                STATUS
              </TableCell>
              <TableCell style={{ padding: "5px 10px", width: "30px" }} align="center">
                ITEMS
              </TableCell>
              <TableCell style={{ padding: "5px 10px" }} align="center">
                LOCATION
              </TableCell>
              <TableCell style={{ padding: "5px 10px" }} align="center">
                PAYMENT TYPE
              </TableCell>
              <TableCell style={{ padding: "5px 10px" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowss.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <Row selectAll={selectedItem} selectItem={getSelected} key={row.order} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rowss.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
