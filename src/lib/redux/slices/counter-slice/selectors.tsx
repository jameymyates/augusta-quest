import type { ReduxState } from "@/lib/redux";

const selectCount = (state: ReduxState) => state.counter.value;

export { selectCount };
