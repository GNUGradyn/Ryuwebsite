import {
    RevealFx,
    Column,
    Schema,
    Meta,
    Media,
    Text,
    Heading,
    Button,
    Row,
    Card,
    Line,
    Icon
} from "@once-ui-system/core";
import {downloads, baseURL} from "@/resources";
import Consts from "@/utils";
import {DownloadButton} from "@/components/DownloadButtons";
import {formatSupportedCPU, ReleaseChannel} from "@/utils/downloads";

export async function generateMetadata() {
    return Meta.generate({
        title: downloads.title,
        description: downloads.description,
        baseURL: baseURL,
        path: downloads.path,
        image: downloads.image,
    });
}

export default async function Downloads(
    {
        searchParams,
    }: {
        searchParams: Promise<{ [key: string]: string | string[] | undefined }>
    }
) {
    const sp = (await searchParams);

    console.log(JSON.stringify(sp))

    let rawRc = sp.rc

    if (rawRc === undefined) {
        if (sp.canary !== undefined) {
            rawRc = "canary"
        }
    }

    const rc: ReleaseChannel = typeof rawRc !== "string"
        ? "stable"
        : rawRc.toLowerCase() as ReleaseChannel

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
                        <Media src="/images/logo.svg" maxWidth={12}/>
                    </RevealFx>
                    <RevealFx translateY="4" delay={0.1} fillWidth horizontal="center" paddingBottom="24">
                        <Heading wrap="balance" variant="display-strong-l">
                            {downloads.headline}
                        </Heading>
                    </RevealFx>
                    <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
                        <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
                            {downloads.subline}
                        </Text>
                    </RevealFx>
                    <RevealFx translateY="16" delay={0.4} fillWidth horizontal="center">
                        <Column horizontal="center" gap="l">
                            <Row gap="l" fillWidth>
                                <Card radius="l-4" direction="column" border="brand-strong" horizontal="center">
                                    <Row fillWidth paddingX="20" paddingY="12" gap="xs" horizontal="center">
                                        <Icon name="windows" size="xl" style={{color: "#357EC7"}}/>
                                        <Column vertical="center">
                                            <Heading>Windows</Heading>
                                            <Line background="neutral-alpha-medium"/>
                                            <Text onBackground="neutral-weak" variant="body-default-xl">
                                                Available for Windows 10 and 11.
                                            </Text>
                                        </Column>
                                    </Row>
                                    <Line background="neutral-alpha-medium"/>
                                    <Row horizontal="center" padding="m" gap="l">
                                        <DownloadButton platform="win" cpu="x64" rc={rc}/>
                                    </Row>
                                </Card>
                                <Card radius="l-4" direction="column" border="brand-strong" horizontal="center">
                                    <Row fillWidth paddingX="20" paddingY="12" gap="xs" horizontal="center">
                                        <Media src="/images/apple.svg" maxWidth={4} maxHeight={4}/>
                                        <Column vertical="center">
                                            <Heading>macOS</Heading>
                                            <Line background="neutral-alpha-medium"/>
                                            <Text onBackground="neutral-weak" variant="body-default-xl">
                                                Only Apple Silicon is officially supported.
                                            </Text>
                                        </Column>
                                    </Row>
                                    <Line background="neutral-alpha-medium"/>
                                    <Row horizontal="center" padding="m" gap="l">
                                        <DownloadButton platform="mac" cpu="arm64" rc={rc}
                                                        getLabel="Mac (Apple Silicon)"/>
                                    </Row>
                                </Card>
                            </Row>
                            <Row horizontal="center">
                                <Card radius="l-4" direction="column" border="brand-strong">
                                    <Row fillWidth paddingX="20" paddingY="12" gap="xs">
                                        <Icon name="tux" size="xl"/>
                                        <Column vertical="center">
                                            <Heading>Linux</Heading>
                                            <Line background="neutral-alpha-medium"/>
                                            <Text onBackground="neutral-weak" variant="body-default-xl">
                                                We have tarballs, including a standard Linux executable with all of the
                                                dependencies needed to run it included.<br/>
                                                Additionally, we offer AppImages, of both architectures, for those who
                                                wish to use it.
                                            </Text>
                                        </Column>
                                    </Row>
                                    <Line background="neutral-alpha-medium"/>
                                    <Column gap="s" padding="m">
                                        <Row horizontal="center" gap="m">
                                            <DownloadButton platform="linux" cpu="x64" rc={rc}
                                                            getLabel={(_, cpu, ___) => `Tarball: ${formatSupportedCPU(cpu)}`}/>
                                            <DownloadButton platform="linux" cpu="arm64" rc={rc}
                                                            getLabel={(_, cpu, ___) => `Tarball: ${formatSupportedCPU(cpu)}`}/>
                                        </Row>
                                        <Row horizontal="center" gap="m">
                                            <DownloadButton platform="linuxai" cpu="x64" rc={rc}
                                                            getLabel={(_, cpu, ___) => `AppImage: ${formatSupportedCPU(cpu)}`}/>
                                            <DownloadButton platform="linuxai" cpu="arm64" rc={rc}
                                                            getLabel={(_, cpu, ___) => `AppImage: ${formatSupportedCPU(cpu)}`}/>
                                        </Row>
                                    </Column>
                                </Card>
                            </Row>
                        </Column>
                    </RevealFx>
                    <RevealFx translateY="12" delay={0.4} fillWidth horizontal="center" paddingTop="32">
                        <Row gap="l">
                            <Button
                                variant="tertiary"
                                style={{backgroundColor: "#5865F2"}}
                                prefixIcon="discord"
                                label="Join Discord"
                                href={Consts.DiscordInvite}
                            />
                        </Row>
                    </RevealFx>
                </Column>
            </Column>
        </Column>
    );
}
