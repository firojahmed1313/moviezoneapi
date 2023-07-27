import React, { useEffect } from "react";
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
const VIDEO_PATH = "https://youtu.be/0BIaDVnYp2A";
const Videop = () => {
  const dispatch = useDispatch();
  const playerRef = useRef(null);
  let data = useSelector((state) => state.movies.movies);
  //console.log(data)
  const { userId } = useParams();
  const remainingItems = data.filter((item) => item.id === userId);
  //console.log(remainingItems)
  useEffect(() => {
    dispatch(productList());
  }, []);
  const min = 0
  const max = 2
  const a = Math.floor(Math.random() * (max - min + 1)) + min;
  
  const thumbnail=remainingItems[0].Images[a]
  return (
    <>
      <h2 className="color_red">Title: {remainingItems[0].Title}</h2>
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
              <Typography>{remainingItems[0].Plot}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Awards</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{remainingItems[0].Awards}</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Rated</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{remainingItems[0].Rated}</Typography>
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
              <Typography>{remainingItems[0].Released}</Typography>
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
