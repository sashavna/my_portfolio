import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Photo } from '../../../components/photo/Photo'
import { Container } from '../../../components/Container'
import { theme } from '../../../styles/Theme'
import { font } from '../../../styles/Common'

export const About = () => {
  return (
    <StyledAbout id={'about'}>
        <Container>
            <FlexWrapper columngap='69px'>
                <LeftWrapper>
                    <TopicAbout>About Me</TopicAbout>
                    <TitleAbout>I look at usual<br/>things with my<br/>unusual eyes.</TitleAbout>
                    <PhotoLeftWrapper>
                        <Photo width='100%' height='100%'/>
                    </PhotoLeftWrapper>
                </LeftWrapper>
                <RightWrapper>
                    <DescriptionWrapper>
                        <DescriptionAbout>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.
                        </DescriptionAbout>
                        <br/>
                        <DescriptionAbout>
                            Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper nec, habitasse vulputate. Eget dictum quis est sed egestas tellus, a lectus. Quam ullamcorper in fringilla arcu aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec elementum cras porta.
                        </DescriptionAbout>
                        <br/>
                        <DescriptionAbout>
                            Sed elementum, sed dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit sagittis in eleifend dignissim. Natoque mauris cras molestie velit. Maecenas eget adipiscing quisque viverra lectus arcu, tincidunt ultrices pellentesque.
                        </DescriptionAbout>
                    </DescriptionWrapper>
                    <PhotoRightWrapper>
                        <Photo width='100%' height='100%'/>
                    </PhotoRightWrapper>
                </RightWrapper>
            </FlexWrapper>
        </Container>
    </StyledAbout>
  )
}

const StyledAbout = styled.section`
    padding: 100px 0 204px 0;

    ${FlexWrapper} {
        @media screen and (max-width: 1070px) {
            flex-wrap: wrap;
        }
    }

    @media ${theme.media.mobile} {
        padding: 50px 0px 95px;
    }
`
const TopicAbout = styled.span `
    font-weight: 900;
    font-size: 16px;
    line-height: 150%;
    color: ${theme.colors.secondaryFont};
`
const TitleAbout = styled.h2 `
    line-height: 120%;
    font-variant: all-small-caps;
    color: ${theme.colors.secondaryFont};
    margin: 16px 0 238px;
    ${font({weight: 254, Fmin: 43, Fmax: 48})};

    @media screen and (max-width: 1070px) {
        margin-bottom: 30px;
    }
`
const DescriptionAbout = styled.p `
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: ${theme.colors.secondaryFont};
`
const DescriptionWrapper = styled.div`
    margin-bottom: 204px;

    @media screen and (max-width: 1070px) {
        margin: 41px 0 61px;
    }
`
const LeftWrapper = styled.div `
    display: flex;
    flex-direction: column;
`
const PhotoLeftWrapper = styled.div`
    width: 532px;
    height: 498px;

    @media ${theme.media.mobile} {
        width: 305px;
        height: 286px;
    }
`
const RightWrapper = styled.div `
    display: flex;
    flex-direction: column;
`

const PhotoRightWrapper = styled.div`
    width: 440px;
    height: 411px;

    @media ${theme.media.mobile} {
        width: 276px;
        height: 258px;
    }
`