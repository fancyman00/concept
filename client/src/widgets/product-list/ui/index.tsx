import { Banner } from '../../../shared/ui/banner';
import Typography from '../../../shared/ui/typography';
import { Filter } from '../../../features/product-filter/ui';
import { CardList } from '../../../features/card-list/ui';
import { ProductCard } from '../../../entities/product/ui/card';
import { useState } from 'react';
import Layout from '../../../shared/ui/layout';
import { ProductFilterItem } from '../../../entities/product/ui/filter-item';
import {useProductListData} from "../model/hooks/useProductListData.tsx";
import {isMobile} from "react-device-detect";
import {Style} from "../style";

const allItemsFilter = {Name: undefined, Description: 'Все'}
const title = 'WDM и OTN оборудование Concept'
export const ProductList = () => {
    const [filter, setFilter] = useState(allItemsFilter);
    const {filterItems, productItems} = useProductListData(filter.Name)
    return (
        <Style>
            <Banner color={'#00AAFF'}>
                <Typography size={'xl'} text={title} color={'white'} />
            </Banner>
            <Banner color={'white'} padding={24}>
                <Filter
                    items={[...filterItems, allItemsFilter]}
                    renderItem={(item) => (
                        <ProductFilterItem
                            $filter={filter.Description == item.Description}
                            onClick={() => setFilter(item)}
                        >
                            {item.Description}
                        </ProductFilterItem>
                    )}
                />
            </Banner>
            <Layout type={isMobile ? 'mobile' : 'page'}>
                <CardList items={productItems} renderItem={(item) => <ProductCard item={item} />} />
            </Layout>
        </Style>
    );
};
