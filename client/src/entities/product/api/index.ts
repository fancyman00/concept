import appApi from '../../../shared/api';

export const productApi = appApi.injectEndpoints({
    endpoints: (build) => ({
        getProduct: build.query({
            query: (id) => ({ url: `product/${id}` }),
        }),
        getAllProducts: build.query({
            query: () => ({ url: `products` }),
        }),
        getArticle: build.query({
            query: (id) => ({ url: `product-articles/${id}` }),
        }),
        getProductTypes: build.query({
            query: () => ({ url: `product-types` }),
        }),
    }),
});

export const { useGetProductQuery,useGetProductTypesQuery, useGetAllProductsQuery, useGetArticleQuery } = productApi;
