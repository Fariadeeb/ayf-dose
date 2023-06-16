import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../style.css";
import Container from "react-bootstrap/Container";
import TopNav from "../component/Navbar";
import BreadCrumb from "../component/Breadcrumb";
import tn1 from "../img/tn1.png";
import doseLogo from "../img/doseTeamLogo.png";

const URL = "https://backend21-service-dev.up.railway.app/articles/:id";

function NewsDetail() {
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL.replace(":id", id));
      result.json().then((json) => {
        console.log(json);
      });
    };
    fetchData();
  }, []);

  return (
    <>
      <TopNav />
      <Container>
        <BreadCrumb />

        <div>
          <h2 className="mb-4">A Royal crisis Is Brewing in Thailand After the Princess collapses</h2>
          <img src={tn1} alt="" style={{ width: "100%" }} />
          <div className="publish">
            <div className="imgWrap">
              <img src={doseLogo} alt="" />
            </div>
            <div className="ps-3">
              <p className="publisher fw-semibold mb-1">DOSE Team</p>
              <small>December 21, 2022</small>
            </div>
          </div>
          <hr />
          <p>
            The princess widely considered to be the successor to Thailand's throne is on life support after she fell unconscious from a sudden heart condition
            last week, the Thai palace said Monday in the first acknowledgment of the graveness of her ailment. Princess Bajrakitiyabha's heart contractions
            were weak, and her heart, lungs, and kidneys “are being supported by machine,” the palace said in a statement. The palace previously said she was
            “stable to a certain extent” without sharing further information. The eldest daughter of Thailand's King Maha Vajiralongkorn, the 44-year-old
            collapsed on Wednesday while training her dogs in Nakhon Ratchasima, a city north of the capital Bangkok. She was rushed to a nearby hospital before
            being flown by helicopter to Bangkok's King Chulalongkorn Memorial Hospital, where she is being treated. Pavin Chachavalpongpun, an associate
            professor of Thai politics at Kyoto University in Japan, told VICE World News last week that the princess' collapse might trigger a “crisis in
            succession” in Thailand. Pavin Chachavalpongpun, an associate professor of Thai politics at Kyoto University in Japan, told VICE World News last
            week that the princess' collapse might trigger a “crisis in succession” in Thailand.
          </p>
        </div>

        <hr />
      </Container>
    </>
  );
}
export default NewsDetail;
