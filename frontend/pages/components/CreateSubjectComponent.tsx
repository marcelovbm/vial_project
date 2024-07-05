import { Modal, Button, TextInput, Select, Flex, rem, Notification } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { IconCalendar } from "@tabler/icons-react";
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

export default function CreateSubjectComponent() {

    const [opened, { open, close }] = useDisclosure(false);
    const icon = <IconCalendar style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;

    const form = useForm({
      mode: 'uncontrolled',
      initialValues: {name: '', sex: '', stat: '', diagnosis: new Date() },
      validate: {
        name: (value) => value.length < 2 ? 'Name must have at least 2 letters' : null,
        sex: (value) => /^(MALE|FEMALE)$/.test(value) ? null : 'Sex is required',
        stat: (value) => /^(SCREENING|FAILED|ENROLLED)$/.test(value) ? 'Status is required' : null,
        diagnosis: (value) => value == undefined ? 'You must select a date' : null,
      },
    })

    const postRequest = (value: any) => {
      console.log(value)
      fetch(`http://localhost:3000/subject`, { 
        method: 'POST',
        body: JSON.stringify({ name: value.name, sex: value.sex, diagnosisAt: new Date(value.diagnosis).toISOString().split('T')[0], status: value.stat}),
        headers: { "Content-Type": "application/json" }
      })
      .then((response) => {
        close();
        form.reset();
        if (response.status !== 201) {
          notifications.show({
            title: 'Failed',
            message: 'Your subject was not created!!! Contact us if the problem persists.',
            color: 'yellow',
            autoClose: 5000,
          })
        } else {
          notifications.show({
            title: 'Subject Created',
            message: 'Your subject was created successifuly!!! 😍',
            color: 'green',
            autoClose: 5000,
            position: "bottom-left"
          })
        }
        window.location.reload();
      })
      .catch(console.log);
    };

    return (
        <>
        <Modal opened={opened} onClose={close} title="Create Subject" centered>
          <form onSubmit={form.onSubmit(postRequest)}>
            <TextInput {...form.getInputProps('name')} key={form.key('name')} withAsterisk label="Name" placeholder="Name" id="name"/>
            <Flex gap="xs">
              <Select {...form.getInputProps('sex')} key={form.key('sex')} withAsterisk checkIconPosition="right" label="Sex" placeholder="Pick value" data={['MALE', 'FEMALE']} id="sex"/>
              <Select {...form.getInputProps('stat')} key={form.key('stat')} withAsterisk checkIconPosition="right" label="Status" placeholder="Pick value" data={['Screening', 'Failed', 'Enrolled']} id="stat"/>
            </Flex>
            <DatePickerInput {...form.getInputProps('diagnosis')} key={form.key('diagnosis')} valueFormat="YYYY MMM DD" leftSection={icon} withAsterisk label="Diagnosis" placeholder="Pick date and time" id="diagnosis"/>
            <Flex mih={50} justify="flex-end" align="center">
              <Button type="submit">Submit</Button>
            </Flex>
          </form>
        </Modal>
        <Button onClick={open}>New Subject</Button>
      </>
    );
  }
  