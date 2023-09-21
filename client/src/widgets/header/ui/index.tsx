import { HeaderStyle } from '../style';
import NavBar from '../../../features/nav-bar';
import Layout from '../../../shared/ui/layout';
import shortid from 'shortid';
export const Header = () => {
    return (
        <HeaderStyle>
            <Layout type={'page'}>
                <NavBar items={MockItems} />
            </Layout>
        </HeaderStyle>
    );
};
// TODO: перенести в const
const MockItems = [
    { to: '/products', id: shortid.generate(), label: 'Оборудование' },
    { to: '/solutions', id: shortid.generate(), label: 'Решения' },
    { to: '/service', id: shortid.generate(), label: 'Услуги' },
    { to: '/about', id: shortid.generate(), label: 'О компании' },
    { to: '/contact-us', id: shortid.generate(), label: 'Контакты' },
];
