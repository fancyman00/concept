import WriteUs from '../../features/write-us';
import { ContactsInfo, ContactsInfoItem } from '../../features/contacts-info/ui';
import MailIcon from '../../shared/assets/icons/mail.svg';
import TelephoneIcon from '../../shared/assets/icons/telephone.svg';
import LocationIcon from '../../shared/assets/icons/location.svg';
import Typography from '../../shared/ui/typography';
import { Banner } from '../../shared/ui/banner';
import { Style } from './style.ts';
import axios from 'axios';
const MockItems: ContactsInfoItem[] = [
    {
        icon: MailIcon,
        text: [<Typography size={'m'} color={'black'} text={'mktvrn@mail.ru'} />],
    },
    {
        icon: TelephoneIcon,
        text: [
            <Typography size={'m'} color={'black'} text={'+7 (920) 227-82-48'} />,
            <Typography size={'m'} weight={700} color={'black'} text={'пн.-пт. 9.00 - 20.00'} />,
        ],
    },
    {
        icon: LocationIcon,
        text: [<Typography size={'m'} color={'black'} text={'Россия, г. Воронеж, Ленинский пр-кт, 10а \n 394029'} />],
    },
];
export const Contacts = () => {
    const submitHandle = async (d: any) => {
        axios.put('http://127.0.0.1:8000/send', d, { headers: { 'Content-Type': 'application/json' } });
    };
    return (
        <Style>
            <Banner color={'white'}>
                <ContactsInfo items={MockItems} />
            </Banner>
            <Banner color={'#00AAFF'}>
                <WriteUs onSubmit={submitHandle} />
            </Banner>
        </Style>
    );
};
