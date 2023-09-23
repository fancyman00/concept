import Typography from '../../shared/ui/typography';
import { Banner } from '../../shared/ui/banner';
import Layout from '../../shared/ui/layout';
import { CardList, Item, Style, Style1 } from './style.ts';
import { ProductCard } from '../../entities/product/ui/card';

export const Products = () => {
    return (
        <Style1>
            <Banner color={'#00AAFF'}>
                <Typography size={'xl'} text={'WDM и OTN оборудование Concept'} color={'white'} />
            </Banner>
            <Banner color={'white'} padding={24}>
                <Layout type={'page'}>
                    <Style>
                        <Item>Транспондер до 100G</Item>
                        <Item>Транспондер от 1G до 40G</Item>
                        <Item>10G Транспондер</Item>
                        <Item>20G Мукспондер</Item>
                        <Item>Шифрование Layer-1</Item>
                        <Item>400G Шифрование</Item>
                        <Item>400G Шифрование</Item>
                    </Style>
                </Layout>
            </Banner>
            <Layout type={'page'}>
                <CardList>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </CardList>
            </Layout>
        </Style1>
    );
};
// TODO: ТУТ вопрос, как организовать филтрацию по типу Продукта, переход на другой роут или внутри страницы,
//  а также это все надо вынести в отдельный виджет, но тогда виджет будет содрежать всю страницу.
//  Но скорее всего сделаю через отдельные роуты, которые будут динамическими
