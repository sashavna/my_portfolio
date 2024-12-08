import React from 'react'
import { Icon } from '../icon/Icon'
import styled from 'styled-components'

export const Logo = () => {
  return (
    <LinkLogo href="">
        <Icon iconId='logo' width='40' height='40'/>
    </LinkLogo>
  )
}

const LinkLogo = styled.a `
    display: flex;
    align-items: center;

`