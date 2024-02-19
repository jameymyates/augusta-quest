import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ReduxState, ReduxDispatch } from "./store";

const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: ReduxState;
  dispatch: ReduxDispatch;
  rejectValue: string;
}>();

export { createAppAsyncThunk };
