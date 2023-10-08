import { Banner } from '../../../shared/ui/banner';
import Typography from '../../../shared/ui/typography';
import { Filter } from '../../../features/product-filter/ui';
import { CardList } from '../../../features/card-list/ui';
import { ProductCard } from '../../../entities/product/ui/card';
import { useState } from 'react';
import Layout from '../../../shared/ui/layout';
import { ProductFilterItem } from '../../../entities/product/ui/filter-item';
import {useProductListData} from "../model/hooks/useProductListData.tsx";


export const ProductList = () => {
    const [filter, setFilter] = useState<string | undefined>();
    const {filterItems, productItems} = useProductListData(filter)
    return (
        <>
            <Banner color={'#00AAFF'}>
                <Typography size={'xl'} text={'WDM и OTN оборудование Concept'} color={'white'} />
            </Banner>
            <Banner color={'white'} padding={24}>
                <Filter
                    items={[...filterItems, {Name: undefined, Description: 'Все'}]}
                    renderItem={(item) => (
                        <ProductFilterItem
                            $filter={filter == item.Name}
                            onClick={() => setFilter(item.Name)}
                        >
                            {item.Description}
                        </ProductFilterItem>
                    )}
                />
            </Banner>
            <Layout type={'page'}>
                <CardList items={productItems} renderItem={(item) => <ProductCard item={item} />} />
            </Layout>
        </>
    );
};
