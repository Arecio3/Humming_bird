import React, { useState } from "react";
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, HeroH2, Bird } from "./HeroElements";
import { Button } from '../ButtonElements';
import Video from "../../videos/birdvideo.mp4";
import bird from '../../images/bird2.jpg'
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  
  const onHover = () => {
    setHover(!hover);
  }
  const { t } = useTranslation();

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
        <Bird loading="lazy" src={bird} />
      </HeroBg>
      <HeroContent>
          <HeroH1>{t('HeroTitle')}</HeroH1>
          <HeroH2>Tampa, Florida</HeroH2>
          <HeroP>
            {t('HeroP')}
          </HeroP>
          <HeroBtnWrapper>
              <Button to="contact" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark='true'>{t('GetStarted')} {hover ? <ArrowForward /> : <ArrowRight />}</Button>
          </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
