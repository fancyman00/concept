import {useEffect, useState} from "react";
import {useGetAllProductsQuery, useGetProductTypesQuery} from "../../../../entities/product/api";
import {StrapiData} from "../../../../shared/model/types/stapi.ts";

export const useProductListData = (filter: string | undefined) => {
    const [filterItems, setFilterItems] = useState([]);
    const [productItems, setProductItems] = useState([]);
    const filterApi = useGetProductTypesQuery({});
    const productApi = useGetAllProductsQuery(filter);
    useEffect(() => {
        filterApi.isSuccess && setFilterItems(filterApi.data.data.map((item: StrapiData)=> item.attributes));
    }, [filterApi]);
    useEffect(() => {
        productApi.isSuccess && setProductItems(productApi.data.data.map((item: StrapiData)=> {
            return {...item.attributes, id: item.id}
        }));
    }, [productApi]);
    return {filterItems, productItems}
}