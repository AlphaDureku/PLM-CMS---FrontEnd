import {
  Box,
  Collapse,
  Flex,
  Group,
  Text,
  ThemeIcon,
  UnstyledButton,
  rem,
} from "@mantine/core";
import { ArrowRightRounded, HomeRounded } from "@mui/icons-material/";
import { IconCalendarStats, IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";
import classes from "./NavbarLinksGroup.module.css";
interface LinksGroupProps {
  icon:
    | React.ComponentType<React.ComponentProps<typeof IconCalendarStats>>
    | React.ComponentType<React.ComponentProps<typeof HomeRounded>>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  keys: string;
}

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  selected,
  setSelected,
  keys,
}: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <Text<"a">
      component="a"
      className={classes.link}
      href={link.link}
      key={link.label}
      onClick={(event) => event.preventDefault()}
    >
      <Flex align={"center"} style={{ color: "var(--Grey)" }}>
        <ArrowRightRounded /> {link.label}
      </Flex>
    </Text>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => (setOpened((o) => !o), setSelected(label))}
        className={classes.control}
      >
        <Group justify="space-between" gap={0}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Box ml="md">
              <h3
                style={{
                  color: selected === keys ? "var(--Yellow)" : "var(--Grey)",
                }}
              >
                {label}
              </h3>
            </Box>
          </Box>
          <Group>
            {hasLinks && (
              <IconChevronRight
                className={classes.chevron}
                stroke={1.5}
                style={{
                  width: rem(16),
                  height: rem(16),
                  transform: opened ? "rotate(-90deg)" : "none",
                }}
              />
            )}
            <ThemeIcon variant="white" size={"4rem"}>
              <Icon
                style={{
                  color: selected === keys ? "var(--Yellow)" : "var(--Grey)",

                  fontSize: "2.2rem",
                }}
              />
            </ThemeIcon>
          </Group>
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
