import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Team = {
  name: string;
  role: string;
  avatar: string;
  github: string;
};

type Metadata = {
  title: string;
  subtitle?: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  link?: string;
  linkIcon: IconName;
  includeRelatedPosts: boolean;
};

import { notFound } from "next/navigation";
import { IconName } from "@once-ui-system/core";

function getMDXFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    notFound();
  }

  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string): { metadata: Metadata, content: string } {
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || "",
    subtitle: data.subtitle || "",
    publishedAt: data.publishedAt,
    summary: data.summary || "",
    image: data.image || "",
    images: data.images || [],
    tag: data.tag || [],
    team: data.team || [],
    link: data.link || "",
    linkIcon: data.linkIcon || "arrowUpRightFromSquare",
    includeRelatedPosts: data.includeRelatedPosts ?? true
  };

  return { metadata, content };
}

function getMDXData(dir: string): { metadata: Metadata, slug: string, content: string }[] {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(customPath = ["", "", "", ""]): { metadata: Metadata, slug: string, content: string }[]  {
  const postsDir = path.join(process.cwd(), ...customPath);
  return getMDXData(postsDir);
}
