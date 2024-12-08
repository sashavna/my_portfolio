import React, { useState } from 'react'
import { Logo } from '../../components/logo/Logo'
import { FlexWrapper } from '../../components/FlexWrapper'
import { Container } from '../../components/Container'
import {S} from './Header_Styles'
import { MobileHeaderMenu } from './headerMenu/mobileMenu/MobileMenu'
import { DesktopMenu } from './headerMenu/desktopMenu/DesktopMenu'

export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  return (
    <S.Header>
        <Container>
            <FlexWrapper justify='space-between' align='center'>
                <Logo/>
                <FlexWrapper align='center' columngap='32px'>
                    {width < breakpoint ? <MobileHeaderMenu/> : <DesktopMenu/>}
                    <FlexWrapper columngap='15px' align='center'>
                        <S.TalkLink href="/">Let’s Talk</S.TalkLink>
                        <S.BurgerButton isOpen={false}>
                            <S.Line></S.Line>
                            <S.StrokeLine></S.StrokeLine>
                            <S.Line></S.Line>
                        </S.BurgerButton>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
        </Container>
    </S.Header>

  )
}

