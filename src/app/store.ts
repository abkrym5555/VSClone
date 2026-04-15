import { configureStore } from "@reduxjs/toolkit";
import fileTreeReducer from "../features/fileTree/fileTree";

export const store = configureStore({
  reducer: {
    fileTreeRed: fileTreeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
