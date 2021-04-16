import React, {useState} from 'react';
import Navbar from "../Navbar"
import Sidebar from '../Sidebar';
import {HeroContainer, HeroItems, HeroContent, HeroH1,
HeroP, HeroBtn} from "./HeroElements"

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
       <HeroContainer>
           <Navbar toggle={toggle} />
           <Sidebar isOpen={isOpen} toggle={toggle} />
           <HeroContent>
               <HeroItems>
                   <HeroH1>Best Food in the city</HeroH1>
                   <HeroP>Every Meal is 5 Stars</HeroP>
                   <HeroBtn>Order Here</HeroBtn>
               </HeroItems>
           </HeroContent>
       </HeroContainer>
    );
};

export default Hero
