import { Flex, Divider, Text } from '@chakra-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';

import Form from '../Components/Students/Actions/Create';
import { actions } from '../Store/redux';
import { Student } from '../Models/student';
import { Card } from '../Components/Card';

const INITIAL: Student = {
  id: "",
  first_name: "",
  last_name: "",
  street_number: "",
  city: "",
  phone_number: "",
  gpa: "",
}

function CreateView() {
  const dispatch = useDispatch()
  const history = useHistory()

  const add = (data: Student) => {
    dispatch(actions.add({ student: data }))
  }

  return (
    <Flex direction="column" alignItems="center" width="100%">
      <Card direction="column" background="#fff" marginBottom="1rem" width="40%">
        <Text fontWeight="700" fontSize="sm" color="#3F4254">Student</Text>
        <Divider />
        <Form operation="save" onSubmit={add} student={INITIAL} />
      </Card>
    </Flex>
  );
}

export default CreateView;
