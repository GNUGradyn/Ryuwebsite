"use server";

import { Button } from "@once-ui-system/core";
import { headers } from "next/headers";
import { formatSupportedPlatform, UpdateServerEndpoints } from "@/utils/downloads";

/**
 * @returns An empty JSX fragment if the requesting platform could not be detected; a clickable download button otherwise.
 */
export async function UserAgentDownloadButton() {
  const headerList = await headers();

  const variant = UpdateServerEndpoints.readUserAgent(headerList.get("user-agent"));

  if (!variant) return <></>;

  return (
    <Button
      prefixIcon="download"
      label={`${formatSupportedPlatform(variant.platform)} (${variant.cpu})`}
      href={UpdateServerEndpoints.get(variant.platform, variant.cpu)}
    ></Button>
  );
}
