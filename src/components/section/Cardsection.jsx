import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./sec.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  emptyPlaylist,
} from "../../redux/action";

const Cardsection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cartData);
  let amount =
    cartData.length &&
    cartData
      .map((item) => item.dailyRentalRate)
      .reduce((prev, next) => prev + next);
  console.warn(amount);
  let tax = (amount * 18) / 100;
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  console.log(cartData);
  console.log(`/videop/${2}`);
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <div>
      <Button
        onClick={() => dispatch(emptyPlaylist())}
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        Delete All
      </Button>
      <h1 className="extramargin">Playlist Page</h1>
      <div className="tablede">
        <TableContainer component={Paper} sx={{ maxWidth: "60%" }}>
          <Table sx={{ maxWidth: "100%" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell align="right">numberInStock</StyledTableCell>
                <StyledTableCell align="right">DailyRentalRate</StyledTableCell>
                <StyledTableCell align="center">Category</StyledTableCell>
                <StyledTableCell align="center">Watch Now</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartData.map((item) => (
                <StyledTableRow key={item.key}>
                  <StyledTableCell component="th" scope="row">
                    {item.Title}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.numberInStock}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.dailyRentalRate}
                  </StyledTableCell>
                  <StyledTableCell align="right">{item.Genre}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      onClick={() => navigate(`/videop/${item.id}`)}
                      target="_blank"
                    >
                      Link
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="cart-page-container">
          
          <div className="price-details">
            <div className="adjust-price">
              <span>Amount</span>
              <span>{amount}</span>
            </div>
            <div className="adjust-price">
              <span>Tax</span>
              <span>{tax}</span>
            </div>
            <div className="adjust-price">
              <span>Discount</span>
              <span>{amount + tax}</span>
            </div>
            <div className="adjust-price">
              <span>Total</span>
              <span>00.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardsection;
