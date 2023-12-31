import { Style } from '../style';
import { ReactElement } from 'react';

type CardListProps = {
    items: any[];
    renderItem: (item: any) => ReactElement;
};
export const CardList = (props: CardListProps) => {
    const { items, renderItem } = props;
    return <Style>{items.map((item) => renderItem(item))}</Style>;
};
