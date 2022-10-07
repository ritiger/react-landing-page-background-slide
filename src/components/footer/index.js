import React from "react";
import { Row, Col } from "react-bootstrap";
import { BiMailSend } from "react-icons/bi";

const Footer = () => {
  return (
    <div
      style={{
        color: "#000",
        background: "#e8eb8e",
        borderRadius: "5px",
        textAlign: "center"
      }}
    >
      <Row>
        <Col style={{ marginTop: "15px" }}>
          Envie-nos o seu feedback!
          <br />
          <p>
            <BiMailSend size={20} />{" "}
            <a
              style={{ all: "unset", cursor: "pointer" }}
              href="mailto://maria.teixeira77@etec.sp.gov.br"
            >
              {" "}
              Contate-nos
            </a>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
