import { Actions, Info, Style } from "./style.ts";
import Typography from "../../../../shared/ui/typography";
import { ActionIcon } from "../../../../shared/ui/icon";
import Plus from '../../../../shared/assets/icons/plus.svg'
import Minus from '../../../../shared/assets/icons/minus.svg'
import Delete from '../../../../shared/assets/icons/close.svg'

type basketItemProps = {
  name: string;
  count: number;
  add: () => void;
  del: () => void;
  remove: () => void;
}
export const BasketItem = (props: basketItemProps) => {
  const {add, del, remove, name, count} = props
  return (
      <Style>
          <Info>
              <Typography size={'m'} text={'Модель:'} />
              <Typography size={'m'} color={'#00aaff'} text={name} />
              <ActionIcon size={25} icon={Delete} onClick={del} />
          </Info>
          <Actions>
              <ActionIcon size={16} icon={Plus} background={'#00aaff'} rounded={true} onClick={add} />
              {count}
              <ActionIcon size={16} icon={Minus} background={'#00aaff'} rounded={true} onClick={remove} />
          </Actions>
      </Style>
  );
}