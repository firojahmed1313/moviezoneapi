import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useRef } from "react";
import "./e.css";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../../redux/productAction";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//import image from "../../assets/no-poster.png";
import image from "../../assets/no-poster.png"
//const VIDEO_PATH = "https://youtu.be/0BIaDVnYp2A";
//const VIDEO_PATH = "https://www.youtube.com/watch?v=PeWnAFeqMUA";

const Videop = () => {
  const dispatch = useDispatch();
  const [videodata, setData] = useState(null);

  
  console.log("video data" ,videodata)
  const playerRef = useRef(null);
  var data = useSelector((state) => state.movies.movies);
  console.log(data)
  const { userId } = useParams();
  console.log(userId)
  console.log(data[0].id)
  console.log(userId==(data[0].id))
  useEffect(() => {
    console.log("acc")
    fetch(`https://api.themoviedb.org/3/movie/${userId}/videos?api_key=6ff4c3806365f19269082c91227e14bc`)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.log(error));
  }, []);
  console.log("video data" ,videodata)
  
  const remainingItems = data.filter((item) => item.id == userId);
  
  console.log(remainingItems)
  /*useEffect(() => {
    dispatch(productList());
  }, []);*/
  const min = 0
  const max = 2
  const a = Math.floor(Math.random() * (max - min + 1)) + min;
          let thumbnail 
          if(remainingItems[0].poster_path==null){
            thumbnail =image
          }
          else{
            //thumbnail=`https://img.youtube.com/vi/${videodata.results[0].key}/mqdefult.jpg`
            thumbnail=`https://image.tmdb.org/t/p/w500${remainingItems[0].poster_path}`
          }
  //let imagek =`https://image.tmdb.org/t/p/w500${item.backdrop_path}`;
  //const thumbnail=`https://image.tmdb.org/t/p/w500${remainingItems[0].poster_path}`
  let VIDEO_PATH = "https://youtu.be/0BIaDVnYp2A";
  if(videodata != null){
    
    console.log("VIDEO_PATH" ,videodata.results[0].key )
    const video= videodata.results[0].key 
    VIDEO_PATH = `https://www.youtube.com/watch?v=${video}`;
  }
  else{
    const VIDEO_PATH = "https://youtu.be/0BIaDVnYp2A";

  }
  return (
    <>
      <h2 className="color_red">Title: {remainingItems[0].title}</h2>
      <div className="videop">
        
        <div className="videostyle">
          <ReactPlayer
            ref={playerRef}
            url={VIDEO_PATH}

            light={thumbnail}
            controls={true}
            onPlay={() => console.log("video is playing")}
            onPause={() => console.log("video is paused")}
            width="90%"
            height="80vh"
            margin="auto"
          />
        </div>

        <div className="accordionStyle">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Actors</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{remainingItems[0].Actors}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Writer</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{remainingItems[0].Writer}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Plot</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{remainingItems[0].overview}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Popularity</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{remainingItems[0].popularity}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Vote Count</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{remainingItems[0].vote_count}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Released Date</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{remainingItems[0].release_date}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Runtime</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{remainingItems[0].Runtime}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>ImdbRating</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{remainingItems[0].imdbRating}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Videop;
