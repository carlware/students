import * as Yup from 'yup';

const REQUIRED_MSG = "this field is required"

export const StudentSchema = Yup.object({
  first_name: Yup.string().required(REQUIRED_MSG),
  last_name:  Yup.string().required(REQUIRED_MSG),
  street_name: Yup.string().required(REQUIRED_MSG),
  street_number: Yup.string().required(REQUIRED_MSG),
  state: Yup.string().required(REQUIRED_MSG),
  zipcode: Yup.string().required(REQUIRED_MSG),
  city: Yup.string().required(REQUIRED_MSG),
  phone_number: Yup.string().required(REQUIRED_MSG),
  gpa: Yup.number().max(4.33).min(0.0),
});
