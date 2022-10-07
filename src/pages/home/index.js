import React from "react";
import Header from "../../components/header/index";

import Carrossel from "../../components/carrossel/index";
import Jumbotron from "../../components/jumbotron/index";
import Cards from "../../components/cards/index";
import Footer from "../../components/footer/index";
import Acordeon from "../../components/acordeon/index";

const Home = () => {
  return (
    <>
      <Header />
      Página - Home
      <Carrossel />
      <br />
      <Cards />
      <br />
      <Jumbotron />
      <Acordeon
        title="O que mais eu posso fazer para aprender ainda mais rápido?"
        message="Tanto em filmes, quanto em séries, você não só pode como deve começar assistindo-os com legendas. Esse primeiro passo é fundamental para você treinar seu ouvido, adquirir um novo vocabulário e ir se acostumando com diálogos no idioma. Assim você já vai estar habituado com o idioma quando for assistir sem o auxílio das legendas"
        variant="danger"
      />
      <br />
      <Footer />
    </>
  );
};

export default Home;
