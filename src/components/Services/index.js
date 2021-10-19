import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { useTranslation } from 'react-i18next';

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesIcon, ServicesCard, ServicesH2, ServicesP, } from './ServicesElements'
const Services = () => {

    const { t } = useTranslation();

    return (
        <ServicesContainer id="services">
            <ServicesH1>{t('ServicesH1')}</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>{t('Flexible')}</ServicesH2>
                    <ServicesP>{t('FlexP')}</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>{t('BiLingual')}</ServicesH2>
                    <ServicesP>{t('BiLingualP')}</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>{t('Mobile')}</ServicesH2>
                    <ServicesP>{t('MobileP')}</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
