import Layout from '../../../shared/ui/layout';
import { Style } from '../style';
import {ReactElement} from "react";

type CardListProps = {
    items: any[],
    renderItem: (item: any) => ReactElement,
}
export const CardList = (props: CardListProps) => {
    const {items, renderItem} = props
    return (
        <Layout type={'page'}>
            <Style>
                {items.map((item) => (
                    renderItem(item)
                ))}
            </Style>
        </Layout>
    );
};
