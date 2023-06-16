import React from "react";
import Card from "react-bootstrap/Card";

function NewsCard({ title, desc, img, id }) {
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Link href={`/article/detail/${id}`} className="text-decoration-none fs-4 fw-semibold">
          {title}
        </Card.Link>
        <Card.Text>{desc} </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default NewsCard;
