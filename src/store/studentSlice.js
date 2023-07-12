import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
  const response = await fetch('http://localhost:8000/students');
  const data = await response.json();
  return data;
});

export const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

const studentSlice = createSlice({
  name: 'students',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addStudent: (state, action) => {
      const newStudent = {
        id: generateUniqueId(), 
        ...action.payload,
      };
      state.data.push(newStudent);
    },
    deleteStudent: (state, action) => {
      const studentId = action.payload;
      state.data = state.data.filter((student) => student.id !== studentId);
      
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export const { reducer } = studentSlice;
export const {  deleteStudent ,addStudent} = studentSlice.actions;
export default studentSlice.reducer;
