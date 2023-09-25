import Typography from '../typography';
import { Style } from './style.ts';

export type DescriptionProps = {
    title: string;
    text: string;
};
export const Description = (props: DescriptionProps) => {
    const { title, text } = props;
    return (
        <Style>
            <Typography size={'l'} color={'#00AAFF'} text={title} />
            <Typography size={'m'} text={text} />
        </Style>
    );
};
