import { Card, TitleB, Image, ModelNameB, DescriptionB, Main, Add } from "./style.ts";
import {ProductType} from "../../model/types.ts";
import { useActions } from "../../../../shared/model";
import { basketSlice } from "../../../basket/model/slice.ts";
export const ProductCard = (props: {item: ProductType}) => {
    const {Title, ImageUrl, ModelName, Description} = props.item
    const {addProduct} = useActions(basketSlice.actions)
    const addHandle = () => {
      addProduct(ModelName)
    }
    return(
        <Card>
            <Main to={'/products/'+ModelName}>
              <TitleB>
                {Title}
              </TitleB>
              <Image src={ImageUrl}/>
              <ModelNameB>
                {ModelName}
              </ModelNameB>
              <DescriptionB>
                {Description}
              </DescriptionB>
            </Main>
            <Add onClick={addHandle}>
                В корзину
            </Add>
        </Card>
    )
}