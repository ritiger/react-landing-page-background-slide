import React from "react";
import { Alert, Accordion, Card, Button } from "react-bootstrap";

const Acordeon = ({ title = "", message = "", variant = "", ...rest }) => {
  return (
    <>
      <Alert variant={variant}>{title}</Alert>
      <Accordion defaultActiveKey="">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant={variant} eventKey="0">
              Assistir séries e filmes
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0" color="#000">
            <div
              style={{
                backgroundColor: "rgba(250, 100, 104, .5)",
                color: "#000"
              }}
            >
              <Card.Body>{message}</Card.Body>
            </div>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant={variant} eventKey="1">
              Falar com nativos
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <div
              style={{
                backgroundColor: "rgba(250, 100, 104, .5)",
                color: "#000"
              }}
            >
              <Card.Body>
                Existem alguns sites e aplicativos destinados a isso, como o
                Tandem, o Omeagle, Ablo, Hallo, HeloTalk, Lingebe, e vários
                outros.
                <br />
                Se a timidez é um problema para você, tente relaxar e respirar
                profundamente antes de começar a falar. Comece praticando com
                alguém da sua confiança (um amigo ou professor compassivo, não
                seu chefe!). Inicie a conversa com perguntas, assim você passa a
                bola para a outra pessoa e ganha tempo para controlar a
                conversa. Se puder, prepare-se para o que você vai falar.
                Conheça o assunto e o vocabulário relevante, pois isso também
                contribui para o aumento da sua confiança.
              </Card.Body>
            </div>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant={variant} eventKey="2">
              Pratique a imitação
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <div
              style={{
                backgroundColor: "rgba(250, 100, 104, .5)",
                color: "#000"
              }}
            >
              <Card.Body>
                Repita e conte um texto que ouviu usando paráfrase e{" "}
                <i>reported speech</i>. Tente imitar o que você ouve, variando a
                duração do que você está repetindo do nível de frases para
                seções maiores do discurso, com o intuito de variar a
                dificuldade da atividade. Os benefícios disso são: aprendizado
                de gramática e vocabulário por meio da aprendizagem implícita -
                desconhecendo o aprendizado. Você deve procurar também imitar as
                emoções originais do texto do falante nativo.
              </Card.Body>
            </div>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant={variant} eventKey="3">
              Tentar pensar e falar consigo mesmo
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <div
              style={{
                backgroundColor: "rgba(250, 100, 104, .5)",
                color: "#000"
              }}
            >
              <Card.Body>
                Responda algumas perguntas de conversação diariamente, diga o
                que você vê, o que você está fazendo, ou o que pretende fazer no
                dia seguinte, como foi o dia de hoje.
              </Card.Body>
            </div>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant={variant} eventKey="4">
              Se concentre ainda mais na pronúncia
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <div
              style={{
                backgroundColor: "rgba(250, 100, 104, .5)",
                color: "#000"
              }}
            >
              <Card.Body>
                Para focar ainda mais a pronúncia, incluindo consoantes, vogais,
                padrões de estresse e entonação, a prática deve incluir sons
                individuais, pares mínimos e trava-línguas. Você poderia
                investir em um livro de pronúncia ou procurar algumas atividades
                gratuitas online.
              </Card.Body>
            </div>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
};

export default Acordeon;
