import { ReactNode } from 'react';
import { ModalStyle } from '../style';

type ModalProps = {
    isOpen: boolean;
    children: ReactNode;
};

export const Modal = (props: ModalProps) => {
    const { children, isOpen } = props;
    if (isOpen) return <ModalStyle>{children}</ModalStyle>;
};
