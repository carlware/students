import { Flex, Divider, Text, Stack } from '@chakra-ui/core';
import React from 'react';
import { Student } from '../../../Models/student';

import ListItem from './StudentListItem';


interface Props {
  data?: Student[]
  onDelete: (student: Student) => void
  onEdit: (id: string) => void
}

function List({ data = [], onDelete, onEdit }: Props) {

  return (
    <Flex flexDirection="column">

      <Stack isInline>
        <Text flex="1" textTransform="uppercase" fontSize="sm" fontWeight="700">Name</Text>
        <Text flex="1" textTransform="uppercase" fontSize="sm" fontWeight="700">Actions</Text>
      </Stack>
      <Divider></Divider>
      {
        data.map((student) => (
          <ListItem key={student.id} student={student} onDelete={onDelete} onEdit={onEdit} />
        ))
      }
    </Flex>
  );
}

export default List;
