import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

export const CarouselComponent = () => {
  return (
    <CarouselContainer>
      <Carousel variant="dark">
        <Carousel.Item interval={2000}>
          <img src="/assets/images/carousel1.jpg" alt="carousel1" />

          {/* <img src = "/assets/images/carousel1.jgp" alt="carousel1" /> */}
          <Carousel.Caption>
            <h3>Doms WhiteBoard Markers</h3>
            <p>This is marker for writing on white board</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src="/assets/images/carousel2.jpg" alt="carousel2" />

          <Carousel.Caption>
            <h3>Permanent Markers</h3>
            <p>This Permanent Markers, used for permanent labeling</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          {/* <img src = "/assets/images/carousel3.jgp" alt="carousel3"/> */}
          <img src="/assets/images/carousel3.jpeg" />
          <Carousel.Caption>
            <h3>A4 size Paper</h3>
            <p>Spectra A4 size paper, 75gsm.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 600px;
    height: 500px;
  }
`;
