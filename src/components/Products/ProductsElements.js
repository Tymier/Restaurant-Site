import styled from 'styled-components'

export const ProductsContainer = styled.div`
width: 100vw;
min-height: 100vh;
padding: 5rem calc((100vw - 1300px) /2);
background: grey;
color: black;
`;

export const ProductWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 0 auto;
`;

export const ProductCard = styled.div`
margin: 0 2rem;
line-height: 2;
width: 300px;
`;

export const ProductImg = styled.img`
height: 300px;
min-width: 70px;
max-width: 95%;
box-shadow: 8px 8px white;
border-radius: 100%;
`;

export const ProductsHeading = styled.h1`
font-size: clamp(2rem, 2.5vw, 3rem);
text-align: center;
margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
font-weight: 400;
font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2rem;
text-align: center;
`;

export const ProductDesc = styled.p`
margin-bottom: 1.5rem
`;

export const ProductPrice = styled.p`
margin-bottom: 1rem;
font-size: 2rem;
`;

export const ProductButton = styled.button`
font-size: 1rem;
padding: 1rem 4rem;
border: none;
background: black;
color: white;
transition: 0.2 ease-out;

&:hover {
    background: white;
    transition: 0.2 ease-out;
    cursor: pointer;
    color: black;
    box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
}`