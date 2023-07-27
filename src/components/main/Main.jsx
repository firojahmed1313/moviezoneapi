import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Catagory from "./Catagory";
import {
  addToPlaylist,
  removePlaylist,
} from "../../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import "./main.css";
const Main = () => {
  const dispatch = useDispatch();
  let movies = useSelector((state) => state.movies.filteredMovies);
  
  console.warn("data in main component", movies);

  useEffect(() => {
    console.log("firoj1")
    dispatch(productList());
  }, []);
  
  return (
    <div>
      <Catagory/>
      <div className="product-container">
        
        {movies.map((item) => (
          <Card
            sx={{
              maxWidth: 250,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "15px",
            }}
          >
            <CardMedia
              sx={{ height: 250 }}
              image={item.Images[0]}
              title="green iguana"
            />
            <CardContent sx={{/* border: "2px solid red" */}}>
              <Typography gutterBottom variant="h5" component="div">
                Name : {item.Title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <div>Director : {item.Director} </div>
                <div>numberInStock : {item.numberInStock} </div>
                <div>dailyRentalRate : {item.dailyRentalRate} </div>
                <div>Category : {item.Genre} </div>
              </Typography>
            </CardContent>
            <CardActions sx={{/* border: "2px solid red" */}}>
              <Button
                size="small"
                onClick={() => dispatch(addToPlaylist(item))}
              >
                Add to Playlist
              </Button>
              <Button
                size="small"
                onClick={() => dispatch(removePlaylist(item.id))}
              >
                Remove to Playlist
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Main;
