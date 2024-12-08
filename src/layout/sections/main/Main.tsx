import React from 'react'
import { FlexWrapper } from '../../../components/FlexWrapper'
import photoPng from '../../../assets/img/ui_ux.webp'
import { Container } from '../../../components/Container'
import { Photo } from '../../../components/photo/Photo'
import {S} from './Main_Styles'

export const Main: React.FC = () => {
  return (
    <S.Main>
        <Container>
            <S.MainTitle>ui/ux designer based in uk</S.MainTitle>
            <FlexWrapper align='center' justify='space-around' wrap='wrap'>
                <S.NameImgWrapper>
                    <S.Name>HELLO <span>I’M ABBY</span></S.Name>
                    <S.PhotoTitle src={photoPng}/>
                </S.NameImgWrapper>
                <S.PhotoWrapper>
                    <Photo height='570' width='570' opacity='0.9' transform='rotate(8deg)'/>
                </S.PhotoWrapper>
            </FlexWrapper>
        </Container>
    </S.Main>
  )
}

