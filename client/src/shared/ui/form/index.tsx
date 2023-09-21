import { ReactNode } from 'react';
import { DefaultForm } from './default';

type FormProps = {
    children: ReactNode;
};

const Form = (props: FormProps) => {
    const { children } = props;
    return <DefaultForm>{children}</DefaultForm>;
};
export default Form;
