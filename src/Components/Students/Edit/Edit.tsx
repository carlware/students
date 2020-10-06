import { Avatar, Button, Flex, Stack } from '@chakra-ui/core';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import React from 'react';

import { StudentSchema } from './schema'
import { Student } from '../../../Models/student';
import { CInput } from '../../Forms';

interface Props {
  onSubmit: (data: Student) => void
  student: Student
  onBack: () => void
}

function StudentForm({ onBack, onSubmit, student }: Props) {
  const history = useHistory()

  return (
    <Formik
      initialValues={student}
      validationSchema={StudentSchema}
      onSubmit={(values) => {
        onSubmit(values)
      }}>
      <Form>
        <Flex>
        <Stack flex="1" flexDir="column" alignItems="center">
          <Avatar backgroundColor="#0A72DB" size="2xl" name={`${student.first_name} ${student.last_name}`}></Avatar>
        </Stack>
        <Stack flex="2" flexDir="column">
          <CInput label="First Name" name="first_name" placeholder="First Name" />
          <CInput label="Last Name" name="last_name" placeholder="Last Name" />
          <CInput label="Street Name" name="street_name" placeholder="Street Name" />
          <CInput label="Street Number" name="street_number" placeholder="Street Number" />
          <CInput label="City" name="city" placeholder="City" />
          <CInput label="State" name="state" placeholder="State" />
          <CInput label="Zipcode" name="zipcode" placeholder="Zipcode" />
          <CInput label="Phone Number" name="phone_number" placeholder="Phone Number" />
          <CInput label="GPA" name="gpa" placeholder="GPA" />
        </Stack>
        </Flex>
        <Stack isInline alignItems="baseline" my="0.5rem">
          <Stack flex="7" isInline justifyContent="space-between">
            <Button color="#fff" backgroundColor="#0A72DB" onClick={onBack}>Back</Button>
            <Button color="#fff" backgroundColor="#0A72DB" type="submit">Edit</Button>
          </Stack>
        </Stack>
      </Form>
    </Formik>
  );
}

export default StudentForm;