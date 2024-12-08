import styled from 'styled-components'

type FlexWrapperPropsType = {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
    columngap?: string;
    rowgap?: string;
    width?: string;
    basis?: string;
}

export const FlexWrapper = styled.div <FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || undefined};
    justify-content: ${props => props.justify || undefined};
    align-items: ${props => props.align || undefined};
    flex-wrap: ${props => props.wrap || undefined};
    column-gap: ${props => props.columngap || undefined};
    row-gap: ${props => props.rowgap || undefined};
    width: ${props => props.width || "auto"};
    height: 100%;
    flex-basis: ${props => props.basis || undefined};
`