import { Home, Downloads, Social, Donate } from "@/types";
import Consts from "@/utils";
import { Line, Row, Text } from "@once-ui-system/core";

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "Forgejo",
    icon: "forgejo",
    link: Consts.SourceCode,
    essential: true,
  },
  {
    name: "Discord",
    icon: "discord",
    link: Consts.DiscordInvite,
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
  },
  {
    name: "Blog",
    icon: "ghost",
    link: "https://blog.ryujinx.app",
    essential: true,
  }
];

const home: Home = {
  path: "/",
  image: "/images/logo.png",
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

const downloads: Downloads = {
  path: "/download",
  image: "/images/logo.png",
  label: "Downloads",
  title: "Ryubing - Download",
  description: `Ryubing/Ryujinx is a fork of the discontinued Nintendo Switch emulator, written in C#. It offers excellent accuracy, high performance, a user-friendly interface, and consistent builds.`,
  headline: <>Get Ryubing</>,
  subline: (
    <>Download Ryujinx for Windows 10 & 11, macOS, and Linux.</>
  ),
};

const donate: Donate = {
  path: "/donate",
  image: "/images/logo.png",
  label: "Donate",
  title: "Ryubing - Donate",
  description: `Ryubing/Ryujinx is a fork of the discontinued Nintendo Switch emulator, written in C#. It offers excellent accuracy, high performance, a user-friendly interface, and consistent builds.`,
  headline: <>Donate</>,
  subline: (
    <>Want to support the project? That's awesome, thank you for supporting us!</>
  ),
};

export { social, home, downloads, donate };
