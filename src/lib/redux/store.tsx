import {
  configureStore,
  type ThunkAction,
  type Action,
} from "@reduxjs/toolkit";
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  type TypedUseSelectorHook,
} from "react-redux";
import { middleware } from "./middleware";
import { reducer } from "./root-reducer";

const reduxStore = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middleware);
  },
});

const useDispatch = () => useReduxDispatch<ReduxDispatch>();
const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

type ReduxStore = typeof reduxStore;
type ReduxState = ReturnType<typeof reduxStore.getState>;
type ReduxDispatch = typeof reduxStore.dispatch;
type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>;

export {
  reduxStore,
  useDispatch,
  useSelector,
  type ReduxStore,
  type ReduxState,
  type ReduxDispatch,
  type ReduxThunkAction,
};
