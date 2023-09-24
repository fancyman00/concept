import {Card, Title, Image, ModelName, Description, Link} from "./style.ts";
import {ProductType} from "../../model/types.ts";
export const ProductCard = (props: {item: ProductType}) => {
    const {name, icon, modelName, description} = props.item
    return(
        <Card>
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
            <Link to={'/products/'+modelName}>
                Подробнее
            </Link>
        </Card>
    )
}