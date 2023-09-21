import { Outlet } from 'react-router-dom';
import Header from '../../../widgets/header';
import { Main } from './style.ts';

export const BaseLayout = () => (
    <Main>
        <Header />
        <Outlet />
    </Main>
);
