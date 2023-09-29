import {AppRouter} from "./appRouter.tsx";
import {Provider as ReduxProvider} from 'react-redux'
import {AppStyle} from "./appStyle.tsx";
import {RouterProvider} from "react-router-dom";
import Compose from "../../shared/lib/utils/compose.tsx";
import appStore from "./appStore.tsx";
export const AppProvider = () => {
    return(
      <ReduxProvider store={appStore}>
        <Compose components={[AppStyle]}>
          <RouterProvider router={AppRouter}/>
        </Compose>
      </ReduxProvider>
    )
}