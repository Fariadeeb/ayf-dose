import React from "react";
import Carousel from "react-bootstrap/Carousel";
import crsl1 from "../img/crsl1.png";
import crsl2 from "../img/crsl2.png";
import crsl3 from "../img/crsl3.png";

function Slider() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={crsl1} alt="First slid" />
          <Carousel.Caption>
            <h3>Jokowi Admits There Are 12 Serious Human Rights Violations in Indonesia</h3>
            <p>In a historic statement, President Jokowi acknowledged that there been serious human rights violations throughout Indonesia's history.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={crsl2} alt="Second slide" />
          <Carousel.Caption>
            <h3>ASEAN 'Second Official Language' Trainers Debate Is Irrelevant and Threatens Thousands of Regional Languages</h3>
            <p>
              The proposal for the Malay language to be adopted as the official language of ASEAN sparked a debate among Indonesian-Malaysian netizens. The
              warring parties forget that the diversity of languages in ASEAN has been marginalized.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={crsl3} alt="Third slide" />
          <Carousel.Caption>
            <h3>After Indonesia is accused of proposing a re-election, Myanmar citizens protest at the Indonesian Embassy.</h3>
            <p>
              Although the Ministry of Foreign Affairs denied this, RI had already learned of the unfavorable attitudes of the Myanmar people. If it happens,
              the military junta that overthrew the legitimate government would win re-election
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
export default Slider;
