import {AppRouter} from "./appRouter.tsx";

import {Compose} from '@fancyman00/tinka-ui-kit'
import {AppStyle} from "./appStyle.tsx";
import {RouterProvider} from "react-router-dom";
export const AppProvider = () => {
    return(
        <Compose components={[AppStyle]}>
            <RouterProvider router={AppRouter}/>
        </Compose>
    )
}