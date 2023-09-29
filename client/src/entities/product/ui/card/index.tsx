import { Card, Title, Image, ModelName, Description, Main, Add } from "./style.ts";
import {ProductType} from "../../model/types.ts";
export const ProductCard = (props: {item: ProductType}) => {
    const {name, icon, modelName, description} = props.item
    return(
        <Card>
            <Main to={'/products/'+modelName}>
              <Title>
                {name}
              </Title>
              <Image src={icon}/>
              <ModelName>
                {modelName}
              </ModelName>
              <Description>
                {description}
              </Description>
            </Main>
            <Add>
                В корзину
            </Add>
        </Card>
    )
}