import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../styles/Theme'
import { font } from '../../../styles/Common'

export const FooterMenu = () => {
  return (
    <StyledMenu>
        <ul>
            <FooterMenuItem>
                <MenuLink href=''>Projects</MenuLink>
            </FooterMenuItem>
            <FooterMenuItem>
                <MenuLink href=''>About</MenuLink>
            </FooterMenuItem>
            <FooterMenuItem>
                <MenuLink href=''>Digital Assets</MenuLink>
            </FooterMenuItem>
        </ul>
    </StyledMenu>
  )
}

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 32px;
    }

`
const FooterMenuItem = styled.li`

`

const MenuLink = styled.a`
    line-height: 150%;
    color: ${theme.colors.primaryFont};
    ${font({weight: 400, Fmin: 14, Fmax: 16})};
`