import React, { useState } from "react";
import TopNav from "../component/Navbar";
import Slider from "../component/Carousel";
import SectionTitle from "../component/SectionTitle";
import TopicCard from "../component/TopicCard";
import Footer from "../component/Footer";
import NewsCard from "../component/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import topic1 from "../img/topic1.png";
import topic2 from "../img/topic2.png";
import topic3 from "../img/topic3.png";
import topic4 from "../img/topic4.png";
import news1 from "../img/news1.png";
import news2 from "../img/news2.png";
import news3 from "../img/news3.png";
import news4 from "../img/news4.png";
import news5 from "../img/news5.png";
import news6 from "../img/news6.png";
import { useEffect } from "react";

const URL = "https://backend21-service-dev.up.railway.app/article/";

function Home() {
  const [listArticle, setListArticle] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      result.json().then((json) => {
        console.log(json.articles);
        setListArticle(json.articles);
      });
    };
    fetchData();
  }, []);
  return (
    <>
      <TopNav />
      <Container>
        <Slider />

        <SectionTitle title="Trending news" />
        <Row>
          {listArticle.map((item) => (
            <Col>
              <NewsCard id={item.id} img={item.image} title={item.title} desc="Princess Bajrakitiyabha's health crisis has triggered future speculation" />
            </Col>
          ))}
          {/* <Col>
            <NewsCard
              img={tn2}
              title="Accused of Sending Haze to Malaysia, Indonesian Protests"
              desc="Satellite data showed the hotspots were indeed increasing."
            />
          </Col>
          <Col>
            <NewsCard
              img={tn3}
              title="Thailand Will Legalize Marijuana Bud and Flower Cultivation"
              desc="Marijuana is no longer on the list of narcotic plants in Thailand."
            />
          </Col> */}
        </Row>
        <SectionTitle title="Categories" />
        <Row>
          <Col>
            <TopicCard img={topic1} title="Politic" desc="Indonesia's Patriarchy and  ASEAN Women Conference" />
          </Col>
          <Col>
            <TopicCard img={topic2} title="Culture" desc="Closer to ASEAN at the 2012 ASEAN Cultural Show" />
          </Col>
          <Col>
            <TopicCard img={topic3} title="Science" desc="ASEAN Countries Agree on Cooperation in Science" />
          </Col>
          <Col>
            <TopicCard img={topic4} title="Lifestyle" desc="Asean Lifestyle Week celebrates entrepreneurship  " />
          </Col>
        </Row>

        <SectionTitle title="Latest post" />
        <Row>
          <Col>
            <NewsCard
              img={news1}
              title="A Southeast Asian Football Match Fixing Scandal"
              desc="The AFC banned 22 players and officials from Laos and Cambodia from engaging in football for life."
            />
          </Col>
          <Col>
            <NewsCard
              img={news2}
              title="Ex-PM Mahathir: Riau May Be Claim by Malaysia"
              desc="Mahathir Mohamad's statement that Singapore and the Riau Archipelago are Malay lands has sparked criticism."
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <NewsCard
              img={news3}
              title="Man Releases 18 Shots at Thai Elementary School"
              desc="The attacker of school shootings in Thailand were irritated by the loud noises of elementary school children."
            />
          </Col>

          <Col>
            <NewsCard
              img={news4}
              title="Burma's Atrocities Involved setting Concerts Bombs"
              desc="An air attack by a Myanmar military jet struck a rebel group's celebratory performance in the Kachin region."
            />
          </Col>
        </Row>

        <br />
        <Row>
          <Col>
            <NewsCard
              img={news5}
              title="Rhinos horn smuggling is found by Malaysian officials"
              desc="The 18 horns were to be sold as herbal medicines to China. Its value is estimated at IDR 41 billion."
            />
          </Col>

          <Col>
            <NewsCard
              img={news6}
              title="Korean Mass Murder Compensation for Victims"
              desc="
              Korean Mass Murder Compensation for Victims
              Past grave human rights crimes include the Korean army' murderous rampage in the Vietnam region."
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default Home;
