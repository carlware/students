import { Student } from "../Models/student";

export interface StudentsState {
  students: Student[]
  student: Student | null
}