import { useForm } from 'react-hook-form';
import { Title, WriteUsForm, Row, Input, TextArea, Submit } from '../style';

export const WriteUs = () => {
    const { register, handleSubmit } = useForm();
    return (
        <WriteUsForm onSubmit={handleSubmit((d: any) => alert(d))}>
            <Title>НАПИШИТЕ НАМ</Title>
            <Row>
                <Input placeholder={'Имя'} {...register('Name')} />
                <Input placeholder={'Телефон'} {...register('Number')} />
            </Row>
            <Row>
                <Input placeholder={'Почта'} {...register('Email')} />
            </Row>
            <Row>
                <TextArea placeholder={'Сообщение'} {...register('request')} />
            </Row>
            <Row>
                <Submit type="submit">Отправить</Submit>
            </Row>
        </WriteUsForm>
    );
};
