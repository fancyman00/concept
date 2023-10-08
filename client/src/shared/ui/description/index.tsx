import Typography from '../typography';
import { Style } from './style.ts';

export type DescriptionProps = {
    Title: string;
    Text: string;
};
export const Description = (props: DescriptionProps) => {
    const { Title, Text } = props;
    return (
        <Style>
            <Typography size={'l'} color={'#00AAFF'} text={Title} />
            <Typography size={'m'} text={Text} />
        </Style>
    );
};
