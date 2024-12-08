import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import {FooterMenu } from './footerMenu/FooterMenu'
import { FlexWrapper } from '../../components/FlexWrapper'
import { Icon } from '../../components/icon/Icon'
import { theme } from '../../styles/Theme'
import { Social } from '../../components/social/Social'


export const Footer = () => {
  return (
    <StyledFooter>
        <FooterContainer>
            <FirstWrapper>
                <MenuLogoWrapper>
                    <Logo/>
                    <FooterMenu/>
                </MenuLogoWrapper>
                <FlexWrapper direction='column' rowgap='16px'>
                    <FormTitle>Subscribe to my emailing list</FormTitle>
                        <StyledForm>
                            <Field type="text" placeholder='Enter your email'/>
                            <Button type={'submit'}>Subscribe</Button>
                        </StyledForm>
                    <PolicyInformation>By subscribing you agree to with our <a href='#'>Privacy Policy</a></PolicyInformation>
                </FlexWrapper>
            </FirstWrapper>
            <SecondWrapper>
                <Copyright>2022 Relume.<span>All right reserved.</span></Copyright>
                <Social/>
            </SecondWrapper>
        </FooterContainer>

    </StyledFooter>
  )
}
const StyledFooter = styled.footer `
    padding: 80px 0 72px;

    @media screen and (max-width: 1139px) {
        padding: 24px 15px 21px;
    }

`
const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* row-gap: 128px; */
    max-width: 1308px;
    min-height: 100%;
    padding: 0 109px;
    margin: 0 auto;

    @media screen and (max-width: 1139px) {
        padding: 0;
        /* row-gap: 45px; */
    }
`
const FirstWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 20px;
    flex-wrap: wrap;
    padding-bottom: 65px;

    @media ${theme.media.tablet} {
        padding-bottom: 28px;
    }
`
const SecondWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 65px;
    position: relative;

    &:before {
        content: "";
        display: inline-block;
        width: calc(100% + 100px);
        height: 1px;
        background-color: ${theme.colors.primaryFont};

        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);

        @media screen and (max-width: 1139px) {
            width: calc(100% - 10px);
        }
    }

    @media ${theme.media.tablet} {
        padding-top: 28px;
    }
`

const MenuLogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    @media ${theme.media.tablet} {
        column-gap: 10px;
    }
`
const StyledForm = styled.form `
    display: flex;
    column-gap: 16px;

    @media ${theme.media.tablet} {
        flex-wrap: wrap;
        row-gap: 16px;
    }
`
const Field = styled.input `
    padding: 12px;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #505050;
`
const FormTitle = styled.span `
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: ${theme.colors.primaryFont};

    @media ${theme.media.tablet} {
        margin-top: 26px;
    }

`
const PolicyInformation = styled.span`
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: ${theme.colors.primaryFont};

    a {
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        text-decoration: underline;
        color: ${theme.colors.primaryFont};
    }
`
const Button = styled.button `
    font-weight: 400;
    font-size: 16px;
    color: ${theme.colors.primaryFont};
    border: 1px solid ${theme.colors.primaryFont};
    padding: 12px 24px;

    &:hover {
        background-color: ${theme.colors.secondaryBg};
        color: ${theme.colors.secondaryFont};
    }

`

const Copyright = styled.small `
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: ${theme.colors.primaryFont};

    @media ${theme.media.tablet} {
        span {
            display: none;
        }
    }
`