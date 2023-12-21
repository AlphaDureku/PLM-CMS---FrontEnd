import { useMediaQuery } from "@mantine/hooks";

const useResponsiveBreakpoints = () => {
    const firstBreakpoint = useMediaQuery('(min-width: 94em)');
    const secondBreakpoint = useMediaQuery('(min-width: 64em)');
    const thirdBreakpoint = useMediaQuery('(min-width: 54em)');
    const fourthBreakpoint = useMediaQuery('(min-width: 48em)');
    const fifthBreakpoint = useMediaQuery('(min-width: 40em)');

    return {
        firstBreakpoint,
        secondBreakpoint,
        thirdBreakpoint,
        fourthBreakpoint,
        fifthBreakpoint
    };
};

export default useResponsiveBreakpoints;
