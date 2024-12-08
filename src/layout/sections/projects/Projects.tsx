import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Project } from './project/Project'
import mentalImg from '../../../assets/img/project_1.webp'
import fashionImg from '../../../assets/img/project_2.webp'
import barbequeImg from '../../../assets/img/project_3.webp'
import { theme } from '../../../styles/Theme'
import { Container } from '../../../components/Container'
import { font } from '../../../styles/Common'


export const Projects = () => {
  return (
    <StyledProjects id={'projects'}>
        <Container>
            <ProjectTitle>MY <div>PROJECTS</div></ProjectTitle>
            <FlexWrapper direction='column' rowgap='78px'>
                <Project variant='first' background={mentalImg}
                topic='Mental Health' case='A Case Study_' title='Find Peace in&nbsp;Meditation' definition='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'></Project>
                <Project  variant='second' background={fashionImg} topic='Fashion Show' case='A Case Study_' title='Enjoy Fashion Shows From Home' definition='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'></Project>
                <Project  variant='third' background={barbequeImg} case='Branding_' topic='Barbeque' title='Chicken Barbeque Never Goes Wrong' definition='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'></Project>
            </FlexWrapper>
        </Container>
    </StyledProjects>
  )
}

const StyledProjects = styled.section `
    padding: 170px 0;

`


const ProjectTitle = styled.h2 `
    line-height: 93%;
    margin-bottom: 70px;
    ${font({weight: 800, Fmin: 65, Fmax: 120})};

`