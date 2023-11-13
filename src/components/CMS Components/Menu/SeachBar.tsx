// import { TextInput, rem } from "@mantine/core";
// import { IconSearch } from "@tabler/icons-react";
// import {
//   ManageAccountRowData,
//   ManageAccountsProps,
//   TagsProps,
//   TagsRowData,
// } from "../../../Types/CmsPage";

// export default function SearchBar({
//   setSearch,
//   setSortedData,
//   data,
//   search,
//   sortBy,
//   placeholder,
//   reverseSortDirection,
// }: ManageAccountsProps | TagsProps) {
//   function sortData(
//     data: ManageAccountRowData[],
//     payload: {
//       sortBy: keyof ManageAccountRowData | null;
//       reversed: boolean;
//       search: string;
//     }
//   ) {
//     const { sortBy } = payload;

//     if (!sortBy) {
//       return filterData(data, payload.search);
//     }

//     return filterData(
//       [...data].sort((a, b) => {
//         if (payload.reversed) {
//           return b[sortBy].localeCompare(a[sortBy]);
//         }

//         return a[sortBy].localeCompare(b[sortBy]);
//       }),
//       payload.search
//     );
//   }

//   function filterData(data: ManageAccountRowData[], search: string) {
//     const query = search.toLowerCase().trim();
//     const itemKeys = Object.keys(data[0]);
//     return data.filter((item) =>
//       itemKeys.some((key) => item[key].toLowerCase().includes(query))
//     );
//   }

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { value } = event.currentTarget;
//     setSearch(value);
//     setSortedData(
//       sortData(data, { sortBy, reversed: reverseSortDirection, search: value })
//     );
//   };
//   return (
//     <>
//       <TextInput
//         placeholder={placeholder}
//         mb="md"
//         style={{ width: "70%" }}
//         leftSection={
//           <IconSearch
//             style={{ width: rem(16), height: rem(16) }}
//             stroke={1.5}
//           />
//         }
//         value={search}
//         onChange={handleSearchChange}
//       />
//     </>
//   );
// }
