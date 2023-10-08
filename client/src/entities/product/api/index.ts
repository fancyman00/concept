import appApi from '../../../shared/api';

export const productApi = appApi.injectEndpoints({
    endpoints: (build) => ({
        getProduct: build.query({
            query: (id) => ({ url: `product/${id}` }),
        }),
        getAllProducts: build.query({
            query: (filter: string | undefined) => ({ url: filter ?  `products?populate[0]=product_types&filters[product_types][Name]=${filter}` : `products`}),
        }),
        getArticle: build.query({
            query: (id) => ({ url: `product-articles?populate[0]=product&populate[1]=Components.description&filters[product][id]=${id}` }),
        }),
        getProductTypes: build.query({
            query: () => ({ url: `product-types` }),
        }),
    }),
});

export const { useGetProductQuery,useGetProductTypesQuery, useGetAllProductsQuery, useGetArticleQuery } = productApi;
