import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import studentReducer ,{fetchStudents} from './studentSlice'

const store = configureStore({
    reducer: {
      students: studentReducer,
    },
  });


export default store;