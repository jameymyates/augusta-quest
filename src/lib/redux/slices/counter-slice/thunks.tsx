import type { ReduxThunkAction } from "@/lib/redux";
import { createAppAsyncThunk } from "@/lib/redux/create-app-async-thunk";
import { counterSlice } from "./counter-slice";
import { fetchIdentityCount } from "./fetch-identity-count";
import { selectCount } from "./selectors";

const incrementAsync = createAppAsyncThunk(
  "counter/fetchIdentityCount",
  async (amount: number) => {
    const response = await fetchIdentityCount(amount);

    return response.data;
  }
);

const incrementIfOddAsync =
  (amount: number): ReduxThunkAction =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());

    if (currentValue % 2 === 1) {
      dispatch(counterSlice.actions.incrementByAmount(amount));
    }
  };

export { incrementAsync, incrementIfOddAsync };
