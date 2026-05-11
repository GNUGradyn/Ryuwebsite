import { RevealFx, Column, Schema, Meta, Media, Text, Heading, Button, Row } from "@once-ui-system/core";
import { donate, baseURL } from "@/resources";
import { UserAgentDownloadButton } from "@/components";
import Consts from "@/utils";

export async function generateMetadata() {
  return Meta.generate({
    title: donate.title,
    description: donate.description,
    baseURL: baseURL,
    path: donate.path,
    image: donate.image,
  });
}

export default function Donate() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={donate.path}
        title={donate.title}
        description={donate.description}
        image={`/api/og/generate?title=${encodeURIComponent(donate.title)}`}
        author={{
          name: donate.title,
          url: `${baseURL}`,
          image: `${baseURL}${donate.image}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          <RevealFx translateY="4" delay={0.1} fillWidth horizontal="center" paddingBottom="32">
            <Media src="/images/logo.svg" maxWidth={12} />
          </RevealFx>
          <RevealFx translateY="4" delay={0.1} fillWidth horizontal="center" paddingBottom="32">
            <Heading wrap="balance" variant="display-strong-l">
              {donate.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {donate.subline}
            </Text>
          </RevealFx>
        </Column>
      </Column>
    </Column>
  );
}
