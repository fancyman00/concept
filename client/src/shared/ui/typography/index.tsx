import { TypographyL } from "./large"
import {TypographyMobileXL, TypographyXL} from "./xlarge";
import { TypographyM } from "./medium";
import { TypographyS } from "./small";
import {TypographyXXL} from "./xxlarge";
import {ConditionalRender} from "../conditional-render";
import {isMobile} from "react-device-detect";

type TypographyProps = {
    size: 'xxl' | 'xl' | 'l' | 'm' | 's'
    text: string
    color?: string
    weight?: string | number
}

const Typography = (props: TypographyProps) => {
    const {size, text, color, weight} = props
    switch (size) {
        case "xxl": return(
            <ConditionalRender condition={isMobile ?? false} First={<TypographyXXL/>} Second={<TypographyXXL/>} commonProps={{$color: color, $weight: weight}}>
                {text}
            </ConditionalRender>
        )
        case "xl": return(
            <ConditionalRender condition={isMobile ?? false} First={<TypographyMobileXL/>} Second={<TypographyXL/>} commonProps={{$color: color, $weight: weight}}>
                {text}
            </ConditionalRender>
        )
        case "l": return(
            <ConditionalRender condition={isMobile ?? false} First={<TypographyL/>} Second={<TypographyL/>} commonProps={{$color: color, $weight: weight}}>
                {text}
            </ConditionalRender>
        )
        case "m": return(
            <ConditionalRender condition={isMobile ?? false} First={<TypographyM/>} Second={<TypographyM/>} commonProps={{$color: color, $weight: weight}}>
                {text}
            </ConditionalRender>
        )
        case "s": return(
            <ConditionalRender condition={isMobile ?? false} First={<TypographyS/>} Second={<TypographyS/>} commonProps={{$color: color, $weight: weight}}>
                {text}
            </ConditionalRender>
        )
    }
}
export default Typography