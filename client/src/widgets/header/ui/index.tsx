import { DesktopStyle, MobileStyle } from "../style";
import NavBar from '../../../features/nav-bar';
import Layout from '../../../shared/ui/layout';
import { ConditionalRender } from "../../../shared/ui/conditional-render";
import { isMobile } from "react-device-detect";
import { NavLinkItem } from "../../../features/nav-bar/model/types.ts";

type HeaderProps = {
    links: NavLinkItem[];
};

export const Header = (props: HeaderProps) => {
    const {links} = props
    return (
      <ConditionalRender condition={isMobile} First={<MobileStyle/>} Second={<DesktopStyle/>}>
        <Layout type={isMobile ? 'mobile' : 'page'}>
          <NavBar textItems={links}/>
        </Layout>
      </ConditionalRender>
    );
};
