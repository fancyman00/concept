import { Card, Title, Image, ModelName, Description, Main, Add } from "./style.ts";
import {ProductType} from "../../model/types.ts";
import { useActions } from "../../../../shared/model";
import { basketSlice } from "../../../basket/model/slice.ts";
export const ProductCard = (props: {item: ProductType}) => {
    const {name, icon, modelName, description} = props.item
    const {addProduct} = useActions(basketSlice.actions)
    const addHandle = () => {
      addProduct(modelName)
    }
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
            <Add onClick={addHandle}>
                В корзину
            </Add>
        </Card>
    )
}