import React from "react";
import Card from "react-bootstrap/Card";
import crsl1 from "../img/crsl1.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function LatestCard() {
  return (
    <Card>
      <Row>
        <Col style={{ padding: 0 }}>
          <Card.Img variant="top" src={crsl1} />
        </Col>
        <Col style={{ padding: 0 }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          </Card.Body>
          {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
        </Col>
      </Row>
    </Card>
  );
}
export default LatestCard;
