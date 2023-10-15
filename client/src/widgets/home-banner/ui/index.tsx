import Layout from "../../../shared/ui/layout";
import Typography from "../../../shared/ui/typography";
import Button from "../../../shared/ui/button";
import messageIcon from "../../../shared/assets/icons/message.svg";
import {Actions, Banner, CompanyTitle, MobileHomeTypography} from "../style";
import {useNavigate} from "react-router-dom";
type HomeBannerProps = {
    isMobile: boolean
}
export const HomeBanner = (props: HomeBannerProps) => {
    const {isMobile} = props
    const navigate = useNavigate()
    return(
        <Layout type={'page'}>
            <Banner $isMobile={isMobile}>
                <CompanyTitle>
                    <Typography size={'xl'} text={'ООО КОНЦЕПТ'} color={'#00AAFF'} />
                </CompanyTitle>
                {isMobile ? <MobileHomeTypography>ОБОРУДОВАНИЕ И РЕШЕНИЯ<br/>DWDM И OTN</MobileHomeTypography> : <Typography size={'xl'} text={'ОБОРУДОВАНИЕ И РЕШЕНИЯ\nDWDM И OTN'} color={'white'} />}
                <Typography
                    size={'l'}
                    weight={500}
                    text={'Увеличьте эффективность своих оптоволоконных сетей'}
                    color={'white'}
                />
                <Actions>
                    <Button expand={isMobile} onClick={()=>navigate('/contact-us')} type={1} icon={messageIcon} size={'l'} text={'Оставить заявку'}/>
                </Actions>
            </Banner>
        </Layout>
    )
}