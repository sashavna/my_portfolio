import React from 'react'
import {S} from '../HeaderMenu_Styles'

export const Menu: React.FC = () => {
  return (
    <ul>
            <S.ListItem>
                <S.Link href='projects'>Projects
                    <S.Mask>
                        <span>Projects</span>
                    </S.Mask>
                    <S.Mask>
                        <span>Projects</span>
                    </S.Mask>
                </S.Link>
            </S.ListItem>
            <S.ListItem>
                <S.Link href='#about'>About
                    <S.Mask>
                        <span>About</span>
                    </S.Mask>
                    <S.Mask>
                        <span>About</span>
                    </S.Mask>
                </S.Link>
            </S.ListItem>
            <S.ListItem>
                <S.Link href=''>Digital Assets
                    <S.Mask>
                        <span>Digital Assets</span>
                    </S.Mask>
                    <S.Mask>
                        <span>Digital Assets</span>
                    </S.Mask>
                </S.Link>
            </S.ListItem>
        </ul>
  )
}


