import {
  Center,
  Flex,
  Group,
  Table,
  Text,
  TextInput,
  ThemeIcon,
  UnstyledButton,
  rem,
} from "@mantine/core";
import { Check, Delete } from "@mui/icons-material";
import {
  IconChevronDown,
  IconChevronUp,
  IconEdit,
  IconSearch,
  IconSelector,
} from "@tabler/icons-react";
import { useState } from "react";
import { RowData, ThProps } from "../../../Types/CmsPage";
import classes from "../../../mantine assets/TableSort.module.css";

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const Icon = sorted
    ? reversed
      ? IconChevronUp
      : IconChevronDown
    : IconSelector;
  return (
    <Table.Th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

function filterData(data: RowData[], search: string) {
  const query = search.toLowerCase().trim();
  const itemKeys = Object.keys(data[0]);
  return data.filter((item) =>
    itemKeys.some((key) => item[key].toLowerCase().includes(query))
  );
}

function sortData(
  data: RowData[],
  payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy]);
      }

      return a[sortBy].localeCompare(b[sortBy]);
    }),
    payload.search
  );
}

const data = [
  {
    id: "202018923",
    fullName: "Athena Weissnat",
    userName: "Lil - Rippin",
    status: "Activated",
  },
  {
    id: "202016523",
    fullName: "Test Weissnat",
    userName: "Little - Rippin",
    status: "Activated",
  },
  {
    id: "202015643",
    fullName: "AAAA Weissnat",
    userName: "Big - Rippin",
    status: "Activated",
  },
  {
    id: "2020123323",
    fullName: "Tessss Weissnat",
    userName: "Medium - Rippin",
    status: "Deactivated",
  },
];

export default function ManageAccounts() {
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(data, { sortBy, reversed: reverseSortDirection, search: value })
    );
  };

  const deleteHandler =
    (id: string): React.MouseEventHandler<HTMLDivElement> =>
    () => {
      console.log(`Clicked on id: ${id}`);
    };

  const rows = sortedData.map((row) => (
    <Table.Tr key={row.id}>
      <Table.Td>{row.id}</Table.Td>
      <Table.Td>{row.fullName}</Table.Td>
      <Table.Td>{row.userName}</Table.Td>
      <Table.Td>{row.status}</Table.Td>
      <Table.Td>
        <Flex gap={"sm"}>
          <ThemeIcon
            variant="gradient"
            size="lg"
            aria-label="Gradient action icon"
            gradient={{ from: "var(--Yellow)", to: "yellow", deg: 90 }}
            className="makeHoverable"
          >
            <Check style={{ width: "70%", height: "70%" }} />
          </ThemeIcon>
          <ThemeIcon
            variant="gradient"
            size="lg"
            aria-label="Gradient action icon"
            gradient={{ from: "blue", to: "cyan", deg: 90 }}
            className="makeHoverable"
          >
            <IconEdit style={{ width: "70%", height: "70%" }} />
          </ThemeIcon>
          <ThemeIcon
            variant="gradient"
            size="lg"
            aria-label="Gradient action icon"
            gradient={{ from: "red", to: "pink", deg: 90 }}
            className="makeHoverable"
            onClick={deleteHandler(row.id)}
          >
            <Delete style={{ width: "70%", height: "70%" }} />
          </ThemeIcon>
        </Flex>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Flex
        gap={"lg"}
        direction={"column"}
        justify={"space-around"}
        align={"center"}
      >
        <TextInput
          placeholder="Search an account"
          mb="md"
          style={{ width: "70%" }}
          leftSection={
            <IconSearch
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
          value={search}
          onChange={handleSearchChange}
        />
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "2%",
          }}
        >
          <h3>Accounts</h3>
          <Table
            horizontalSpacing="md"
            verticalSpacing="xs"
            miw={700}
            layout="fixed"
          >
            <Table.Tbody>
              <Table.Tr>
                <Th
                  sorted={sortBy === "id"}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting("id")}
                >
                  ID
                </Th>
                <Th
                  sorted={sortBy === "fullName"}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting("fullName")}
                >
                  Full Name
                </Th>
                <Th
                  sorted={sortBy === "userName"}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting("userName")}
                >
                  Username
                </Th>
                <Th
                  sorted={sortBy === "status"}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting("status")}
                >
                  Status
                </Th>
                <Table.Th>Actions</Table.Th>
              </Table.Tr>
            </Table.Tbody>
            <Table.Tbody>
              {rows.length > 0 ? (
                rows
              ) : (
                <Table.Tr>
                  <Table.Td colSpan={Object.keys(data[0]).length}>
                    <Text fw={500} ta="center">
                      Nothing found
                    </Text>
                  </Table.Td>
                </Table.Tr>
              )}
            </Table.Tbody>
          </Table>
        </div>
      </Flex>
    </>
  );
}
