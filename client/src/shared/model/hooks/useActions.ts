
import {
  ActionCreator,
  ActionCreatorsMapObject,
  AsyncThunk,
  bindActionCreators
} from "@reduxjs/toolkit";
import { useAppDispatch } from "./useAppDispatch.ts";

type BoundAsyncThunk<Action extends ActionCreator<any>> = (
  ...args: Parameters<Action>
) => ReturnType<ReturnType<Action>>;

type BoundActions<Actions extends ActionCreatorsMapObject> = {
  [key in keyof Actions]: Actions[key] extends AsyncThunk<any, any, any>
    ? BoundAsyncThunk<Actions[key]>
    : Actions[key];
};

export const useActions = <Actions extends ActionCreatorsMapObject = ActionCreatorsMapObject>  (
  actions: Actions,
): BoundActions<Actions> => {
  const dispatch = useAppDispatch();

  return { ...bindActionCreators(actions, dispatch) };
};

