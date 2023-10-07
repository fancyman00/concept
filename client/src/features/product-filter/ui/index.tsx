import Layout from '../../../shared/ui/layout';
import {Style } from '../style';
import { ReactElement } from 'react';

type FilterProps = {
    items: any[],
    renderItem: (item: any) => ReactElement;
};
export const Filter = (props: FilterProps) => {
    const { items, renderItem } = props;

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
