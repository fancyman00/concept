import { Content, Model, Image, Title, Actions, Style } from "../style";
import Typography from '../../../shared/ui/typography';
import Button from '../../../shared/ui/button';
import { Description } from '../../../shared/ui/description';
import { AdvantagesAndDisAdvantages } from '../../../shared/ui/a-and-d';
import {useActions} from "../../../shared/model";
import {basketSlice} from "../../../entities/basket/model/slice.ts";
import { useGetArticleQuery } from "../../../entities/product/api";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ProductType } from "../../../entities/product/model/types.ts";
type StrapiComponent = {
    id: number,
    __component: string,
}
type AdvComponent = {
    Title: string,
    description: DescriptionComponent[]
}
type DescriptionComponent = {
    Title: string,
    Text: string
}
type ArticleApiType = {
    SmallDescription: string,
    product: {data: {attributes: ProductType}},
    Components: [StrapiComponent & AdvComponent & DescriptionComponent ]

};
export const ProductArticle = () => {
    const id = useLoaderData()
    const {addProduct} = useActions(basketSlice.actions)
    const [articleItem, setArticleItem] = useState<ArticleApiType>()
    const resultApi = useGetArticleQuery(id)
    useEffect(()=>{
        console.log(resultApi.data)
        resultApi.isSuccess && setArticleItem(resultApi.data.data[0].attributes)
    }, [resultApi])
    const addHandle = () => {
        articleItem && addProduct(articleItem.product.data.attributes.ModelName)
    }
    if(articleItem) return (
        <Style>
            <Title>
                <Typography size={'xl'} text={articleItem.product.data.attributes.Title} />
            </Title>
            <Content>
                <Model>
                    <Typography size={'l'} weight={600} color={'white'} text={articleItem.product.data.attributes.ModelName} />
                </Model>

                <Image>
                    <img src={articleItem.product.data.attributes.ImageUrl} alt={''} />
                    <Typography size={'m'} color={'#00AAFF'} text={articleItem.SmallDescription} />
                </Image>
                {articleItem.Components.map((item) => {
                    if(item.__component == 'ad-and-disad.advantages-and-disadvantages')
                        return <AdvantagesAndDisAdvantages title={item.Title} description={item.description} />
                    if(item.__component == 'description.description')
                        return <Description Title={item.Title} Text={item.Text} />
                })}
                <Actions>
                    <Button
                        onClick={addHandle}
                        type={2}
                        size={'m'}
                        text={'Добавить в корзину'}
                    />
                </Actions>
            </Content>
        </Style>
    );
};
