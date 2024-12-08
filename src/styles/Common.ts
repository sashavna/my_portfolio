import { theme } from "./Theme"

type FontPropsType = {
    family?: string
    weight?: number
    Fmin?: number
    Fmax?: number
}

export const font = ({family, weight, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || "Epilogue"};
    font-weight: ${weight || 400};
    font-size: calc( (100vw - 375px)/(1440 - 375) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`