import { SimpleGrid } from "@mantine/core";
import { ShortCardObject } from "../../../Types/HomePageTypes";
import ShortCard from "../../Reusable Components/ShortCard";

type Props = {
  items: ShortCardObject[];
};

export default function UserProfile(props: Props) {
  //Render Short Card Contents

  const contents = props.items.map((item) => {
    return (
      <ShortCard
        ImageLink={item.ImageLink}
        Description={item.Description}
        Title={item.Title}
        GotoLink={item.GotoLink}
      />
    );
  });

  return (
    <>
      <section className="QuickAccess_Section">
        <div className="QuickAccess_Header">
          <h2 id="Explore">Quick Access</h2>
        </div>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing={{ base: "md", sm: 100 }}
          verticalSpacing={{ base: "md", sm: 40 }}
        >
          {contents}
        </SimpleGrid>
      </section>
    </>
  );
}
