import { Outlet } from 'react-router-dom';
import Header from '../../../widgets/header';
import { Main } from './style.ts';
import { HeaderLinks } from "../../../shared/const/routes.ts";

export const BaseLayout = () => (
    <Main>
        <Header links={HeaderLinks}/>
        <Outlet />
    </Main>
);
