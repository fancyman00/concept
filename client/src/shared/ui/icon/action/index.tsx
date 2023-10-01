import { Style } from "./style.ts";

type actionIconProps = {
  icon: string,
  background?: string,
  rounded?: boolean,
  onClick: () => void;
  size?: number;
}
export const ActionIcon = (props: actionIconProps) => {
  const {icon, background, rounded, size, onClick} = props
  return(
    <Style $size={size} $rounded={rounded} $background={background} onClick={onClick}>
      <img src={icon} alt={''}/>
    </Style>
  )
}