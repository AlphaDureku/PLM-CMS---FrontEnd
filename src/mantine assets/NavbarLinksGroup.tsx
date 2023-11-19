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
import { ArrowRightRounded } from "@mui/icons-material/";
import { IconChevronRight } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { LinksGroupProps } from "../Types/CmsPage";
import classes from "./NavbarLinksGroup.module.css";

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
  const [selectedChild, setSelectedChild] = useState("");

  useEffect(() => {
    setSelectedChild("");
  }, [selected]);

  const items = (hasLinks ? links : []).map((link) => (
    <Text<"a">
      component="a"
      className={classes.link}
      href={link.link}
      key={link.label}
      onClick={(event) => {
        event.preventDefault();
        setSelectedChild(link.label);
      }}
    >
      <Flex
        align={"center"}
        style={{
          color: link.label === selectedChild ? "var(--Yellow)" : "var(--Grey)",
        }}
      >
        <ArrowRightRounded /> <h4>{link.label}</h4>
      </Flex>
    </Text>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => {
          setOpened((o) => !o);
          setSelected((prev) => {
            prev.set("Tab", label);
            return prev;
          });
        }}
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
            <ThemeIcon
              size={"4rem"}
              className="ParentThemeIcon"
              color="transparent"
            >
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
