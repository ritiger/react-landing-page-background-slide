import React from "react";
import { Jumbotron as RBJumbotron, Button } from "react-bootstrap";

const Jumbotron = () => {
  return (
    <RBJumbotron style={{ backgroundColor: "rgb(233, 140, 188)" }}>
      <h1 style={{ color: "black" }}>Quer saber mais sobre o assunto?</h1>
      <p>
        Existem muitos estudos que comprovam que quanto mais você inclui o
        idioma que você quer aprender no seu dia a dia, mais rápida e fácil será
        a aprendizagem, ouvir músicas e cantá-las é uma das maneiras de fazer
        isto de forma divertida e descontraída.
        <br />
        Como diz neste site de dicas que você pode acessar clicando no botão
        abaixo.
      </p>
      <p>
        <a href="https://www.estudarfora.org.br/4-dicas-da-neurociencia-para-aprender-linguas-mais-rapido/">
          <Button
            variant="danger"
            onClick={() => alert("Você será encaminhado para o site")}
          >
            Ir para o site
          </Button>
        </a>
      </p>
    </RBJumbotron>
  );
};

export default Jumbotron;
