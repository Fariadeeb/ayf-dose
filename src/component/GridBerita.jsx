import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "/src/GridBerita.css";

const GridBerita = () => {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-4 col-md-6 content-item">
            <span>01</span>
            <h4>Tulis Berita</h4>
            <p>Berita seputar asia tenggara</p>
          </div>

          <div className="col-lg-4 col-md-6 content-item">
            <span>02</span>
            <h4>Baca Berita</h4>
            <p>Membaca berita yang telah ditulis seputar asia tenggara</p>
          </div>

          <div className="col-lg-4 col-md-6 content-item">
            <span>03</span>
            <h4>Berita Update</h4>
            <p>Berita ter-update dari penulis semua kalangan dan negara</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridBerita;
