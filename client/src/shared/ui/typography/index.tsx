import { TypographyL } from "./large"
import { TypographyXL } from "./xlarge";
import { TypographyM } from "./medium";
import { TypographyS } from "./small";

type TypographyProps = {
    size: 'xl' | 'l' | 'm' | 's'
    text: string
    color?: string
    weight?: string | number
}

const Typography = (props: TypographyProps) => {
    const {size, text, color, weight} = props
    switch (size) {
        case "xl": return(
            <TypographyXL $color={color}>
                {text}
            </TypographyXL>
        )
        case "l": return(
            <TypographyL $color={color} $weight={weight}>
                {text}
            </TypographyL>
        )
        case "m": return(
            <TypographyM $color={color} $weight={weight}>
                {text}
            </TypographyM>
        )
        case "s": return(
            <TypographyS $color={color} $weight={weight}>
                {text}
            </TypographyS>
        )
    }
}
export default Typography