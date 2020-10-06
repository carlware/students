import { Flex, Divider, Text } from '@chakra-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import React from 'react';
import * as _ from "lodash";

import Form from '../Components/Students/Edit/Edit';
import { actions, selectStudents } from '../Store/redux';
import { Student } from '../Models/student';
import { Card } from '../Components/Card';

interface RouteProps {
  id: string
}

function EditView() {
  const { id } = useParams<RouteProps>();
  const dispatch = useDispatch()
  const history = useHistory()

  const students = useSelector(selectStudents)
  const student = _.find(students, (student: Student) => student.id === id)

  const edit = (data: Student) => {
    dispatch(actions.update({ student: data, id }))
  }

  const onBack = () => {
    history.goBack()
  }

  return (
    <Flex direction="column" alignItems="center" width="100%">
      <Card direction="column" background="#fff" marginBottom="1rem" width="40%">
        <Text fontWeight="700" fontSize="sm" color="#3F4254">Student</Text>
        <Divider />
        {
          student ? 
          <Form onSubmit={edit} student={student} onBack={onBack} /> :
          <Text> Cannot find the student with the id: { id }</Text>
        }
      </Card>
    </Flex>
  );
}

export default EditView;
