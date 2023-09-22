import { Style, Item} from '../style';
import {ReactNode} from "react";
export type ContactsInfoItem = {
    icon?: string;
    text: ReactNode[];
};
type ContactsInfoProps = {
    items: ContactsInfoItem[];
};

export const ContactsInfo = (props: ContactsInfoProps) => {
    const { items } = props;
    return (
        <Style>
            {items.map((item) => (
                <Item>
                    <img src={item.icon} alt={''}/>
                    {...item.text}
                </Item>
            ))}
        </Style>
    );
};
