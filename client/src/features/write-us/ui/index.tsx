import { useForm } from 'react-hook-form';
import { Title, WriteUsForm, Row, TextArea, Submit } from '../style';
import { Input } from "../../../shared/ui/input";
type WriteUsProps = {
    onSubmit: (d: any) => void;
};
export const WriteUs = (props: WriteUsProps) => {
    const { onSubmit } = props;
    const { register, handleSubmit } = useForm();
    return (
        <WriteUsForm onSubmit={handleSubmit(onSubmit)}>
            <Title>НАПИШИТЕ НАМ</Title>
            <Row>
                <Input placeholder={'Имя'} {...register('name')} />
                <Input placeholder={'Телефон'} {...register('phone')} />
            </Row>
            <Row>
                <Input placeholder={'Почта'} {...register('email')} />
            </Row>
            <Row>
                <TextArea placeholder={'Сообщение'} {...register('message')} />
            </Row>
            <Row>
                <Submit type="submit">Отправить</Submit>
            </Row>
        </WriteUsForm>
    );
};
