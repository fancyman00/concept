import { HeaderStyle } from '../style';
import NavBar from '../../../features/nav-bar';
import Layout from '../../../shared/ui/layout';
import shortid from 'shortid';
import messageIcon from '../../../shared/assets/icons/message.svg'
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
    { to: '/write-us', id: shortid.generate(), label: <img src={messageIcon} alt={''}/> },
];  
