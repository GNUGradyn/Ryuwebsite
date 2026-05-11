import {
  RevealFx,
  Column,
  Schema,
  Meta,
  Media,
  Text,
  Heading,
  Card,
  Row,
  Avatar,
  Line,
  SmartLink,
  List,
  ListItem,
} from "@once-ui-system/core";
import { donate, baseURL } from "@/resources";

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
          <RevealFx translateY="4" delay={0.1} fillWidth horizontal="center" paddingBottom="l">
            <Media src="/images/logo.svg" maxWidth={12} />
          </RevealFx>
          <RevealFx translateY="4" delay={0.1} fillWidth horizontal="center" paddingBottom="s">
            <Heading wrap="balance" variant="display-strong-l">
              {donate.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {donate.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.2} fillWidth horizontal="center">
            <Row>
              <Card radius="l-4" direction="column" border="accent-strong" horizontal="center">
                <Row fillWidth paddingX="20" paddingY="12" gap="8" vertical="center">
                  <Avatar size="xl" src="/images/avatar.png" />
                  <Column>
                    <Heading>
                      <SmartLink href="https://greemdev.net" target="_blank">
                        GreemDev
                      </SmartLink>
                    </Heading>
                    <Text variant="body-default-xl">Former maintainer, current system admin</Text>
                  </Column>
                </Row>
                <Line background="neutral-alpha-medium" />
                <Column fillWidth paddingX="20" paddingY="24" gap="8">
                  <Text onBackground="neutral-weak" variant="body-default-xl">
                    My main projects are a fork of{" "}
                    <SmartLink
                      href="https://github.com/gruke-build/src"
                    >
                      NUKE
                    </SmartLink>
                    , and the Discord bot{" "}
                    <SmartLink
                      href="https://github.com/Polyhaze/Volte"
                    >
                      Volte
                    </SmartLink>. 
                    <br/><br/>
                    I am no longer the project's maintainer, but I still maintain the server & CI
                    infrastructure for this project; that is what donations to me directly fund.
                  </Text>

                  <Column horizontal="center">
                    <Text wrap="nowrap" onBackground="neutral-weak" variant="body-default-xl">
                      I also created:
                    </Text>
                    <List
                      as="ul"
                      style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                      <ListItem as="li">
                        The{" "}
                        <SmartLink href="https://github.com/Ryubing/UpdateServer">
                          Update Server
                        </SmartLink>
                      </ListItem>
                      <ListItem as="li">
                        The{" "}
                        <SmartLink
                          className="ryu-gradient-text"
                          href="https://github.com/Ryubing/RyujinxHelper"
                        >
                          Ryujinx Helper
                        </SmartLink>{" "}
                        Discord bot
                      </ListItem>
                      <ListItem as="li">
                        The <SmartLink href="https://github.com/GreemDev/GLI">GLI</SmartLink>{" "}
                        command-line tool
                      </ListItem>
                      <ListItem as="li">
                        The{" "}
                        <SmartLink
                          className="forgejo-gradient-text"
                          href="https://github.com/Ryubing/forgejo"
                        >
                          fork of Forgejo
                        </SmartLink>{" "}
                        that hosts the project's code
                      </ListItem>
                    </List>
                  </Column>
                </Column>
                <Line background="neutral-alpha-medium" />
                <Row
                  paddingX="20"
                  paddingY="12"
                  gap="8"
                  vertical="center"
                  textVariant="label-default-s"
                  onBackground="neutral-medium"
                  center
                >
                  <iframe
                    src="https://github.com/sponsors/GreemDev/button"
                    title="Sponsor GreemDev"
                    height="32"
                    width="114"
                    style={{ border: 0, borderRadius: "6px" }}
                    loading="lazy"
                  />
                </Row>
              </Card>
            </Row>
          </RevealFx>
        </Column>
      </Column>
    </Column>
  );
}
