import React from 'react'
import styled from 'styled-components'
import { Icon } from '../icon/Icon'
import { theme } from '../../styles/Theme'
import useMatchMedia from 'use-match-media-hook'



export const Social = () => {
    const queries = ['(max-width: 576px)'];
    const isMobile = useMatchMedia(queries);
    const viewBox = isMobile ? '0 0 20px 20px' : '0 0 24px 24px'
    const height = isMobile ? '20px' : '24px'
    const width = isMobile ? '20px' : '24px'

  return (
    <SocialList>
        <SocialItem>
            <SocialLink href='#'>
                <Icon iconId={'facebook'} width={width} height={height} viewBox={viewBox}/>
            </SocialLink>
        </SocialItem>
        <SocialItem>
            <SocialLink href='#'>
                <Icon iconId={'instagram'} width={width} height={height} viewBox={viewBox}/>
            </SocialLink>
        </SocialItem>
        <SocialItem>
            <SocialLink href='#'>
                <Icon iconId={'twitter'} width={width} height={height} viewBox={viewBox}/>
            </SocialLink>
        </SocialItem>
        <SocialItem>
            <SocialLink href='#'>
                <Icon iconId={'linkedln'} width={width} height={height} viewBox={viewBox}/>
            </SocialLink>
        </SocialItem>
    </SocialList>

  )
}

const SocialList = styled.ol `
    display: flex;
    column-gap: 12px;
    justify-items: center;
    align-items: center;
`
const SocialItem = styled.li`


`
const SocialLink = styled.a `

    svg {
        @media ${theme.media.mobile} {
            /* width: 20px;
            height: 20px; */

        }
    }

`