import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

const redirects: Record<string, string> = {
  discord: "https://discord.gg/H8bcFr2",
  github: "https://github.com/GreemDev",
  codeberg: "https://codeberg.org/greem",
  nuke: "https://github.com/gruke-build/src",
}

export async function GET(_req: NextRequest, ctx: RouteContext<"/r/[slug]">) {
  const { slug } = await ctx.params;

  const redir = redirects[slug];

  if (!redir) {
    notFound();
  }
  
  return NextResponse.redirect(redir, { status: 302 });
}
