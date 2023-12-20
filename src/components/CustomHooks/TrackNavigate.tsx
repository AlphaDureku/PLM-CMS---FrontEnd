import { Flex } from "@mantine/core";
import { ChevronLeftRounded } from "@mui/icons-material";

const useDirectoryRenderer = (directory) => {
    return directory.map((item, index) => {
        if (item !== "") {
            return (
                <Flex key={index} >
                    < ChevronLeftRounded />
                    <h3><a href={`/${item}`} > {item.charAt(0).toUpperCase() + item.slice(1)}</a></h3>
                </Flex >
            );
        }
        return null; // Return null for empty items
    });
};

export default useDirectoryRenderer