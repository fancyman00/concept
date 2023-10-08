import { Banner } from '../../../shared/ui/banner';
import Typography from '../../../shared/ui/typography';
import { Filter } from '../../../features/product-filter/ui';
import { CardList } from '../../../features/card-list/ui';
import { ProductCard } from '../../../entities/product/ui/card';
import { useEffect, useState } from 'react';
import Layout from '../../../shared/ui/layout';
import { useGetProductTypesQuery } from '../../../entities/product/api';
import { ProductFilterItem } from '../../../entities/product/ui/filter-item';
import { useGetAllProductsQuery } from '../../../entities/product/api';

export const ProductList = () => {
    const [filter, setFilter] = useState<string | undefined>();
    const [filterItems, setFilterItems] = useState([]);
    const [productItems, setProductItems] = useState([]);
    const filterApi = useGetProductTypesQuery({});
    const productApi = useGetAllProductsQuery(filter);
    useEffect(() => {
        filterApi.isSuccess && setFilterItems(filterApi.data.data);
    }, [filterApi]);
    useEffect(() => {
        productApi.isSuccess && console.log(productApi.data.data)
        productApi.isSuccess && setProductItems(productApi.data.data);
    }, [productApi]);
    return (
        <>
            <Banner color={'#00AAFF'}>
                <Typography size={'xl'} text={'WDM и OTN оборудование Concept'} color={'white'} />
            </Banner>
            <Banner color={'white'} padding={24}>
                <Filter
                    items={filterItems}
                    renderItem={(item) => (
                        <ProductFilterItem
                            $filter={filter == item.attributes.Name}
                            onClick={() => setFilter(item.attributes.Name)}
                        >
                            {item.attributes.Name}
                        </ProductFilterItem>
                    )}
                />
            </Banner>
            <Layout type={'page'}>
                <CardList items={productItems} renderItem={(item) => <ProductCard id={item.id} item={item.attributes} />} />
            </Layout>
        </>
    );
};
