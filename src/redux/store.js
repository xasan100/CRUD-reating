// store.js
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { api } from './slice/slice.js';
import { famous } from './slice/famous.js';


export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        [famous.reducerPath]: famous.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            api.middleware,
            famous.middleware,
        ),
});

setupListeners(store.dispatch);
