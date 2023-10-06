import appApi from '../../../shared/api';

const productApi = appApi.injectEndpoints({
    endpoints: (build) => ({
        getProduct: build.query({
            query: (id) => ({ url: `product/${id}` }),
        }),
        getAllProducts: build.query({
            query: () => ({ url: `product/` }),
        }),
        getArticle: build.query({
            query: (id) => ({ url: `article/${id}` }),
        }),
    }),
});

export const { useGetProductQuery, useGetAllProductsQuery, useGetArticleQuery } = productApi;
