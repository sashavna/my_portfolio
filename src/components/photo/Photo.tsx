import React from 'react'
import photo from '../../assets/img/photo.webp'
import styled from 'styled-components'
import { theme } from '../../styles/Theme'

type PhotoPropsType = {
    height: string
    width: string
    opacity?: string
    transform?: string
}

export const Photo = (props: PhotoPropsType) => {
  return (
    <StyledPhoto opacity={props.opacity || "1"} src={photo} alt='' width={props.width} height={props.height} transform={props.transform}/>
  )
}

const StyledPhoto = styled.img<PhotoPropsType> `
    opacity: ${props => props.opacity || "1"};
    transform: ${props => props.transform || 'none'};
`

