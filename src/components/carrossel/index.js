import React from "react";
import { Carousel } from "react-bootstrap";

import slide3 from "../../assets/slide3.png";
import slide2 from "../../assets/slide2.png";
import slide1 from "../../assets/slide1.png";

const Carrossel = () => {
  return (
    <Carousel fade>
      <Carousel.Item interval={1000}>
        <img src={slide1} alt="servico.mei" className="d-block w-100" />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={slide2} alt="servico.mei" className="d-block w-100" />
        <Carousel.Caption>
          <h5 style={{ height: "330px" }}>
            Você pode pesquisar sua música favorita no youtube com legendas em
            portugues e a letra no idioma original.
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={slide3} alt="servico.mei" className="d-block w-100" />
        <Carousel.Caption>
          <h5 style={{ height: "330px" }}>
            Se você pode pesquisar por pessoas que explicam essa música no
            youtube de forma clara e de fácil compreenção.
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrossel;
/* Colocar que dá pra pesquisar pessoas que explicam a letra da música*/
