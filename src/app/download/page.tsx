import { RevealFx, Column, Schema, Meta, Media, Text, Heading, Button, Row } from "@once-ui-system/core";
import { downloads, baseURL } from "@/resources";
import { UserAgentDownloadButton } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: downloads.title,
    description: downloads.description,
    baseURL: baseURL,
    path: downloads.path,
    image: downloads.image,
  });
}

export default function Downloads() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={downloads.path}
        title={downloads.title}
        description={downloads.description}
        image={`/api/og/generate?title=${encodeURIComponent(downloads.title)}`}
        author={{
          name: downloads.title,
          url: `${baseURL}`,
          image: `${baseURL}${downloads.image}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          <RevealFx translateY="4" delay={0.1} fillWidth horizontal="center" paddingBottom="32">
            <Media src="/images/logo.svg" maxWidth={12} />
          </RevealFx>
          <RevealFx translateY="4" delay={0.1} fillWidth horizontal="center" paddingBottom="32">
            <Heading wrap="balance" variant="display-strong-l">
              {downloads.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {downloads.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4} fillWidth horizontal="center" paddingBottom="32">
            <Row gap="l">
              <UserAgentDownloadButton />
              <Button
                variant="tertiary"
                style={{ backgroundColor: "#5865F2" }}
                prefixIcon="discord"
                label="Join Discord"
                href="https://discord.gg/XN4xJWGzq5"
              />
            </Row>
          </RevealFx>
        </Column>
      </Column>
    </Column>
  );
}
