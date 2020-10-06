import { BsFillTrashFill } from 'react-icons/bs';
import { Stack, Avatar, Text, Box, Badge, IconButton } from '@chakra-ui/core';
import React from 'react';
import { Student } from '../../../Models/student';



interface Props {
  student: Student
  onDelete: (student: Student) => void
  onEdit: (id: string) => void
}

function StudentListItem({ student, onDelete, onEdit }: Props) {
  return (
    <Stack isInline my="0.5rem" alignItems="center">
      <Text flex="1" mx="1rem" width="30rem" isTruncated>{student.first_name}</Text>
      <Stack isInline flex="1">
        <IconButton bg="transparent" icon={BsFillTrashFill} aria-label="delete" size="md" onClick={() => onDelete(student)} />
      </Stack>
    </Stack>
  );
}

export default StudentListItem;