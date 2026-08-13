import { NextResponse } from "next/server";
import { project } from "@/lib/site-data";

const registryUrl = `https://registry.npmjs.org/${encodeURIComponent(project.packageName)}`;
const cacheSeconds = 60 * 60;

interface RegistryMetadata {
  "dist-tags"?: {
    latest?: unknown;
  };
}

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const response = await fetch(registryUrl, {
      headers: {
        Accept: "application/vnd.npm.install-v1+json",
      },
      next: {
        revalidate: cacheSeconds,
      },
    });

    if (!response.ok) {
      throw new Error(`npm registry returned ${response.status}`);
    }

    const metadata = (await response.json()) as RegistryMetadata;
    const version = metadata["dist-tags"]?.latest;

    if (typeof version !== "string" || version.length === 0) {
      throw new Error("npm registry did not return a latest version");
    }

    return NextResponse.json(
      { version },
      {
        headers: {
          "Cache-Control":
            "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
        },
      },
    );
  } catch {
    return NextResponse.json(
      { version: project.version },
      {
        headers: {
          "Cache-Control": "public, max-age=0, s-maxage=300",
        },
      },
    );
  }
}
