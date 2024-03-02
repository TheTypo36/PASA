import styled from "styled-components";
export const Cart = (item) => {
  return (
    <CartContainer>
      <Poster>
        <img src="/assets/images/carousel1.jpg" />
      </Poster>
      <PriceCard></PriceCard>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  position: absolute;
  top: 15%;
  left: 20%;
`;
const Poster = styled.div`
  height: 100%;
  width: 50%;
  img {
    width: 300px;
  }
`;
const PriceCard = styled.div`
  height: 100%;
  width: 30%;
`;
