import { ItemStyle, LogoStyle, IconItemStyle, StyleMobile, TopBar } from "../style";
import { IconTitleLogo } from '../../../shared/ui/logo/icon-title';
import { BasketIcon } from '../../../entities/basket/ui/basket-icon';
import Icon from '../../../shared/assets/icons/shopping-cart-blue.svg';
import { NavBarProps } from '../model/types.ts';
import { useState } from 'react';
import { ActionIcon } from "../../../shared/ui/icon";
import MenuIcon from '../../../shared/assets/icons/menu.svg'
import CloseIcon from '../../../shared/assets/icons/close.svg'

export const NavBarMobile = (props: NavBarProps) => {
    const { textItems, iconItems } = props;
    const [isOpen, setIsOpen] = useState(false);
    return (
        <StyleMobile>
            <TopBar>
                <LogoStyle to={'/'}>
                    <IconTitleLogo title={'CONCEPT'} icon={''} />
                </LogoStyle>
                {!isOpen && <ActionIcon icon={MenuIcon} size={28} onClick={() => setIsOpen(true)} />}
                {isOpen && <ActionIcon icon={CloseIcon} size={28} onClick={() => setIsOpen(false)} />}
            </TopBar>
            {isOpen &&
                textItems &&
                textItems.map((item) => (
                    <ItemStyle $isMobile={true} key={item.id} to={item.to}>
                        {item.label}
                    </ItemStyle>
                ))}
            {isOpen &&
                iconItems &&
                iconItems.map((item) => (
                    <IconItemStyle to={item.to} key={item.id}>
                        <img src={item.icon} alt={''} />
                        {item.label}
                    </IconItemStyle>
                ))}
            {isOpen && <BasketIcon to={'/my-cart'} icon={Icon} title={'Корзина'} />}{' '}
        </StyleMobile>
    );
};
