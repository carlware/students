import { Flex, Button, Stack, Text, Avatar } from '@chakra-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';
import * as _ from "lodash";

import { selectStudents, actions } from '../Store/redux';
import { Card } from '../Components/Card';
import List from '../Components/Students/List'
import { Student } from '../Models/student';
import Confirmation from '../Components/Confirmation';
import useConfirmation from '../Hooks/useConfirmation';

const TITLE = "Students"
const MESSAGE = "Are you sure do you want to delete the student?"

function ListView() {
  const dispatch = useDispatch()
  const history = useHistory();

  const students = useSelector(selectStudents)
  const sorted = _.sortBy(students, ['last_name'])

  const { isOpen, onExecute, onCancel, onConfirm, data } = useConfirmation<Student>({
    confirm: (s) => dispatch(actions.delete({ id: s.id}))
  })

  const onEdit = (id: string) => history.push("/students/" + id)

  return (
    <>
      <Flex marginTop="1rem" direction="column" justifyContent="center" width="100%">
        <Card direction="column" background="#fff" marginBottom="1rem">
          <Text marginBottom="0.5rem" fontWeight="700" fontSize="sm" color="#3F4254">Students</Text>
          <Stack isInline marginBottom="2rem" justifyContent="flex-end">
            <Button color="#fff" backgroundColor="#0A72DB" onClick={() => history.push("/students/new")}>Create</Button>
          </Stack>
          <List data={sorted} onDelete={onExecute} onEdit={onEdit} />
        </Card>
      </Flex>
      <Confirmation isOpen={isOpen} title={TITLE} onCancel={onCancel} onConfirm={onConfirm}>
        <Flex direction="column">
          <Text>{MESSAGE}</Text>
          <Stack isInline alignItems="baseline">
            <Avatar backgroundColor="#0A72DB" size="md" name={`${data.first_name} ${data.last_name}`} ></Avatar>
            <Text marginTop="2rem">{`${data.first_name} ${data.last_name}`}</Text>
          </Stack>
        </Flex>
      </Confirmation>
    </>
  );
}

export default ListView;
