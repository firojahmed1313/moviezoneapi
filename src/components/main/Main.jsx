import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Catagory from "./Catagory";
import { addToPlaylist, removePlaylist } from "../../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import "./main.css";
import axios from "axios";
//import {httpGet} from '../../utils/api';
import image from "../../assets/no-poster.png";
const Main = () => {
  const dispatch = useDispatch();
  var movies = useSelector((state) => state.movies.filteredMovies);

  /*async function fetchData() {
    try {
      const response = await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=6ff4c3806365f19269082c91227e14bc&language=en-US&page=1");
      const data = response.data;
      
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  
  */
  console.warn("data in main component1", movies);
  console.log("data in main", typeof movies);

  useEffect(() => {
    console.log("firoj1");
    dispatch(productList());
    //let data  =  fetchData();
    //console.warn("data in main component", data.genres);
  }, []);

  return (
    <div>
      <Catagory />
      <div className="product-container">
        {movies.map((item) => {
          const newtitle = item.title.substring(0, 13);
          let imagek 
          if(item.backdrop_path==null){
            imagek =image
          }
          else{
            imagek =`https://image.tmdb.org/t/p/w500${item.backdrop_path}`;
          }
          
          
          return (
            <Card
              sx={{
                maxWidth: 250,
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "15px",
              }}
              key={item.id}
            >
              {
                <CardMedia
                  sx={{ height: 250 }}
                  image={imagek}
                  title="green iguana"
                />
              }
              <CardContent
                sx={
                  {
                    /* border: "2px solid red" */
                  }
                }
              >
                <Typography gutterBottom variant="h6" component="div">
                  Name : {item.title.length >= 13 ? `${newtitle}..` : newtitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <div>language : {item.original_language} </div>
                  <div>numberInStock : {item.vote_count} </div>
                  <div>dailyRentalRate : {item.vote_average * 20} </div>
                  <div>Category : {item.genre_ids[0]} </div>
                </Typography>
              </CardContent>
              <CardActions
                sx={
                  {
                    /* border: "2px solid red" */
                  }
                }
              >
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
          );
        })}
      </div>
    </div>
  );
};

export default Main;
