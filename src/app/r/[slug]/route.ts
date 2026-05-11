import Consts from "@/utils";
import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

const redirects: Record<string, string> = {
  discord: Consts.DiscordInvite,
  github: "https://github.com/Ryubing",
  code: Consts.SourceCode,
}

export async function GET(_req: NextRequest, ctx: RouteContext<"/r/[slug]">) {
  const { slug } = await ctx.params;

  const redir = redirects[slug];

  if (!redir) {
    notFound();
  }
  
  return NextResponse.redirect(redir, { status: 302 });
}
