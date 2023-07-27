import React, { useEffect, useState } from "react";
import "./table.css";
import "../pages/admind/admind.css";
import Button from "@mui/material/Button";
import axios from "axios";
import MovieForm from "./MovieFrom";
import Tabledata from "./Tabledata";
import AdminUserSection from "../pages/admind/AdminUserSection";

const Addd = () => {
  const [movies, setMovies] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null);
  
  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };
  const handleUpdateMovie = (updatedMovie) => {
    setMovies(movies.map((movie) => (movie.id === updatedMovie.id ? updatedMovie : movie)));
    setEditMode(false);
    setCurrentMovie(null);
  };

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const handleEditMovie = (movie) => {
    setEditMode(true);
    setCurrentMovie(movie);
  };

    
    


  const clearAll = () => {
    setMovies([]);
  };

  return (
    <>
      <div className="contaner">
        <MovieForm
          onAddMovie={handleAddMovie}
          onUpdateMovie={handleUpdateMovie}
          editMode={editMode}
          currentMovie={currentMovie}
        />
        <div className="tableContener">
          <Tabledata
            movies={movies}
            onDeleteMovie={handleDeleteMovie}
            onEditMovie={handleEditMovie}
          />
          <Button variant="contained" onClick={clearAll}>
            Clear All
          </Button>
        </div>
      </div>
    </>
  );
};

export default Addd;
