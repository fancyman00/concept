import { HeaderStyle } from '../style';
import NavBar from '../../../features/nav-bar';
import Layout from '../../../shared/ui/layout';
import shortid from 'shortid';
import BasketIcon from '../../../shared/assets/icons/shopping-cart-blue.svg'
export const Header = () => {
    return (
        <HeaderStyle>
            <Layout type={'page'}>
                <NavBar textItems={MockTextItems} iconItems={MockIconItems}/>
            </Layout>
        </HeaderStyle>
    );
};
// TODO: перенести в const
const MockTextItems = [
    { to: '/products', id: shortid.generate(), label: 'Оборудование' },
    { to: '/solutions', id: shortid.generate(), label: 'Решения' },
    { to: '/service', id: shortid.generate(), label: 'Услуги' },
    { to: '/about', id: shortid.generate(), label: 'О компании' },
    { to: '/contact-us', id: shortid.generate(), label: 'Контакты' },
];
const MockIconItems = [
    { to: '/my-cart', id: shortid.generate(), label: 'Корзина', icon: BasketIcon },
];
