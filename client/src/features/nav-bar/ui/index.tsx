import { Style, ItemStyle, LogoStyle } from '../style';
import { IconTitleLogo } from '../../../shared/ui/logo/icon-title';
import {ReactNode} from "react";
type NavLinkItem = {
    id: string;
    to: string;
    label: string | ReactNode;
};
type NavBarProps = {
    items: NavLinkItem[];
};

export const NavBar = (props: NavBarProps) => {
    const { items } = props;
    return (
        <Style>
            <LogoStyle to={'/'}>
                <IconTitleLogo title={'CONCEPT'} icon={''} />
            </LogoStyle>
            {items.map((item) => (
                <ItemStyle key={item.id} to={item.to}>{item.label}</ItemStyle>
            ))}
        </Style>
    );
};
