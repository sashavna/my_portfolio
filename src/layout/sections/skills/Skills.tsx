import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Skill } from './skill/Skill'
import { theme } from '../../../styles/Theme'

export const Skills = () => {
  return (
    <StyledSkells>
        <FlexWrapper wrap='wrap' justify='space-around' rowgap='60px' columngap='8px'>
            <Skill number='01.' title='React' description='consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'/>
            <Skill number='02.' title='Styled Components' description='consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'/>
            <Skill number='03.' title='Figma' description='consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'/>
            <Skill number='04.' title='HTML' description='consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'/>
            <Skill number='05.' title='CSS' description='consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'/>
            <Skill number='06.' title='Design' description='consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue'/>
        </FlexWrapper>
    </StyledSkells>
  )
}
const StyledSkells = styled.section `
    padding: 100px 52px 140px 52px;

    @media ${theme.media.mobile} {
        padding: 42px 29px;
    }
`

