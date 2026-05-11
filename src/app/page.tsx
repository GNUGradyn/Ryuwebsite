import {
  Text,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Media,
  Button,
} from "@once-ui-system/core";
import { home, baseURL } from "@/resources";
import { UserAgentDownloadButton } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: home.title,
          url: `${baseURL}`,
          image: `${baseURL}${home.image}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" delay={0.1} fillWidth horizontal="center" paddingBottom="32">
            <Media src="/images/wordmark.svg" maxWidth={20}/>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4} fillWidth horizontal="center" paddingBottom="32">
            <Row gap="l">
              <UserAgentDownloadButton/>
              <Button variant="tertiary" style={{ backgroundColor: '#5865F2' }} prefixIcon="discord" label="Join Discord" href="https://discord.gg/XN4xJWGzq5"/>
            </Row>
          </RevealFx>
          <RevealFx translateY="16" delay={0.4} fillWidth horizontal="stretch" paddingTop="64" paddingBottom="32">
            <Media src="/images/hero.png"/>
          </RevealFx>
        </Column>
      </Column>
    </Column>
  );
}
