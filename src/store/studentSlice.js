import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    const response = await fetch("http://localhost:8000/students");
    const data = await response.json();
    return data;
  }
);

export const deleteStudent = createAsyncThunk(
  "students/deleteStudent",
  async (studentId) => {
    await fetch(`http://localhost:8000/students/${studentId}`, {
      method: "DELETE",
    });
    return studentId;
  }
);

export const addStudent = createAsyncThunk(
  "students/addStudent",
  async (studentData) => {
    const response = await fetch("http://localhost:8000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    });
    const data = await response.json();
    return data;
  }
);


export const updateStudent = createAsyncThunk(
  "students/updateStudent",
  async ({ studentId, updatedData }) => {
    const response = await fetch(`http://localhost:8000/students/${studentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    const data = await response.json();
    return data;
  }
);


const studentSlice = createSlice({
  name: "students",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
     
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.filter(
          (student) => student.id !== action.payload
        );
      })
     
      .addCase(addStudent.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload);
      })
     
      .addCase(updateStudent.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedIndex = state.data.findIndex(
          (student) => student.id === action.payload.id
        );
        if (updatedIndex !== -1) {
          state.data[updatedIndex] = action.payload;
        }
      })
     
  },
});

export const { reducer } = studentSlice;

export default studentSlice.reducer;