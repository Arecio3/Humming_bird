import React from 'react'
import { Button } from '../ButtonElements'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements'
import { useTranslation } from 'react-i18next';

const InfoSection = ({lightBg, id, imgStart, primary, lightText, darkText, buttonLabel, img, alt, topLine, headLine, description, dark, dark2}) => {

    const { t } = useTranslation();

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{t('TopLine')}</TopLine>
                            <Heading lightText={lightText}>{t('Headline')}</Heading>
                            <Subtitle darkText={darkText}>{t('Description')}</Subtitle>
                            <BtnWrap>
                                <Button to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>{t('ButtonLabel')}</Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                        <Img src={img} alt={alt}/>
                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
