import { Flex, Divider, Text } from '@chakra-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';

import Form from '../Components/Students/Create/Create';
import { actions } from '../Store/redux';
import { Student } from '../Models/student';
import { Card } from '../Components/Card';

const INITIAL: Student = {
  id: "",
  first_name: "",
  last_name: "",
  street_name: "",
  street_number: "",
  city: "",
  state: "",
  zipcode: "",
  phone_number: "",
  gpa: 0,
}

function CreateView() {
  const dispatch = useDispatch()
  const history = useHistory()


  const add = (data: Student) => {
    dispatch(actions.add({ student: data }))
    history.goBack()
  }

  const onBack = () => {
    history.goBack()
  }

  return (
    <Flex direction="column" alignItems="center" width="100%">
      <Card direction="column" background="#fff" marginBottom="1rem" width="40%">
        <Text fontWeight="700" fontSize="sm" color="#3F4254">Student</Text>
        <Divider />
        <Form onSubmit={add} onBack={onBack} student={INITIAL} />
      </Card>
    </Flex>
  );
}

export default CreateView;
