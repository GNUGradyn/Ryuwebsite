import { About, Blog, Home, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";
import { calculateAge } from "@/utils/dates";

const person: Person = {
  name: "GreemDev",
  role: "Hobbyist Programmer",
  avatar: "/images/avatar.png",
  email: "greemdev@ryujinx.app"
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "BlueSky",
    icon: "bluesky",
    link: "https://bsky.app/profile/greemdev.net",
    essential: true,
  },
  {
    name: "Codeberg",
    icon: "codeberg",
    link: "https://codeberg.org/greem",
    essential: true,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/GreemDev",
    essential: true,
  },
  {
    name: "GitLab",
    icon: "gitlab",
    link: "https://gitlab.com/greemryu",
    essential: true,
  },
  {
    name: "Twitch",
    icon: "twitch",
    link: "https://www.twitch.tv/greemdev",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/projects/ryu/ryubing_banner_project.jpg",
  label: "Home",
  title: person.name,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hey there, I'm GreemDev</>,
  featured: {
    display: true,
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
    I'm a {calculateAge(16, 4, 2002)} year old self taught hobbyist programmer with 8 years of experience. I build open source tools and software using mainly C#.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Greem is a US-based hobbyist developer with a passion for the things a lot of people find boring or complex. 
        CI configurations, CLI tools, build automation. I also dabble in emulation, as I am the system admin and some times contributor to Ryubing.
      </>
    ),
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Avalonia",
        description: (
          <>Able to create pretty UIs with Avalonia.</>
        ),
        tags: [
          {
            name: "C#",
            icon: "dotnet",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/ryu/ui_example.png",
            alt: "Some of my work",
            width: 16,
            height: 9,
          },
          {
            src: "/images/skills/avalonia.png",
            alt: "Avalonia",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "C#",
        description: (
          <>Building open-source tools primarily in C#.</>
        ),
        tags: [
          {
            name: "C#",
            icon: "dotnet",
          }
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Kotlin",
        description: (
          <>When I need to use the JVM, I use Kotlin.</>
        ),
        tags: [
          {
            name: "Kotlin",
            icon: "kotlin",
          }
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about software & tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Projects from ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, home, about, blog, work };
