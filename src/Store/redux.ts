import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as _ from "lodash";
import { ID } from '../Helpers/utils';
import { Student } from '../Models/student';
import { RootState } from './root';
import { StudentsState } from './state';


const MOCKED_DATA: Student[] = [
  {
    id: ID(),
    first_name: "Carlos",
    last_name: "R",
    street_name: "Wall Street",
    street_number: "37",
    city: "New York",
    state: "New York",
    zipcode: "10451",
    phone_number: "11111111",
    gpa: 4.5,
  }
]

export const studentsSlice = createSlice({
  name: "students",
  initialState: {
    students: MOCKED_DATA,
  } as StudentsState,
  reducers: {
    add: (state, action: PayloadAction<{student: Student}>) => {
      state.students.push({...action.payload.student, id: ID()})
      const sorted = state.students.sort((a, b) => {
        if (a.last_name > b.last_name) return 1;
        if (a.last_name < b.last_name) return -1;
        return 0;
      })
      state.students = sorted
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
