import { Style, ItemStyle, LogoStyle, IconItemStyle } from "../style";
import { IconTitleLogo } from '../../../shared/ui/logo/icon-title';
import {ReactNode} from "react";
type NavLinkItem = {
    id: string;
    to: string;
    label: string | ReactNode;
    icon?: string
};
type NavBarProps = {
    textItems?: NavLinkItem[];
    iconItems?: NavLinkItem[];
};

export const NavBar = (props: NavBarProps) => {
    const { textItems, iconItems } = props;
    return (
        <Style>
            <LogoStyle to={'/'}>
                <IconTitleLogo title={'CONCEPT'} icon={''} />
            </LogoStyle>
            {textItems && textItems.map((item) => (
                <ItemStyle key={item.id} to={item.to}>{item.label}</ItemStyle>
            ))}
            {iconItems && iconItems.map((item) => (
              <IconItemStyle href={item.to} key={item.id}><img src={item.icon} alt={''}/>{item.label}</IconItemStyle>
            ))}
        </Style>
    );
};
