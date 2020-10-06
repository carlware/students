import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as _ from "lodash";
import { Student } from '../Models/student';
import { RootState } from './root';
import { StudentsState } from './state';

var CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function ID(): string {
  let result = '';
  const charactersLength = CHARS.length;
  for ( let i = 0; i < charactersLength; i++ ) {
      result += CHARS.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const MOCKED_DATA: Student[] = [
  {
    id: ID(),
    first_name: "Carlos",
    last_name: "R",
    street_number: "Wall Street",
    city: "New York",
    phone_number: "11111111",
    gpa: "123",
  }
]

export const studentsSlice = createSlice({
  name: "students",
  initialState: {
    student: null,
    students: MOCKED_DATA,
  } as StudentsState,
  reducers: {
    add: (state, action: PayloadAction<{student: Student}>) => {
      state.students.push(action.payload.student)
    },
    delete: (state, action: PayloadAction<{id: string}>) => {
      const index = _.findIndex(state.students, { id: action.payload.id })
      state.students.splice(index, 1) 
    },
    update: (state, action: PayloadAction<{id: string, student: Student}>) => {
      const index = _.findIndex(state.students, { id: action.payload.id })
      state.students.splice(index, 1, action.payload.student)
    }
  }
})

export const actions = studentsSlice.actions
export const selectStudents = (state: RootState) => state.students.students
export const selectStudent = (state: RootState) => state.students.student
