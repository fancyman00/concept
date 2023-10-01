import Typography from "../../../shared/ui/typography";
import { Input } from "../../../shared/ui/input";
import { Style, Submit } from "../style";
import { useForm } from "react-hook-form";
type OrderFormProps = {
  onSubmit: (d: any) => void;
}
export const OrderForm = (props: OrderFormProps) => {
  const {onSubmit} = props
  const { register, handleSubmit } = useForm();

  return(
    <Style onSubmit={handleSubmit(onSubmit)}>
      <Typography size={'l'} weight={600} text={'Оформление'}/>
      <Input placeholder={'Имя'} {...register('mail')} />
      <Input placeholder={'Фамилия'} {...register('mail')} />
      <Input placeholder={'Электронная почта'} {...register('mail')} />
      <Input placeholder={'Телефон'} {...register('phone')} />
      <Submit type="submit">Оформить</Submit>
    </Style>
  )
}