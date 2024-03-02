import styled from "styled-components";
export const Footer = () => {
  return (
    <FooterContainer>
      <DropBrand></DropBrand>
      <AboutUs>PASA syndicate</AboutUs>
      <Follow>
        <b>Follow Us</b>
        <ul>
          <li>
            <a>
              <img src="/assets/images/facebook.png" />
            </a>
          </li>
          <li>
            <a>
              <img src="/assets/images/email.png" />
            </a>
          </li>
          <li>
            <a>
              <img src="/assets/images/instagram.png" />
            </a>
          </li>
        </ul>
      </Follow>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: #f8f8f8;
  width: 100%;
  height: 200px;
  position: fixed;
  padding: 8px;
  left: 0;
  right: 0;
  bottom: 0;
`;
const DropBrand = styled.div``;
const AboutUs = styled.div``;
const Follow = styled.div`
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  padding: 10px 5px;
  ul {
    width: 150px;
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    img {
      width: 30px;
    }
  }
`;
