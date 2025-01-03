import React from "react";
import Card from "react-bootstrap/Card";

export default function CardItemMenu({ data }) {
  return (
    <Card className="mt-3 p-0"  style={{ width: "18rem" }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title className="text-center my-3">{data.name}</Card.Title>
        <ul>
          {data.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <Card.Text className="text-center fw-bold">{data.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}
