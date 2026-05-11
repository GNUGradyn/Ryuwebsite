import { notFound } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

const redirects: Record<string, string> = {
  discord: "https://discord.gg/XN4xJWGzq5",
  github: "https://github.com/Ryubing",
  code: "https://git.ryujinx.app/projects/Ryubing",
}

export async function GET(_req: NextRequest, ctx: RouteContext<"/r/[slug]">) {
  const { slug } = await ctx.params;

  const redir = redirects[slug];

  if (!redir) {
    notFound();
  }
  
  return NextResponse.redirect(redir, { status: 302 });
}
