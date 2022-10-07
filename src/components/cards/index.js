import { React } from "react";
import { CardDeck, Card } from "react-bootstrap";
/*import { Link } from "react-router-dom";*/
import "./styles.css";

const Cards = () => {
  return (
    <>
      <CardDeck>
        <Card>
          <Card.Img />
          <Card.Body style={{ width: "500px" }}>
            <Card.Title>
              <div style={{ color: "#000" }}>Música "Easy on Me" com letra</div>
            </Card.Title>
            <Card.Text>
              <div style={{ color: "#000" }}>
                Aqui está uma música lançada recentemente pela Adele para que
                você possa escutar e tentar fazer esse exercício:
              </div>
              <div>
                <iframe
                  width="790"
                  height="415"
                  src="https://www.youtube.com/embed/vosbqMAkVlI"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Exercício 1</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img />
          <Card.Body style={{ width: "500px" }}>
            <Card.Title>
              <div style={{ color: "#000" }}>
                Música "Easy on Me" com letra e tradução:
              </div>
            </Card.Title>
            <Card.Text>
              <div style={{ color: "#000" }}>
                Aqui está uma música lançada recentemente pela Adele para que
                você possa escutar e tentar fazer esse exercício:
                <iframe
                  width="790"
                  height="415"
                  src="https://www.youtube.com/embed/fbgBq3-wKtg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Exercício 2</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <br />
      <CardDeck>
        <Card>
          <Card.Img />
          <Card.Body>
            <Card.Title>
              <div style={{ color: "#000" }}>
                Música "Easy on Me" com explicação
              </div>
            </Card.Title>
            <Card.Text>
              <div style={{ color: "#000", width: "100%" }}>
                Aqui está a explicação da música para que você possa compreender
                ainda mais!
              </div>
              <div>
                <iframe
                  width="1790"
                  height="915"
                  src="https://www.youtube.com/embed/aOvZtxH1p7U"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Exercício 3</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </>
  );
};

export default Cards;
