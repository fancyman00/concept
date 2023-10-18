import Layout from "../../../shared/ui/layout";
import Typography from "../../../shared/ui/typography";
import Button from "../../../shared/ui/button";
import messageIcon from "../../../shared/assets/icons/message.svg";
import {Actions, Banner, CompanyTitle} from "../style";
import {useNavigate} from "react-router-dom";
import { ConditionalRender } from "../../../shared/ui/conditional-render";
import {isMobile} from "react-device-detect";

export const HomeBanner = () => {
    const navigate = useNavigate()
    return(
        <ConditionalRender condition={isMobile} Second={<Layout type={"page"}/>}>
            <Banner>
                <CompanyTitle>
                    <Typography size={'xl'} text={'ООО КОНЦЕПТ'} color={'#00AAFF'} />
                </CompanyTitle>
                <Typography size={'xl'} text={'ОБОРУДОВАНИЕ И РЕШЕНИЯ\nDWDM И OTN'} color={'white'} />
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
        </ConditionalRender>
    )
}