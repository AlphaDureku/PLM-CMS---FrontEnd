import { Flex } from "@mantine/core";
import { ChevronLeftRounded } from "@mui/icons-material";

const useDirectoryRenderer = (directory) => {
    return directory.map((item, index) => {
        if (item !== "") {
            const indexOfTab = directory.indexOf(item)
            const subarray = directory.slice(1, indexOfTab + 1);
            const mapForURL = subarray.map((url) => {
                return ("/" + url)
            })
            let text = item.charAt(0).toUpperCase() + item.slice(1)

            return (
                <Flex key={index} >
                    < ChevronLeftRounded />
                    <h3><a href={mapForURL.join("")} > {text.replace(/%20/g, ' ')}</a></h3>
                </Flex >
            );
        }
        return null; // Return null for empty items
    });
};

export default useDirectoryRenderer