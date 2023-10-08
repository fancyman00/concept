export type ProductType = {
    Title: string,
    ImageUrl: string,
    ModelName: string,
    Description: string,
    id?: number
}
export type StrapiComponent = {
    id: number,
    __component: string,
}
export type AdvComponent = {
    Title: string,
    description: DescriptionComponent[]
}
export type DescriptionComponent = {
    Title: string,
    Text: string
}
export type ArticleApiType = {
    SmallDescription: string,
    product: {data: {attributes: ProductType}},
    Components: [StrapiComponent & AdvComponent & DescriptionComponent ]
};