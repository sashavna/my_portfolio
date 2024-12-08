import styled, { css } from "styled-components"
import { theme } from "../../styles/Theme"

const Header = styled.header `
    background-color: rgba(255, 255, 255, 0.9);
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;

`

const TalkLink = styled.a `
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    padding: 8px 20px;
    background-color: ${theme.colors.secondaryBg};
    color: ${theme.colors.secondaryFont};
    border: 1px solid ${theme.colors.secondaryBg};

    &:hover {
        background-color: ${theme.colors.primaryBg};
        color: ${theme.colors.primaryFont};
    }

`
const BurgerButton = styled.button<{isOpen: boolean}>`
    display: flex;
    row-gap: 5px;
    flex-direction: column;
    align-items: flex-end;

    ${props => props.isOpen && css<{isOpen: boolean}>`
        span:nth-child(1){
            transform: rotate(-45deg) translate(-4px, 8px);
            width: 28px;
        }

        span:nth-child(2){
            background-color: #ffffff00;

            ::before {
                background-color: #ffffff00;
            }
        }

        span:nth-child(3){
            transform: rotate(45deg) translate(-3px, -7px);
            width: 28px;
        }
    `}

    @media screen and (min-width: 769px) {
        display: none;
    }
`

const Line = styled.span`
    display: block;
    width: 20px;
    height: 3px;
    background-color: #292D32;
    border-radius: 5px;
    z-index: 9999;
`
const StrokeLine = styled.span`
    position: relative;
    width: 14px;
    height: 3px;
    background-color:#292D32;
    display: inline-block;
    border-radius: 5px;

    &::before {
        content: '';
        display: inline-block;
        width: 5px;
        background-color:#292D32;
        height: 3px;
        border-radius: 5px;

        position: absolute;
        left: -6px;

    }
`

export const S = {
    Header,
    TalkLink,
    BurgerButton,
    Line,
    StrokeLine
}