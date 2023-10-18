import Layout from "../../shared/ui/layout";
import Order from "../../widgets/order";
import {isMobile} from "react-device-detect";

export const MyCart = () => {
  return(
    <Layout type={isMobile ? 'mobile' : 'page'}>
      <Order/>
    </Layout>
    )
}