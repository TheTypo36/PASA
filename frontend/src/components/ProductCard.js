import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export const ProductCard = (item) => {
  console.log("inside productCard", item);
  return (
    <ProductCardContainer>
      hello
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.postUrl} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </ProductCardContainer>
  );
};

const ProductCardContainer = styled.div`
  padding: 300px;
  display: flex;
  flex-direction: column;
  color: black;
  z-index: 100;
`;
