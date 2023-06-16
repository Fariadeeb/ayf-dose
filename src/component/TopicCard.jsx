import React from "react";
import Card from "react-bootstrap/Card";

function TopicCard({ img, title, desc }) {
  return (
    <>
      <Card className="bg-dark text-white text-center">
        <Card.Img src={img} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}
export default TopicCard;
