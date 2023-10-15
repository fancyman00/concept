import { HeaderStyle, Style } from "../style";
import NavBar from '../../../features/nav-bar';
import Layout from '../../../shared/ui/layout';
import shortid from 'shortid';
import Icon from '../../../shared/assets/icons/shopping-cart-blue.svg'
import { BasketIcon } from "../../../entities/basket/ui/basket-icon";

export const Header = () => {
    return (
        <HeaderStyle>
            <Layout type={'page'}>
                <Style>
                    <NavBar textItems={MockTextItems}/>
                    <BasketIcon to={'/my-cart'} icon={Icon} title={'Корзина'}/>
                </Style>
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

