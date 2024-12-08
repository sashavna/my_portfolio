import React, { useState } from 'react'
import { Menu } from '../menu/Menu'
import {S} from '../HeaderMenu_Styles'
import { Social } from '../../../../components/social/Social'

export const MobileHeaderMenu: React.FC = () => {
    return (
        <S.MobileMenu>
            <S.MobileMenuPopup isOpen={false}>
                <Menu/>
                <Social/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    )
}



