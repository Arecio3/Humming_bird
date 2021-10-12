import React, { useState } from "react";
import { HeroContainer, HeroBg, VideoBg, MobileImg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from "./HeroElements";
import { Button } from '../ButtonElements';
import Video from "../../videos/birdvideo.mp4";
import Bird from '../../images/bird.jpg'

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          loading="lazy"
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
        />
        <MobileImg loading="lazy" src={Bird}/>
      </HeroBg>
      <HeroContent>
          <HeroH1>Professional Landscaping Buisness</HeroH1>
          <HeroP>
            Contact me for a <b>FREE</b> estimate. No need for an account!
          </HeroP>
          <HeroBtnWrapper>
              <Button onMouseEnter={onHover} onMouseLeave={onHover} to='contact'>Get Started {hover ? <ArrowForward /> : <ArrowRight />}</Button>
          </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
