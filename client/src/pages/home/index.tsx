import {Actions,Banner, CompanyTitle, HomePage} from './style.ts';
import Typography from '../../shared/ui/typography';
import Layout from '../../shared/ui/layout';
import Button from "../../shared/ui/button";
import messageIcon from '../../shared/assets/icons/message.svg'
import {useNavigate} from "react-router-dom";
export const Home = () => {
    const navigate = useNavigate()
    return (
        <HomePage>
            <Layout type={'page'}>
                <Banner>
                    <CompanyTitle>
                        <Typography size={'xl'} text={'ООО КОНЦЕПТ'} color={'#00AAFF'} />
                    </CompanyTitle>
                    <Typography size={'xl'} text={'ОБОРУДОВАНИЕ И РЕШЕНИЯ DWDM И OTN'} color={'white'} />
                    <Typography
                        size={'l'}
                        text={'Увеличьте эффективность своих оптоволоконных сетей'}
                        color={'white'}
                    />
                    <Actions>
                        <Button onClick={()=>navigate('/write-us')} type={1} icon={messageIcon} size={'l'} text={'Оставить заявку'}/>
                    </Actions>
                </Banner>
            </Layout>
        </HomePage>
    );
};
