import { Button, Stack } from '@chakra-ui/core';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import React from 'react';

import { StudentSchema } from './schema'
import { Student } from '../../../../Models/student';
import { CInput } from '../../../Forms';

interface Props {
  operation: "save" | "edit"
  onSubmit: (data: Student) => void
  student: Student
}

function StudentForm({ operation, onSubmit, student }: Props) {
  const history = useHistory()
  const message = operation === "save" ? "Create" : "Edit"

  return (
    <Formik
      initialValues={student}
      validationSchema={StudentSchema}
      onSubmit={(values) => {
        onSubmit(values)
      }}>
      <Form>
        <CInput label="First Name" name="first_name" placeholder="First Name" />
        <CInput label="Last Name" name="last_name" placeholder="Last Name" />
        <CInput label="Street Number/Name" name="street_number" placeholder="Street Number" />
        <CInput label="City" name="city" placeholder="City" />
        <CInput label="Phone Number" name="phone_number" placeholder="Phone Number" />
        <CInput label="GPA" name="gpa" placeholder="GPA" />
        <Stack isInline alignItems="baseline" my="0.5rem">
          <Stack flex="7" isInline justifyContent="space-between">
            <Button color="#fff" backgroundColor="#0A72DB" onClick={() => history.goBack()}>Back</Button>
            <Button color="#fff" backgroundColor="#0A72DB" type="submit"> {message}</Button>
          </Stack>
        </Stack>
      </Form>
    </Formik>
  );
}

export default StudentForm;