import React, { useEffect } from "react";
import {
  addToPlaylist,
  emptyPlaylist,
  removePlaylist,
} from "../../redux/action";
import { productCatagory ,trendingList ,popularList,tvList ,topList,upcomingList } from "../../redux/productAction";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { productList } from "../../redux/productAction";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Catagory = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.movies);
  console.warn("data in catagory", result);
  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  const category = [
    {
      value: "Action",
      label: "Action",
    },
    {
      value: "Thriller",
      label: "Thriller",
    },
    {
      value: "Comedy",
      label: "Comedy",
    },
    {
      value: "Adventure",
      label: "Adventure",
    },
    {
      value: "Fantasy",
      label: "Fantasy",
    },
    {
      value: "Drama",
      label: "Drama",
    },
    {
      value: "Sci-Fi",
      label: "Sci-Fi",
    },
    {
      value: "Horror",
      label: "Horror",
    },
    {
      value: "Biography",
      label: "Biography",
    },
    {
      value: "Crime",
      label: "Crime",
    },
    {
      value: "History",
      label: "History",
    },
    {
      value: "All",
      label: "All",
    },
  ];
  const ddddd = (event) => {
    dispatch(productCatagory(event.target.value));

    if (event.target.value === "All") {
      dispatch(productList());
    }
    console.log(event.target.value);
  };
  const trending = () =>{
    dispatch(trendingList());

  }
  const popular = () =>{
    dispatch(popularList());

  }
  const tv = () =>{
    dispatch(tvList());

  }

  const upcoming = () =>{
    dispatch(upcomingList());

  }

  const top = () =>{
    dispatch(topList());

  }

  return (
    <div className="catagory">
      <Stack spacing={1} direction="row" className="btn" >
        <Button className="btnX" variant="contained" onClick={tv}>Tv shows</Button>
        <Button className="btnX" variant="contained" onClick={upcoming}>Upcoming</Button>
        <Button className="btnX" variant="contained" onClick={top}>Top rated</Button>
        <Button className="btnX" variant="contained" onClick={trending}>Trending</Button>
        <Button className="btnX" variant="contained" onClick={popular}>Popular</Button>
      </Stack>
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
            id="outlined-select-currency"
            select
            label="FILTER"
            defaultValue="All"
            onChange={ddddd}
          >
            {category.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Box>
    </div>
  );
};

export default Catagory;
