import { Banner } from '../../../shared/ui/banner';
import Typography from '../../../shared/ui/typography';
import {FilterItem, ProductFilter} from '../../../features/product-filter/ui';
import { CardList } from '../../../features/card-list/ui';
import { ProductType } from '../../../entities/product/model/types.ts';
import { ProductCard } from '../../../entities/product/ui/card';
import Icon from '../../../shared/assets/products/PL-4000G_Front_View.jpg'
import {useState} from "react";
const MockItemsProducts: ProductType[] = [
    {
        name: 'Транспондер 4.8T',
        icon: Icon,
        modelName: 'PL-4000G',
        description: 'Транспондер для передачи 100GbE и 400GbE с ёмкостью 12 x 400G для соединений ЦОДов.',
    },
    {
        name: 'Транспондер 4.8T',
        icon: Icon,
        modelName: 'PL-4000G',
        description: 'Транспондер для передачи 100GbE и 400GbE с ёмкостью 12 x 400G для соединений ЦОДов.',
    },
    {
        name: 'Транспондер 4.8T',
        icon: Icon,
        modelName: 'PL-4000G',
        description: 'Транспондер для передачи 100GbE и 400GbE с ёмкостью 12 x 400G для соединений ЦОДов.',
    },
    {
        name: 'Транспондер 4.8T',
        icon: Icon,
        modelName: 'PL-4000G',
        description: 'Транспондер для передачи 100GbE и 400GbE с ёмкостью 12 x 400G для соединений ЦОДов.',
    },
    {
        name: 'Транспондер 4.8T',
        icon: Icon,
        modelName: 'PL-4000G',
        description: 'Транспондер для передачи 100GbE и 400GbE с ёмкостью 12 x 400G для соединений ЦОДов.',
    },
    {
        name: 'Транспондер 4.8T',
        icon: Icon,
        modelName: 'PL-4000G',
        description: 'Транспондер для передачи 100GbE и 400GbE с ёмкостью 12 x 400G для соединений ЦОДов.',
    },
    {
        name: 'Транспондер 4.8T',
        icon: Icon,
        modelName: 'PL-4000G',
        description: 'Транспондер для передачи 100GbE и 400GbE с ёмкостью 12 x 400G для соединений ЦОДов.',
    },
];
const MockItemsFilter: FilterItem[]  = [
    {
        name: 'Транспондер до 100G',
    },
    {
        name: 'Транспондер от 1G до 40G',
    },
    {
        name: '10G Транспондер',
    },
    {
        name: '20G Мукспондер',
    },
    {
        name: 'Шифрование Layer-1',
    },
    {
        name: '400G Шифрование',
    },
];

export const ProductList = () => {
    const [filter, setFilter] = useState<string>('')
    return (
        <>
            <Banner color={'#00AAFF'}>
                <Typography size={'xl'} text={'WDM и OTN оборудование Concept'} color={'white'} />
            </Banner>
            <Banner color={'white'} padding={24}>
                <ProductFilter items={MockItemsFilter} filter={filter} setFilter={setFilter}/>
            </Banner>
            <CardList items={MockItemsProducts} renderItem={(item) => <ProductCard item={item} />} />
        </>
    );
};
