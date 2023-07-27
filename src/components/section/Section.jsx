import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Section() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="small" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" className="d-block w-100 h-25" alt="Cliff Above a Stormy Sea"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" className="d-block w-100" alt="Cliff Above a Stormy Sea"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" className="d-block w-100" alt="Cliff Above a Stormy Sea"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Section;