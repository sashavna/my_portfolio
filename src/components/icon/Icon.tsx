import React from 'react'
import iconsSprite from '../../assets/img/icons-sprite.svg'

type IconPropsType = {
    iconId: string
    color?: string;
    width?: string
    height?: string
    viewBox?: string
    preserveAspectRatio?: string
}

export const Icon = (props: IconPropsType) => {
  return (
    <svg width={props.width || "50"} height={props.height || "50"} viewBox={props.viewBox|| "0 0 40 40"} fill='none' color={props.color} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio = {props.preserveAspectRatio || 'none'}>
        <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
    </svg>
    );
}
