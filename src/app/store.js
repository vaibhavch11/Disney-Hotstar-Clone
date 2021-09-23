import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import useReducer from "../features/counter/counterSlice";


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: useReducer,
  },
});

// import { configureStore } from "@reduxjs/toolkit";


// export default configureStore({
//   reducer: {
  
//   },
//   middleware: getDefaultMiddleware({
//     serializableCheck: false,
//   }),
// });
