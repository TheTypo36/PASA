import styled from 'styled-components'
export const Nav = () =>{
    return<NavContainer>
        <HumburgerIcon>


        </HumburgerIcon>
        <Logo>
            <img src="/assets/images/PasaLogo.png" />

        </Logo>
        <SearchBar>
            <input type="text" name = "product" placeholder='What are you looking' />
            <button><img src="/assets/images/search.png" /></button>
        </SearchBar>
        <Cart>
            <img src="assets/images/trolley.png" />
        </Cart>
    </NavContainer>

}

const NavContainer = styled.div`
    width: 100%;
    position: fixed;
    background-color: #F8F8F8;
    color: white;
    height: 90px;
    display: flex;
    padding: padding: 0.18rem calc((100vw - 1000px) / 2);
    align-items: center;
    justify-content: space-between;


`;
const HumburgerIcon = styled.div`

`;

const Logo = styled.div`

    img{
        width: 90px;
        height: 90px;
    }
`;

const Cart = styled.div`
width: 10%;
height: 35px;
display: flex;
justify-content: center;
align-items: center;
    img{
        width: 50px;
    }
`;
const SearchBar = styled.div`

    width: 50%;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    // object-fit: contain;
    // border: 1px solid black;
    input{
        width: 90%;
        height: 70%;
        padding: 5px;
        border: none;
        background-color: #F8F8F8;

    }
    button{
        border: none;
        background-color: #F8F8F8;

        height: 105%;
        
        img{
            height: 100%;
        }
    }

`