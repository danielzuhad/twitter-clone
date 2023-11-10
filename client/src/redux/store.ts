import {
  AnyAction,
  Reducer,
  ThunkDispatch,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import mobileMenuSlice, { MobileMenuState } from "./mobileMenuSlice";
import authSlice, { AuthState } from "./authSLice";

interface RootState {
  mobileMenu: MobileMenuState;
  auth: AuthState;
}

const rootReducer: Reducer<RootState, AnyAction> = combineReducers({
  mobileMenu: mobileMenuSlice,
  auth: authSlice,
});

const persistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

// export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.getState;
export type AppThunkDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
