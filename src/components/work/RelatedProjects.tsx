import { getPosts } from "@/utils/utils";
import { Column, Heading, Line } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface RelatedProjectsProps {
  exclude?: string[];
}

export function RelatedProjects({ exclude }: RelatedProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = sortedProjects.slice(1, sortedProjects.length);

  return (
    <>
      {displayedProjects.length > 0 && (
        <Column fillWidth gap="40" horizontal="center" marginTop="40">
          <Line maxWidth="40" />
          <Heading as="h2" variant="heading-strong-xl" marginBottom="24">
            Related projects
          </Heading>
          <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
            {displayedProjects.map((post, index) => (
              <ProjectCard
                priority={index < 2}
                key={post.slug}
                href={`/work/${post.slug}`}
                images={post.metadata.images}
                title={post.metadata.title}
                description={post.metadata.summary}
                content={post.content}
                avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
                link={post.metadata.link || ""}
                linkIcon={post.metadata.linkIcon}
              />
            ))}
          </Column>
        </Column>
      )}
    </>
  );
}
