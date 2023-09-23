import {Card, Title, Image, ModelName, Description, Link} from "./style.ts";
import Icon from '../../../../shared/assets/products/PL-4000G_Front_View.jpg'
export const ProductCard = () => {
    return(
        <Card>
            <Title>
                Транспондер 4.8T
            </Title>
            <Image src={Icon}/>
            <ModelName>
                PL-4000G
            </ModelName>
            <Description>
                Транспондер для передачи 100GbE и 400GbE с ёмкостью 12 x 400G для соединений ЦОДов.
            </Description>
            <Link to={'/PL-4000G'}>
                Подробнее
            </Link>
        </Card>
    )
}