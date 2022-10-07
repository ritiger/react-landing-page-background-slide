import React from "react";
import Header from "../../components/header/index";

import { Jumbotron as RBJumbotron, Button } from "react-bootstrap";

const Temap = () => {
  return (
    <>
      <Header />
      Página - Tema Pedagógico
      <RBJumbotron style={{ backgroundColor: "rgb(233, 140, 188, 0.7)" }}>
        <h1 style={{ color: "rgb(220, 38, 19)" }}>Tema Pedagógico</h1>
        <br />
        <h5>
          Você sabe a importância de aprender novos idiomas tanto na sua vida
          profissional quanto na sua vida pessoal?
        </h5>
        <p>
          O estudo de uma segunda língua tem se tornado uma prioridade para as
          pessoas. Ser bilíngue, no mínimo, é uma necessidade em um mundo cada
          vez mais globalizado e competitivo. Então, aprender outro idioma está
          perto do topo das exigências de muita gente. Como a tendência é que
          esse conhecimento se torne progressivamente importante, muitos pais e
          responsáveis têm buscado o ensino de línguas estrangeiras para as
          crianças. Ao mesmo tempo, ainda há alguns mitos sobre o
          desenvolvimento da fala ou do aprendizado em programas bilíngues. Para
          não ter dúvidas sobre o tema, veja qual é a importância de aprender
          outro idioma desde cedo.
        </p>
        <br />
        <h5>Por que é importante ser bilíngue?</h5>
        <p>
          Antes mesmo de pensar na relevância de estudar uma língua estrangeira,
          é essencial compreender o papel do bilinguismo. A sociedade está cada
          vez mais conectada e globalizada, então será exigido que as pessoas
          tenham conhecimentos amplos e progressivos. Aprender inglês, por
          exemplo, traz a oportunidade de falar aquele que é considerado um
          idioma universal. Esse fato permite que as crianças e, futuramente, os
          jovens tenham acesso a novas culturas, pessoas e oportunidades. Lidar
          com outro idioma também está ligado aos benefícios que esse processo
          traz para o cérebro e para a realidade do estudante, de modo geral.
          Mais do que nunca, é preciso se concentrar em alcançar a fluência e
          ter oportunidades ampliadas no futuro.
        </p>
        <br />
        <h5>
          Por que é importante que as crianças e adolescentes sejam apresentados
          a uma língua estrangeira?
        </h5>
        <p>
          O corpo humano passa por fases de desenvolvimento, e cada uma delas é
          marcada por um processo de aprendizagem. Nos primeiros meses de vida,
          os pequenos aprendem funções básicas. A partir dos 12 meses de vida,
          começam a responder a estímulos sensoriais e movimentos. Dos 2 anos em
          diante, a linguagem passa a ganhar importância. Desde o começo,
          aprender outro idioma é uma possibilidade bastante vantajosa —
          inclusive, para aproveitar todo o processo de desenvolvimento. Na
          sequência, veja quais são os maiores benefícios de ser exposto a um
          novo idioma.
        </p>
        <br />
        <h5>Como garantir que o estudante possa aprender outro idioma?</h5>
        <p>
          Para ter a certeza de que a aquisição de uma nova linguagem é viável,
          é muito importante que o processo aconteça da maneira correta. Não
          basta expor a criança a um ambiente com outra língua se não houver uma
          metodologia formal. Também não é suficiente — ou, ao menos, produtivo
          — matriculá-la em um curso tradicional. A exposição é pouca e, com
          isso, perde-se a janela de tempo ideal para consolidar o aprendizado.
          O melhor é buscar uma escola bilíngue, onde a experiência é
          completamente imersiva. Dessa forma, o estudante tem a chance de usar
          o novo idioma como uma ferramenta de comunicação. Com dinâmica, o
          aprendizado se concretiza em menos tempo e dá origem à desejada
          proficiência. Aprender outro idioma desde cedo já se tornou uma
          necessidade para muita gente, diante da importância da globalização.
          Além de gerar fluência, é um jeito de estimular as atuações
          sociocultural e cognitiva, o que leva a resultados muito melhores em
          todos os aspectos.
        </p>
        <br />
        <p>
          <a href="https://bilingue.pearson.com.br/2019/07/08/qual-e-a-importancia-de-aprender-outro-idioma-desde-cedo/">
            <Button
              variant="danger"
              onClick={() => alert("Você será encaminhado para o site")}
            >
              Ir para o site
            </Button>
          </a>
        </p>
      </RBJumbotron>
    </>
  );
};

export default Temap;
