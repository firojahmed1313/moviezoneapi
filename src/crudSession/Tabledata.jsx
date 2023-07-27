import React from "react";
import "./table.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
const Tabledata = ({ movies, onDeleteMovie, onEditMovie }) => {
  
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  //console.log(props.movies)
  return (
    
      <>
      <div >
        <TableContainer
          component={Paper}
          sx={{ maxWidth: "100%", height: "400px", margin: "auto" }}
        >
          <Table sx={{ maxWidth: "100%" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell align="right">Title</StyledTableCell>
                <StyledTableCell align="right">Category</StyledTableCell>
                <StyledTableCell align="right">numberInStock</StyledTableCell>
                <StyledTableCell align="right">DailyRentalRate</StyledTableCell>
                <StyledTableCell align="right">Funtion</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {movies.map((item, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {index+1}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {item.title}
                  </StyledTableCell>
                  <StyledTableCell align="right">{item.genre}</StyledTableCell>
                  <StyledTableCell align="right">
                    {item.numberInStock}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.dailyRentalRate}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <ButtonGroup
                      disableElevation
                      variant="contained"
                      aria-label="Disabled elevation buttons"
                    >
                      <Button onClick={() => onEditMovie(item)}><EditNoteIcon/></Button>
                      <Button onClick={() => onDeleteMovie(item.id)}><DeleteIcon/></Button>
                    </ButtonGroup>
                  </StyledTableCell>

                </StyledTableRow>
              ))}


            </TableBody>
          </Table>
        </TableContainer>
        </div>
      </>
    )
};

export default Tabledata;
