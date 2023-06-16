import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import foto from "/src/img/foto.png";
import "/src/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <h3 className="judul"> Meet The Mind Behind DOSE </h3>
          <b>
            {" "}
            <p className="fst-italic"> We put forth a lot of effort not for our own advantage but for our attainment of goals</p>{" "}
          </b>
          <p>
            {" "}
            Dose merupakan platform media berita yang memungkinkan pemuda ASEAN untuk mengetahui kejadian/berita/isu-isu yang sedang terjadi di kawasan Asia
            Tenggara tanpa harus khawatir terkait tingkat validitasnya.{" "}
          </p>
        </div>
        <div className="col">
          <img src={foto} className="img-fluid" alt="AboutImage" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
