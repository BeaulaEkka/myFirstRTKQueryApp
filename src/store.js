import { configureStore } from "@reduxjs/toolkit";
import { jsonPlaceholderApi } from "./services/jsonPlaceholderApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    // reducers
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
});

//optional but has nice features like refresh
setupListeners(store.dispatch);
