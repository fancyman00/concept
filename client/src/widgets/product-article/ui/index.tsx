import { Content, Model, Image, Title, Actions, Style } from "../style";
import Icon from '../../../shared/assets/products/PL-4000G_Front_View.jpg';
import { useNavigate } from 'react-router-dom';
import Typography from '../../../shared/ui/typography';
import Button from '../../../shared/ui/button';
import { Description } from '../../../shared/ui/description';
import { AdvantagesAndDisAdvantages } from '../../../shared/ui/a-and-d';

const MockData = {
    title: 'Транспондер 4.8T',
    model: 'PL-4000G',
    icon: Icon,
    smallDescription:
        'Устройство PL-4000G компании PacketLight – это новый транспондер в корпусе 1U для передачи комбинации сервисов 100GbE и 400GbE на скорости 400G на волну в задачах высокоскоростного соединения ЦОДов.',
    advAndDisAdv: [
        {
            title: 'Преимущества',
            description: [
                {
                    title: 'Высокая пропускная способность в маленьком размере',
                    text: 'Передача 100GbE и 400GbE выполняется на 12 длинах волн ёмкостью 400G каждая (12 x 400G) с суммарной пропускной способностью 4.8T в форм-факторе 1U.',
                },
            ],
        },
    ],
    description: [
        {
            title: 'Описание',
            text: 'Транспондер PL-4000G – это модульное экономичное высокоскоростное решение для подключения большого количества сервисов 400GbE и 100GbE или для повышения пропускной способности существующей сети. Устройство имеет 12 съемных оптических модулей 400G для передачи до 4.8T трафика в шасси высотой 1U. PL-4000G может дополнительно комплектоваться оптическим мультиплексором/ демультиплексором, предусилителем EDFA и оптическим переключателем OSW. Гибкая архитектура решения поддерживает развитие и установку новых модулей с возможностью оплаты по мере роста.',
        },
    ],
};
export const ProductArticle = () => {
    const navigate = useNavigate();
    return (
        <Style>
            <Title>
                <Typography size={'xl'} text={MockData.title} />
            </Title>
            <Content>
                <Model>
                    <Typography size={'l'} weight={600} color={'white'} text={MockData.model} />
                </Model>

                <Image>
                    <img src={MockData.icon} alt={''} />
                    <Typography size={'m'} color={'#00AAFF'} text={MockData.smallDescription} />
                </Image>
                {MockData.advAndDisAdv.map((item) => (
                    <AdvantagesAndDisAdvantages title={item.title} description={item.description} />
                ))}
                {MockData.description.map((item) => (
                    <Description title={item.title} text={item.text} />
                ))}
                <Actions>
                    <Button
                        onClick={() => navigate('/contact-us')}
                        type={2}
                        size={'m'}
                        text={'Добавить в корзину'}
                    />
                </Actions>
            </Content>
        </Style>
    );
};
