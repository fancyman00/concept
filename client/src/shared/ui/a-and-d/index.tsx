import Typography from '../typography';
import {Description, Model, Style} from './style.ts';
import { DescriptionProps } from '../description';
type AdAndDisadProps = {
    title: string;
    description: DescriptionProps[];
};
export const AdvantagesAndDisAdvantages = (props: AdAndDisadProps) => {
    const { title, description } = props;
    return (
        <Style>
            <Typography size={'l'} weight={600} color={'#00AAFF'} text={title} />
            <Model>
                {description.map((item)=>{
                    return(
                        <Description>
                            <Typography size={'l'} color={'white'} text={item.title} />
                            <Typography size={'m'} color={'white'} text={item.text} />
                        </Description>
                    )
                })}
            </Model>
        </Style>
    );
};
