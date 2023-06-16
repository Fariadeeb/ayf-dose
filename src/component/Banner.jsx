import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "/src/Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section id="cta" className="cta">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 text-center text-lg-start">
            <h3>Baca Berita Terbaru</h3>
            <p> Kembali ke Menu beranda untuk membaca dan melihat berita terbaru seputar asia tenggara!</p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <Link to="/" className="cta-btn align-middle text-decoration-none">
              Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
