import styled from 'styled-components'
import ImgBg from '../../images/burger.jpg';

export const HeroContainer = styled.div`
background: url(${ImgBg});
height: 100vh;
background-position: center;
background-size: cover;
overflow: hidden;
`;

export  const HeroContent = styled.div`
 position: relative;
  left: 5%;
  bottom: 5%;
  height: calc(100vh -80px);
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw - 1300px) /2);
`

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: grey;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  
  @media screen and (max-width: 650px) {
      width: 100%;
  }
  `

  export const HeroH1 = styled.h1`
  font-size: 50px;
  margin-bottom: 1rem;
  letter-spacing: 3px;
  overflow-y: hidden;
  `
 export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
  overflow-y: hidden;
 `
 export const HeroBtn = styled.button`
 font-size: 1.4rem;
 padding: 1rem 4rem;
 border: none;
 background: white;
 color: black;
 transistion: 0.2s ease-out;
 border-radius: 100%;
 
 &:hover {
     background: grey;
     transistion: 0.2s ease-out;
     cursor: pointer;
     color: white;
 }
 `;
