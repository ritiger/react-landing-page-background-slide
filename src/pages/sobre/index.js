import React from "react";
import Header from "../../components/header/index";
import "./styles.css";

import fotosobre from "../../assets/fotosobre.jpeg";
/*import wallpaper from "../../assets/wallpaper.jpg";*/

const Home = () => {
  return (
    <>
      <Header />
      <div>Página - Sobre</div>
      <table
        style={{
          width: "100%",
          backgroundColor: "rgba(233, 140, 188, .7)",
          color: "white"
        }}
      >
        <tr
          style={{
            height: "40px",
            textAlign: "centro",
            fontWeight: "bolder"
          }}
        >
          <td style={{ width: "50%" }}>Foto</td>
          <td style={{ width: "50%" }}> Dados do Aluno </td>
        </tr>
        <tr style={{ height: "70vh" }}>
          <td style={{ width: "50%", textAlign: "center" }}>
            <img
              width="100%"
              src={fotosobre}
              alt="foto minha"
              style={{ borderRadius: "9px" }}
            />
          </td>
          <td style={{ width: "50%" }}>
            <b>Nome:</b> Maria Gabriela Bravo Teixeira
            <br />
            <b>Data:</b> 19/11/2021 21:47
            <br />
            <b>Curso:</b> <i>ETIM Informática para Internet</i>
            <br />
            <b>Série:</b> <u>2° Ano</u>
            <br />
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255,.3)",
                marginTop: "30px",
                textAlign: "right",
                height: "150px"
              }}
            >
              <br />{" "}
              <i>
                <s style={{ fontSize: "36px" }}>
                  {" "}
                  O caminho correto não é o mais fácil.
                </s>
              </i>
            </div>
            <br />
          </td>
        </tr>
        <tr style={{ height: "50px", textAlign: "center" }}>
          <td colSpan={2}>
            Desenvolvido por: Maria Gabriela Bravo teixeira - Versão 1.0 -
            19/11/2021
          </td>
        </tr>
      </table>
    </>
  );
};

export default Home;
