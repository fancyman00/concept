import {HomePage} from './style.ts';
import HomeBanner from "../../widgets/home-banner";
import { isMobile } from 'react-device-detect';

export const Home = () => {
    return (
        <HomePage>
          <HomeBanner isMobile={isMobile}/>
        </HomePage>
    );
};
