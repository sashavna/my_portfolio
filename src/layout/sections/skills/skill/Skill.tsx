import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../../components/FlexWrapper'
import { theme } from '../../../../styles/Theme'
import { font } from '../../../../styles/Common'

type SkillPropsType = {
    title: string
    description: string
    number: string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
        <SkillItem>
            <SkillNumber>{props.number}</SkillNumber>
            <FlexWrapper direction='column'>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
            </FlexWrapper>
        </SkillItem>
    </StyledSkill>
  )
}

const StyledSkill = styled.div `
    max-width: 440px;
`
const SkillItem = styled.div `
    display: flex;
    align-items: center;
    column-gap: 35px;

    @media ${theme.media.mobile} {
        column-gap: 20px;
    }

`
const SkillNumber = styled.span`
    ${font({weight: 100, Fmin: 45, Fmax: 70})};
    color: ${theme.colors.secondaryFont};
`

const SkillTitle = styled.h3 `
    ${font({weight: 300, Fmin: 25, Fmax: 30})};
    color: ${theme.colors.secondaryFont};
    margin-bottom: 5px;
`
const SkillText = styled.p `
    ${font({weight: 200, Fmin: 14, Fmax: 18})};
    line-height: 123%;
    color: ${theme.colors.secondaryFont};
`
