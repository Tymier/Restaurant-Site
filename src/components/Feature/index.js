import React from 'react';
import {FeatureContainer, FeatureButton} from "./FeatureElements";

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>New Meal Available</h1>
            <p>Chicken Alfredo</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
