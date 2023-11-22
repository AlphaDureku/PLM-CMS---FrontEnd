import {
  Center,
  Checkbox,
  Flex,
  Group,
  ScrollArea,
  Spoiler,
  Table,
  Text,
  TextInput,
  Tooltip,
  UnstyledButton,
  rem,
} from "@mantine/core";
import { AddCircleOutline, Create, Delete } from "@mui/icons-material";
import {
  IconChevronDown,
  IconChevronUp,
  IconSearch,
  IconSelector,
} from "@tabler/icons-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TagsRowData, ThProps } from "../../../Types/CmsPage";
import classes from "../../../mantine assets/TableSort.module.css";

const data = [
  {
    id: "2020",
    name: "Header",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio labore minima itaque temporibus adipisci illum dolor expedita pariatur alias fugiat natus ab quas, doloribus nam rerum delectus, rem culpa et!",
  },
  {
    id: "2021",
    name: "Card",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio labore minima itaque temporibus adipisci illum dolor expedita pariatur alias fugiat natus ab quas, doloribus nam rerum delectus, rem culpa et!",
  },
];

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


function filterData(data: TagsRowData[], search: string) {
  const query = search.toLowerCase().trim();
  const itemKeys = Object.keys(data[0]);
  return data.filter((item) =>
    itemKeys.some((key) => item[key].toLowerCase().includes(query))
  );
}
function sortData(
  data: TagsRowData[],
  payload: {
    sortBy: keyof TagsRowData | null;
    reversed: boolean;
    search: string;
  }
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
export default function Tags() {
  // const [search, setSearch] = useState("");
  const [search, setSearch] = useSearchParams({ TagQuery: "" })
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState < keyof TagsRowData | null > (null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);
  const [selectedRow, setSelectedRow] = useState < string[] > ([]);

  const setSorting = (field: keyof TagsRowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search: search.get("TagQuery") ?? "" }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch((prev) => {
      prev.set("TagQuery", value);
      return prev;
    });
    setSortedData(
      sortData(data, { sortBy, reversed: reverseSortDirection, search: value })
    );
  };
  console.log(selectedRow);
  const rows = sortedData.map(
    (row: { id: string; name: string; description: string }) => (
      <Table.Tr key={row.id}>
        <Table.Td>
          <Checkbox
            color="var(--Yellow)"
            name={row.id}
            checked={selectedRow.includes(row.id)}
            onChange={() =>
              selectedRow.includes(row.id)
                ? setSelectedRow((prev) =>
                  prev.filter((item) => item !== row.id)
                )
                : setSelectedRow((prev) => [...prev, row.id])
            }
          />
        </Table.Td>
        <Table.Td>{row.id}</Table.Td>
        <Table.Td>{row.name}</Table.Td>
        <Table.Td>
          {" "}
          <Spoiler maxHeight={20} showLabel="..." hideLabel="Hide">
            {row.description}
          </Spoiler>
        </Table.Td>
      </Table.Tr>
    )
  );
  return (
    <>
      <Flex direction={"column"} align={"center"} gap={"lg"}>
        <Flex
          align={"center"}
          justify={"space-around"}
          style={{ width: "80%" }}
        >
          <TextInput
            placeholder="Search for tags"
            mb="md"
            className="TextInputWidth"
            leftSection={
              <IconSearch
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
            value={search.get("TagQuery") ?? ""}
            onChange={handleSearchChange}
          />
          <Flex align={"center"} gap={"md"}>
            <Tooltip position="bottom" label="Create">
              <AddCircleOutline
                style={{ color: "var(--Yellow)", fontSize: "2rem" }}
                className="makeHoverable"
              />
            </Tooltip>

            <Tooltip
              label={selectedRow.length === 1 ? "Edit" : "Select only 1 row"}
              position="bottom"
            >
              <Create
                style={{ color: "#4088FF", fontSize: "2rem" }}
                className={
                  selectedRow.length !== 1 ? "disableMouse" : "makeHoverable"
                }
              />
            </Tooltip>
            <Tooltip
              position="bottom"
              label={
                selectedRow.length > 0 ? "Delete" : "Select at least 1 row"
              }
            >
              <Delete
                style={{ color: "var(--Red)", fontSize: "2rem" }}
                className={
                  selectedRow.length === 0 ? "disableMouse" : "makeHoverable"
                }
              />
            </Tooltip>
          </Flex>
        </Flex>

        <ScrollArea
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "2%",
            height: "70vh",
          }}
        >
          <h3>Tags</h3>
          <Table
            horizontalSpacing="md"
            verticalSpacing="xs"
            miw={700}
            layout="fixed"
            highlightOnHover
            highlightOnHoverColor="#edece8"
          >
            <Table.Tbody>
              <Table.Tr>
                <Table.Th>Select</Table.Th>
                <Th
                  sorted={sortBy === "id"}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting("id")}
                >
                  <b>ID</b>
                </Th>
                <Th
                  sorted={sortBy === "name"}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting("name")}
                >
                  <b>Name</b>
                </Th>
                <Th
                  sorted={sortBy === "description"}
                  reversed={reverseSortDirection}
                  onSort={() => setSorting("description")}
                >
                  <b>Description</b>
                </Th>
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
        </ScrollArea>
      </Flex>
    </>
  );
}
