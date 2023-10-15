import { ItemStyle, LogoStyle, IconItemStyle, StyleDesktop } from "../style";
import { IconTitleLogo } from '../../../shared/ui/logo/icon-title';
import { BasketIcon } from "../../../entities/basket/ui/basket-icon";
import Icon from "../../../shared/assets/icons/shopping-cart-blue.svg";
import { NavBarProps } from "../model/types.ts";

export const NavBarDesktop = (props: NavBarProps) => {
  const { textItems, iconItems } = props;
  return (
    <StyleDesktop>
      <LogoStyle to={'/'}>
        <IconTitleLogo title={'CONCEPT'} icon={''} />
      </LogoStyle>
      {textItems && textItems.map((item) => (
        <ItemStyle $isMobile={false} key={item.id} to={item.to}>{item.label}</ItemStyle>
      ))}
      {iconItems && iconItems.map((item) => (
        <IconItemStyle to={item.to} key={item.id}><img src={item.icon} alt={''}/>{item.label}</IconItemStyle>
      ))}
      <BasketIcon to={'/my-cart'} icon={Icon} title={'Корзина'} />
    </StyleDesktop>
  );
};
