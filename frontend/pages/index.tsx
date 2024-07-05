import { Title, Center, Container, Flex, Space } from "@mantine/core";
import TableComponent from "./components/Table";
import CreateSubjectComponent from './components/CreateSubjectComponent';
import { SetStateAction, useState } from "react";

export default function IndexPage() {
  
  return (

    <>
    <Center mt={50}>
      <Title order={1}>Subjects</Title>
    </Center>
    <Container mt={50}>
      <TableComponent/>
    </Container>
    </>
  );
}
