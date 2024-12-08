import React from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'
import { FlexWrapper } from '../../../../components/FlexWrapper'
import { theme } from '../../../../styles/Theme'
import { font } from '../../../../styles/Common'


type StyledProjectsPropstype = {
    background: string
    topic: string
    title: string
    definition: string
    case: string
    variant: string
}

export const Project = (props: StyledProjectsPropstype) => {
  return (
    <StyledProject variant={props.variant} background={props.background}>
        <BackgroundFilterWrappper>
            <InformationWrapper>
                <FlexWrapper direction='column' basis='50%'>
                    <TopicTitle>{props.topic}</TopicTitle>
                    <ProjectCase>{props.case}</ProjectCase>
                    <ProjectTitle>{props.title}</ProjectTitle>
                </FlexWrapper>
                <FlexWrapper direction='column' basis='50%'>
                    <Description>{props.definition}</Description>
                    <Link href=''> View More
                    <Icon iconId='link' width='16' height='16' viewBox='0 0 16 16'/>
                    </Link>
                </FlexWrapper>
            </InformationWrapper>
        </BackgroundFilterWrappper>
    </StyledProject>
  )
}

const StyledProject = styled.div<{variant:string, background: string}>`
    background-image: url(${props => props.background});
    background-size: cover;
    background-repeat: no-repeat;

    ${props => props.variant ==='first' && css<{variant: string}>`
       background-position: 65%;
    `}

    ${props => props.variant ==='second' && css<{variant: string}>`
       background-position: 55%;
    `}

    ${props => props.variant ==='third' && css<{variant: string}>`
       background-position: 50%;
    `}
`


const BackgroundFilterWrappper = styled.div`
    backdrop-filter: brightness(60%);
    padding: 92px 46px 100px;

    @media ${theme.media.mobile} {
        padding: 62px 21px 60px 22px;
    }
`

const TopicTitle = styled.span `
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: ${theme.colors.secondaryFont};
    margin-bottom: 16px;
    ${font({weight: 600, Fmin: 15, Fmax: 16})};

`
const ProjectTitle = styled.h2`
    line-height: 120%;
    color: ${theme.colors.secondaryFont};
    ${font({weight: 800, Fmin: 42, Fmax: 45})};

    @media ${theme.media.tablet} {
        margin-bottom: 22px;
    }
`
const ProjectCase = styled.span`
    line-height: 120%;
    color: ${theme.colors.secondaryFont};
    ${font({weight: 200, Fmin: 42, Fmax: 45})};
`
const Description = styled.p`
    line-height: 150%;
    color: ${theme.colors.secondaryFont};
    margin-bottom: 40px;
    ${font({weight: 400, Fmin: 17, Fmax: 18})};
`
const Link = styled.a `
    color: ${theme.colors.secondaryFont};
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    align-items: center;
`
const InformationWrapper = styled.div `
    display: flex;
    column-gap: 80px;

    @media ${theme.media.tablet} {
        flex-wrap: wrap;
        ${FlexWrapper} {
            flex-basis: auto;
        }
    }
`
