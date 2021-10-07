import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: #232a34;

    @media screen and (max-width: 428px) {
        display: none;
    }
`

export const MobileImg = styled.img`
    display: none;

    @media screen and (max-width: 428px) {
        position: absolute;
        display: flex;
        width: 100%;
        height: 100%;
        overflow-y: hidden;
        object-fit: contain;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
`