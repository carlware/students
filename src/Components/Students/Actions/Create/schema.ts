import * as Yup from 'yup';

export const StudentSchema = Yup.object({
  first_name: Yup.string(),
  last_name:  Yup.string(),
  street_number: Yup.string(),
  city: Yup.string(),
  phone_number: Yup.string(),
  gpa: Yup.string(),
});
