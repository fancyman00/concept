import { ContactsBanner, WriteUsBanner, Style } from './style.ts';
import WriteUs from '../../features/write-us';
import {ContactsInfo, ContactsInfoItem} from '../../features/contacts-info/ui';
import MailIcon from '../../shared/assets/icons/mail.svg';
import TelephoneIcon from '../../shared/assets/icons/telephone.svg';
import LocationIcon from '../../shared/assets/icons/location.svg';
import Typography from "../../shared/ui/typography";
const MockItems: ContactsInfoItem[] = [
    {
        icon: MailIcon,
        text: [<Typography size={'m'} color={"black"} text={"mktvrn@mail.ru"}/>]
    },
    {
        icon: TelephoneIcon,
        text: [<Typography size={'m'} color={"black"} text={"+7 (920) 227-82-48"}/>, <Typography size={'m'} weight={700} color={"black"} text={"пн.-пт. 9.00 - 20.00"}/>]
    },
    {
        icon: LocationIcon,
        text: [<Typography size={'m'} color={"black"} text={"Россия, г. Воронеж, Ленинский пр-кт, 10а \n 394029"}/>]
    }
];
export const Contacts = () => {
    return (
        <Style>
            <ContactsBanner>
                <ContactsInfo items={MockItems} />
            </ContactsBanner>
            <WriteUsBanner>
                <WriteUs />
            </WriteUsBanner>
        </Style>
    );
};
