import { Table, ActionIcon, Pagination, Flex, Divider, Autocomplete, Space, Button, Center } from '@mantine/core';
import {  IconTrash } from '@tabler/icons-react'
import { SetStateAction, useEffect, useState } from "react";
import { notifications } from '@mantine/notifications';
import CreateSubjectComponent from './CreateSubjectComponent';

type Pagination = {
    currentPage: number;
    perPage: number;
    total: number;
    data: Subject[];
}

type Subject = {
id: string, 
name: string,
sex: string,
diagnosisAt: string,
status: string
}

export default function TableComponent() {

    const [activePage, setPage] = useState(1);
    const [subjects, setSubjects] = useState<Pagination>();
    const [subjectNames, setSubjectNames] = useState();
    const [searchName, setSearchName] = useState<string>();
  
    const getAllSubjects = () => fetch(`http://localhost:3000/subject?currentPage=${activePage}&take=10`, { method: 'GET'})
    .then(response => response.json())
    .then(data => setSubjects(data))
    .catch((error) => console.log(error));

    useEffect(() => {
      getAllSubjects();
      getAllSubjectsName();
    }, [activePage])

    const getAllSubjectsName = () => fetch(`http://localhost:3000/subject/names`, { method: 'GET'})
      .then(response => response.json())
      .then(data => setSubjectNames(data.map((subName: { subject_name: string; }) => subName.subject_name)))
      .catch((error) => console.log(error));
  
    const deleteHandler = (event: any, id: string) => {
      event.preventDefault();
  
      fetch(`http://localhost:3000/subject/${id}`, { method: 'DELETE'})
      .then(response => { console.log(response); 
        notifications.show({
          title: 'Subject Deleted',
          message: 'Your subject was deleted!!!',
          color: 'green',
          autoClose: 5000,
        })
        clearSearchBar();
      })  
      .catch((error) => console.log(error));
    }

    const clearSearchBar = () => {
      getAllSubjects();
      setSearchName('');
    }

    const searchByNameHandler = (name: string) => {
      setSearchName(name);
      fetch(`http://localhost:3000/subject?currentPage=${activePage}&take=10&name=${name}`, { method: 'GET'})
      .then(response => response.json())
      .then(data => setSubjects(data))
      .catch((error) => console.log(error));
    }
  
    const rows = subjects?.data.map((subject: Subject) => (
      <Table.Tr key={subject.id}>
        <Table.Td>{subject.name}</Table.Td>
        <Table.Td>{subject.sex}</Table.Td>
        <Table.Td>{subject.diagnosisAt.split('T')[0]}</Table.Td>
        <Table.Td>{subject.status}</Table.Td>
        <Table.Td><ActionIcon onClick={(event: any) => deleteHandler(event, subject.id)}><IconTrash/></ActionIcon></Table.Td>
      </Table.Tr>
    ));
  
    return (
      <>
      <CreateSubjectComponent/>
      <Space h="md" />
      <Flex align="flex-end" gap="xs" >
        <Autocomplete
        label="Search by Name"
        placeholder="Subject name"
        value={searchName}
        limit={5}
        data={subjectNames}
        onOptionSubmit={searchByNameHandler}
      />
      <Button variant="filled" onClick={() => clearSearchBar()}>Clear</Button>
      </Flex>
    <Space h="md" />
      <Flex>
        <Table striped highlightOnHover withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Sex</Table.Th>
              <Table.Th>Diagnosis</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th/>
              <Table.Th/>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {rows}
          </Table.Tbody>
        </Table>
        </Flex>
        <Flex mih={50} justify="flex-end" align="center">
          <Pagination total={(subjects)? subjects.total : 0} value={subjects?.currentPage} onChange={setPage}></Pagination>
        </Flex>
      </>
    );
  }
  