// import { Flex, TextInput, rem } from "@mantine/core";
// import { IconSearch } from "@tabler/icons-react";
// // import { useState } from "react";
// import { TagsRowData } from "../../../Types/CmsPage";

// // const data = [
// //   {
// //     id: "2020",
// //     name: "Post 1",
// //     description:
// //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio labore minima itaque temporibus adipisci illum dolor expedita pariatur alias fugiat natus ab quas, doloribus nam rerum delectus, rem culpa et!",
// //   },
// // ];
// function filterData(data: TagsRowData[], search: string) {
//   const query = search.toLowerCase().trim();
//   const itemKeys = Object.keys(data[0]);
//   return data.filter((item) =>
//     itemKeys.some((key) => item[key].toLowerCase().includes(query))
//   );
// }
// function sortData(
//   data: TagsRowData[],
//   payload: {
//     sortBy: keyof TagsRowData | null;
//     reversed: boolean;
//     search: string;
//   }
// ) {
//   const { sortBy } = payload;

//   if (!sortBy) {
//     return filterData(data, payload.search);
//   }

//   return filterData(
//     [...data].sort((a, b) => {
//       if (payload.reversed) {
//         return b[sortBy].localeCompare(a[sortBy]);
//       }

//       return a[sortBy].localeCompare(b[sortBy]);
//     }),
//     payload.search
//   );
// }
// export default function Tags() {
//   //   const [search, setSearch] = useState("");
//   //   const [sortedData, setSortedData] = useState(data);
//   //   const [sortBy, setSortBy] = useState<keyof TagsRowData | null>(null);
//   //   const [reverseSortDirection, setReverseSortDirection] = useState(false);

//   //   const setSorting = (field: keyof TagsRowData) => {
//   //     const reversed = field === sortBy ? !reverseSortDirection : false;
//   //     setReverseSortDirection(reversed);
//   //     setSortBy(field);
//   //     setSortedData(sortData(data, { sortBy: field, reversed, search }));
//   //   };

//   //   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//   //     const { value } = event.currentTarget;
//   //     setSearch(value);
//   //     setSortedData(
//   //       sortData(data, { sortBy, reversed: reverseSortDirection, search: value })
//   //     );
//   //   };
//   return (
//     <>
//       <Flex>
//         <Flex>
//           {" "}
//           <TextInput
//             placeholder="Search an account"
//             mb="md"
//             style={{ width: "70%" }}
//             leftSection={
//               <IconSearch
//                 style={{ width: rem(16), height: rem(16) }}
//                 stroke={1.5}
//               />
//             }
//             value={search}
//             onChange={handleSearchChange}
//           />
//         </Flex>
//       </Flex>
//     </>
//   );
// }
