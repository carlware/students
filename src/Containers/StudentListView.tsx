import { Flex, Button, Stack, Text } from '@chakra-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { selectStudents, actions } from '../Store/redux';
import { Card } from '../Components/Card';

import List from '../Components/Students/List'
import { Student } from '../Models/student';

function ListView() {
  const dispatch = useDispatch()
  const history = useHistory();

  const students = useSelector(selectStudents)
  const sorted = students.sort((a,b) => {
    if (a.last_name > b.last_name) return 1;
    if (a.last_name < b.last_name) return -1;
    return 0;
  })

  const onEdit = (id: string) => history.push("/students/" + id)
  const onDelete = (s: Student) => dispatch(actions.delete({ id: s.id }))

  return (
    <>
      <Flex direction="column" justifyContent="center" width="100%">
        <Card direction="column" background="#fff" marginBottom="1rem">
          <Text marginBottom="0.5rem" fontWeight="700" fontSize="sm" color="#3F4254">Students</Text>
          <Stack isInline marginBottom="2rem" justifyContent="flex-end">
            <Button color="#fff" backgroundColor="#0A72DB" onClick={() => history.push("/students/new")}>Create</Button>
          </Stack>
          <List data={sorted} onDelete={onDelete} onEdit={onEdit} />
        </Card>
      </Flex>
    </>
  );
}

export default ListView;
