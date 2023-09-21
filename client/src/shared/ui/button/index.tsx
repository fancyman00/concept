import { ButtonL } from './style/large';
import styled from "styled-components";
enum ButtonType {
    First = 1,
    Second = 2,
}
type ButtonProps = {
    size: 'l' | 'm' | 's';
    text: string;
    icon?: string;
    type?: ButtonType;
    onClick?: ()=>void;
};
const Style = styled.div<{$type?: number}>`
  color: ${(props)=> props.$type == 1 ? '#00AAFF' : props.$type == 2 ? 'white' : '#0000008a'};
  background: ${(props)=> props.$type == 1 ? 'white' : props.$type == 2 ? '#00AAFF' : 'white'};
  width: fit-content;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.5s;
  &:hover{
    opacity: 0.9;
  }
`
const Button = (props: ButtonProps) => {
    const { size, text, icon, type, onClick } = props;
    switch (size) {
        case 'l':
            return (
                <Style $type={type} onClick={onClick}>
                    <ButtonL>
                        {icon && <img src={icon} alt={''} />}
                        {text}
                    </ButtonL>
                </Style>
            );
    }
};
export default Button;
