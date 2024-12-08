import styled, { css } from "styled-components"
import { theme } from "../../../styles/Theme"

const Mask = styled.span`
    color: ${theme.colors.primaryFont};
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;

    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const ListItem = styled.li `
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        height: 3px;
        background-color: #b1029d;

        position: absolute;
        top: 45%;
        left: -5px;
        right: -5px;
        z-index: 1;

        transform: scale(0);
    }

    &:hover {
        &::before {
            transform: scale(1);
        }

        ${Mask} {
            transform: skewX(12deg) translateX(3px);

            & + ${Mask} {
            transform: skewX(12deg) translateX(-3px);
            }
        }
    }


`

const Link = styled.a `
    font-weight: 400;
    font-size: 16px;
    color: transparent;
`
// MobileMenu

const MobileMenu = styled.nav`

`
const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    background-color: #f1f1f1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    display: none;
    flex-direction: column;
    row-gap: 27px;


    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}

    ul {
        display: flex;
        gap: 38px;
        flex-direction: column;
        align-content: center;
        flex-wrap: wrap;

        @media ${theme.media.tablet} {
            gap: 27px;
        }

        li {
            @media ${theme.media.tablet} {
                &::after {
                content: '';
                display: inline-block;
                width: 238px;
                height: 1px;
                position: absolute;
                background-color: #828282;

                left: -10px;
                top: 30px;
            }
    }
        }
    }
`
// desktop menu
const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 32px;
    }
`

export const S = {
    ListItem,
    Link,
    Mask,
    MobileMenu,
    MobileMenuPopup,
    DesktopMenu
}