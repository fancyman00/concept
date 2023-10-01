import { Style } from '../style';
import { ReactElement } from 'react';
import { basketItem } from "../../../entities/basket/model/types";

type CardListProps = {
    items: basketItem[];
    renderItem: (item: any) => ReactElement;
};
export const OrderList = (props: CardListProps) => {
    const { items, renderItem } = props;
    return <Style>{items.map((item) => renderItem(item))}</Style>;
};
