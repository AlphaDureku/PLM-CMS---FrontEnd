import {
  Checkbox,
  Flex,
  Group,
  Modal,
  Select,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { accountType } from "../../../Types/CmsPage";
import CustomButton from "../../Reusable Components/CustomButton";

type permissionType = {
  id: string;
  permissions: number[];
};
type modalProps = {
  opened: boolean;
  close: () => void;
  selectedAccount: accountType;
  permissions: permissionType[];
};

// type postModification = {
//   accountDetails: accountType;
//   permissions: number;
// };

export default function ModifyAccountModal({
  opened,
  close,
  selectedAccount,
  permissions,
}: modalProps) {
  const labelStyle = {
    label: {
      fontWeight: 900,
    },
  };

  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  //   const [temporary, setTemporary] = useState<accountType>({
  //     id: "",
  //     fullName: "",
  //     userName: "",
  //     accountType: "",
  //     status: "",
  //   });
  const [forms, setForms] = useState<accountType>({
    id: "",
    fullName: "",
    userName: "",
    accountType: "",
    status: "",
  });

  useEffect(() => {
    setForms(selectedAccount);
    const permissionProps = permissions.find(
      (item) => item.id === selectedAccount.id
    );
    setSelectedRows(permissionProps ? permissionProps.permissions : []);
  }, [opened]);

  const permissionsStatic = [
    {
      id: 1,
      action: "Create Post",
      description: "sdfsdfsdlfkasdkfjksd",
    },
    {
      id: 2,
      action: "Modify Post",
      description: "sdfsdfsdlfkasdkfjksd",
    },
    {
      id: 3,
      action: "Delete Post",
      description: "sdfsdfsdlfkasdkfjksd",
    },
    {
      id: 4,
      action: "Create Tags",
      description: "sdfsdfsdlfkasdkfjksd",
    },
    {
      id: 5,
      action: "Modify Tags",
      description: "sdfsdfsdlfkasdkfjksd",
    },
    {
      id: 6,
      action: "Delete Tags",
      description: "sdfsdfsdlfkasdkfjksd",
    },
  ];

  const OnChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setForms((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const modalPermissions = permissionsStatic.map((element, index) => (
    <Table.Tr key={index}>
      <Table.Td>
        <Checkbox
          color="var(--Yellow)"
          aria-label="Select row"
          checked={selectedRows.includes(element.id)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, element.id]
                : selectedRows.filter((position) => position !== element.id)
            )
          }
        />
      </Table.Td>
      <Table.Td>{element.action}</Table.Td>
      <Table.Td>{element.description}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Account Details"
        centered
        size={"lg"}
        styles={{ title: { fontWeight: "bold" } }}
      >
        <Flex direction={"column"} gap={"lg"}>
          <TextInput
            label="Account Name"
            value={forms.fullName}
            style={{ width: "100%" }}
            styles={labelStyle}
            name="accountName"
            onChange={OnChangeHandler}
            mt="md"
          ></TextInput>
          <Flex gap={"lg"}>
            <TextInput
              label="Username"
              value={forms.userName}
              style={{ width: "100%" }}
              styles={labelStyle}
              name="userName"
              onChange={OnChangeHandler}
              mt="md"
            ></TextInput>
            <TextInput
              label="Account Type"
              value={forms.accountType}
              style={{ width: "100%" }}
              styles={labelStyle}
              mt="md"
              name="accountType"
              onChange={OnChangeHandler}
            ></TextInput>
          </Flex>
          <Select
            searchable
            label="Account Status"
            data={["Activated", "Deactivated"]}
            styles={labelStyle}
            mt="md"
            value={forms.status}
            name="accountStatus"
            onChange={(value) =>
              setForms((prev) => ({
                ...prev,
                status: value as string,
              }))
            }
          />

          <Text fw={"bold"}>Manage Permissions</Text>
          <div style={{ borderRadius: "8px", backgroundColor: "#efefef" }}>
            <Table
              highlightOnHover
              highlightOnHoverColor="#edece8"
              horizontalSpacing="md"
              verticalSpacing="xs"
            >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Permissions</Table.Th>
                  <Table.Th>Action</Table.Th>
                  <Table.Th>Description</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{modalPermissions}</Table.Tbody>
            </Table>
          </div>

          <Group justify="center" mt={"md"}>
            <CustomButton
              color="var(--Yellow)"
              text="Confirm"
              size="sm"
              onClick={() => {
                console.log(forms);
                console.log(selectedRows);
              }}
            ></CustomButton>
            <CustomButton
              color="var(--Red)"
              size="sm"
              text="Cancel"
              onClick={close}
            ></CustomButton>
          </Group>
        </Flex>
      </Modal>
    </>
  );
}
