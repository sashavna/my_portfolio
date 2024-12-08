import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"

const Main = styled.section `
    display: flex;
    padding: 125px 0 110px 0;

    ${FlexWrapper} {
        @media ${theme.media.desktop} {
            flex-wrap: nowrap;
        }
    }
`
const NameImgWrapper = styled.div `
    z-index: 1;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1140px) {
        align-items: center;
    }
`
const MainTitle = styled.h1 `
    color: transparent;
`
const Name = styled.h2 `
    line-height: 117%;
    ${font({weight: 800, Fmin: 75, Fmax: 150})};
    z-index: 1;

    span {
        white-space: nowrap;
    }

    @media screen and (max-width: 1140px) {
        text-align: center;
        max-width: 460px;
    }

    @media ${theme.media.mobile} {
        text-align: left;
    }
`
const PhotoTitle = styled.img `
    margin-bottom: 10px;

    @media screen and (min-width: 577px) and (max-width: 1139px) {
        max-width: 70%;
    }

    @media ${theme.media.mobile} {
        width: 357px;
        height: 104px;
        top: 0;
        align-self: start;
    }
`
const PhotoWrapper = styled.div `
    position: relative;
    transform: translateX(-30%);

    &::before {
        content: '';
        display: inline-block;
        width: 570px;
        height: 570px;
        background-color: #e7e7e7;

        position: absolute;
        transform: rotate(-9deg);

        @media ${theme.media.tablet} {
            width: 300px;
            height: 300px;
        }
    }

    img:only-child {
        @media ${theme.media.tablet} {
            width: 300px;
            height: 300px;
        }
    }

    @media screen and (max-width: 1139px) {
        transform: translateX(0);
        top: 40px;
    }
`
export const S = {
    Main,
    NameImgWrapper,
    MainTitle,
    Name,
    PhotoTitle,
    PhotoWrapper
}