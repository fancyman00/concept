import WriteUs from '../../widgets/write-us';
import {ContactsBanner, WriteUsBanner} from './style.ts';

export const Contacts = () => {
    return (
        <>
            <ContactsBanner>
                г. Воронеж, Ленинский пр-кт, 10а
            </ContactsBanner>
            <WriteUsBanner>
                <WriteUs />
            </WriteUsBanner>
        </>
    );
};
