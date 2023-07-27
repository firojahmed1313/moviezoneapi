import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const MovieFrom = ({onAddMovie, onUpdateMovie, editMode, currentMovie}) => {
  
  const initialMovie = {
    id: new Date().getTime().toString(),
    title: '',
    category: '',
    numberInStock: "",
    dailyRentalRate: "",
    genre: '',
  };
  const [movie, setMovie] = useState(initialMovie);

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };
  useEffect(() => {
    if (editMode && currentMovie) {
      setMovie(currentMovie);
    } else {
      setMovie(initialMovie);
    }
  }, [editMode, currentMovie]);
  const onSubmits = (e) => {
    if (!editMode) {
      onAddMovie(movie);
    } else {
      onUpdateMovie(movie);
    }
    setMovie(initialMovie);
  };
  return (
    <div>
      <h2>{editMode ? "Edit Movie" : ""}</h2>
      <div className="artical signin">
        <h1>ADD MOVIES</h1>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-helperText"
              label="Title"
              name="title"
              value={movie.title}
              onChange={inputEvent}
            />
            <TextField
              id="outlined-disabled"
              label="Category"
              name="genre"
              value={movie.genre}
              onChange={inputEvent}
            />
            <TextField
              id="outlined-numberInStock-input"
              label="Number in Stock"
              type="numberInStock"
              name="numberInStock"
              value={movie.numberInStock}
              onChange={inputEvent}
            />

            <TextField
              id="outlined-number"
              label="Daily Rental Rate"
              type="dailyRentalRate"
              name="dailyRentalRate"
              value={movie.dailyRentalRate}
              onChange={inputEvent}
            />
          </div>
        </Box>
        <Button onClick={onSubmits} variant="contained">
          Add
        </Button>
      </div>
    </div>
  );
};
export default MovieFrom;
