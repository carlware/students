import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as _ from "lodash";
import { Student } from '../Models/student';
import { RootState } from './root';
import { StudentsState } from './state';

export const studentsSlice = createSlice({
  name: "students",
  initialState: {
    student: null,
    students: []
  } as StudentsState,
  reducers: {
    add: (state, action: PayloadAction<{student: Student}>) => {

    },
  }
})

export const actions = studentsSlice.actions
export const selectStudents = (state: RootState) => state.students.students
export const selectStudent = (state: RootState) => state.students.student
