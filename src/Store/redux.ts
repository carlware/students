import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as _ from "lodash";
import { ID } from '../Helpers/utils';
import { Student } from '../Models/student';
import { RootState } from './root';
import { StudentsState } from './state';


const MOCKED_DATA: Student[] = [
  {
    id: ID(),
    first_name: "John",
    last_name: "Doe",
    street_name: "The Bronx",
    street_number: "37",
    city: "New York",
    state: "New York",
    zipcode: "10451",
    phone_number: "19191111",
    gpa: 4.0,
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
