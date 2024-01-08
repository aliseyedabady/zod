import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user";
import themeReducer from "../features/theme";
import modalDelete from "../features/modalDelete";
import tableReducer from "../features/table";

export const store = configureStore({
  reducer: {
    userReducer,
    themeReducer,
    modalDelete,
    tableReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
