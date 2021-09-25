import { configureStore} from '@reduxjs/toolkit';

import useReducer from "../features/counter/counterSlice";
import movieReducer from "../features/movies/movieSlice"


export const store = configureStore({
  reducer: {
    
    user: useReducer,
    movie: movieReducer,
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
