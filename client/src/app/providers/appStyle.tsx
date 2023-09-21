import {Base, Normalize, Vars} from "../styles";
import {ReactNode} from "react";

export const AppStyle = ({children}: {children?: ReactNode}) => {
    return(
        <>
            <Normalize/>
            <Vars/>
            <Base/>
            {children}
        </>
    )
};