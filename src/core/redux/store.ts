import { configureStore } from "@reduxjs/toolkit";
import { stateSlice } from "../../product/reducers/state_reducer";

export const store = configureStore({
    reducer: {
        state: stateSlice.reducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch