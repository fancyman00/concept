import { ButtonL } from './style/large';
import styled from 'styled-components';
import { ButtonM } from "./style/medium";
enum ButtonType {
    First = 1,
    Second = 2,
}
type ButtonProps = {
    size: 'l' | 'm' | 's';
    text: string;
    icon?: string;
    type?: ButtonType;
    onClick?: () => void;
    expand?: boolean;
};
const Style = styled.div<{ $type?: number, $expand?: boolean }>`
    color: ${(props) => (props.$type == 1 ? '#00AAFF' : props.$type == 2 ? 'white' : '#0000008a')};
    background: ${(props) => (props.$type == 1 ? 'white' : props.$type == 2 ? '#00AAFF' : 'white')};
    width: ${(props) => props.$expand ? '100vw' : 'fit-content'};
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.5s;
    &:hover {
        opacity: 0.9;
    }
`;
const Button = (props: ButtonProps) => {
    const { size, text, icon, type,expand, onClick } = props;
    switch (size) {
        case 'l':
            return (
                <Style $type={type} onClick={onClick} $expand={expand}>
                    <ButtonL>
                        {icon && <img src={icon} alt={''} />}
                        {text}
                    </ButtonL>
                </Style>
            );
        case 'm':
            return (
                <Style $type={type} onClick={onClick} $expand={expand}>
                    <ButtonM>
                        {icon && <img src={icon} alt={''} />}
                        {text}
                    </ButtonM>
                </Style>
            );
    }
};
export default Button;
