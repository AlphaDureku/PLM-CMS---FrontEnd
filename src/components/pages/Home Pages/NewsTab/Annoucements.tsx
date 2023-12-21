import GrandChildTabLayout from "../ReusableContentLayout/GrandChildTabLayout";
export default function Announcements() {
    const childs: string[] = [
        "Announcements",
        "Newsletters",
        "Message from the University President",
        "Careers and Job Openings"
    ]

    return (<>
        <GrandChildTabLayout childs={childs} />
    </>)
}