import React from "react";
import "../style.css";
import Container from "react-bootstrap/Container";
import arrowUp from "../img/arrowUp.png";
import fb from "../img/fb.png";
import insta from "../img/insta.png";
import twt from "../img/twt.png";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <footer>
          <div className="left">
            <p className="l1 text-white fs-3 fw-bold">DOSE</p>
            <p className="l2 text-secondary fs-6">copyright 2023</p>
          </div>
          <div className="right">
            <div className="toTopWrap">
              <p className="backToTop text-white">back to top</p>
              <a href="#">
                <img src={arrowUp} alt="arrow-up icon" />
              </a>
            </div>
            <div className="icon">
              <a href="#" className="px-2">
                <img src={insta} alt="v" />
              </a>
              <a href="#" className="px-2">
                <img src={fb} alt="v" />
              </a>
              <a href="#" className="px-2">
                <img src={twt} alt="v" />
              </a>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
}
export default Footer;
