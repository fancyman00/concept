import Layout from '../../../shared/ui/layout';
import { Item, Style } from '../style';
import { useGetProductTypesQuery } from "../../../entities/product/api";

type FilterProps = {
    filter: string,
    setFilter: (filter: string) => void;
    items: FilterItem[]
};
export type FilterItem = {
    name: string
}
export const ProductFilter = (props: FilterProps) => {
    const { filter, setFilter, items } = props;
    const item2s = useGetProductTypesQuery({})
    console.log(item2s)
    return (
        <Layout type={'page'}>
            <Style>
                {items.map((item) => (
                    <Item isFilter={filter == item.name} onClick={() => setFilter(item.name)}>{item.name}</Item>
                ))}
            </Style>
        </Layout>
    );
};
