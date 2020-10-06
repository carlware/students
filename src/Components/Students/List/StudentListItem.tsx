import { BsFillTrashFill, BsPencil } from 'react-icons/bs';
import { Stack, Text, IconButton } from '@chakra-ui/core';
import React from 'react';
import { Student } from '../../../Models/student';


interface Props {
  student: Student
  onDelete: (student: Student) => void
  onEdit: (id: string) => void
}

function StudentListItem({ student, onDelete, onEdit }: Props) {
  return (
    <Stack isInline my="0.5rem">
      <Text cursor="pointer" flex="1" width="30rem" isTruncated onClick={() => onEdit(student.id)}>{student.first_name}</Text>
      <Text flex="1" width="30rem">{student.last_name}</Text>
      <Text flex="1" width="30rem">{student.phone_number}</Text>
      <Text flex="1" width="30rem">{student.gpa}</Text>
      <Stack isInline flex="1">
        <IconButton bg="transparent" icon={BsFillTrashFill} aria-label="delete" size="md" onClick={() => onDelete(student)} />
        <IconButton bg="transparent" icon={BsPencil} aria-label="edit" size="md" onClick={() => onEdit(student.id)} />
      </Stack>
    </Stack>
  );
}

export default StudentListItem;