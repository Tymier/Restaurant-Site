import styled from 'styled-components';
import  FeaturePic from "../../images/featured2.jpg"

export const FeatureContainer = styled.div`
  background: url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  dispay: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  text-align: center;
  padding: 0 1rem;

  h1 {
      font-size: clamp(3rem, 5vw, 5rem);
  }

  p {
      margin: 1rem;
      font-size: clamp(1rem, 3vw, 2rem);
  }
`
export const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 3px;
  border: none;
  background: black;
  color: white;
  border-radius: 100%;
  padding: 10px;
  transition: 0.2s ease-out;
  
  &:hover {
      color: grey;
      background: white;
      transition: 0.2s ease-out;
      cursor: pointer;
  }`