import {AppRouter} from "./appRouter.tsx";

import {AppStyle} from "./appStyle.tsx";
import {RouterProvider} from "react-router-dom";
import Compose from "../../shared/lib/utils/compose.tsx";
export const AppProvider = () => {
    return(
        <Compose components={[AppStyle]}>
            <RouterProvider router={AppRouter}/>
        </Compose>
    )
}