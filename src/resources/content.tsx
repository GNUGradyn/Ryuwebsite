import { Home, Social } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "Forgejo",
    icon: "forgejo",
    link: "https://git.ryujinx.app/projects/Ryubing",
    essential: true,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Ryubing",
    essential: true,
  },
  {
    name: "BlueSky",
    icon: "bluesky",
    link: "https://bsky.app/profile/ryujinx.app",
    essential: true,
  },
  {
    name: "Reddit",
    icon: "reddit",
    link: "https://reddit.com/r/Ryubing",
    essential: true,
  }
];

const home: Home = {
  path: "/",
  image: "/images/logo.svg",
  label: "Home",
  title: "Ryubing",
  description: `Ryubing/Ryujinx is a fork of the discontinued Nintendo Switch emulator, written in C#. It offers excellent accuracy, high performance, a user-friendly interface, and consistent builds.`,
  headline: <>Ryubing</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">GRUKE</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured
        </Text>
      </Row>
    ),
    href: "https://nuke.greemdev.net/",
  },
  subline: (
    <>
    a Nintendo Switch 1 emulator providing excellent accuracy and performance, a user-friendly interface and consistent builds
    </>
  ),
};

export { social, home };
