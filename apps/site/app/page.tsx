import { LandingPage } from "@/lib/components/landing-page";
import { absoluteUrl, seo, siteUrl } from "@/lib/seo";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seo.shortTitle,
    url: siteUrl,
    description: seo.description,
    inLanguage: seo.language,
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seo.shortTitle,
    url: siteUrl,
    logo: absoluteUrl("/android-chrome-512x512.png"),
    sameAs: [seo.repository, seo.npmPackage],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: seo.shortTitle,
    description: seo.description,
    url: siteUrl,
    codeRepository: seo.repository,
    license: "https://opensource.org/license/mit",
    programmingLanguage: ["TypeScript", "React", "React Native"],
    runtimePlatform: ["iOS", "Android", "Web"],
  },
];

export default function Home() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
      <LandingPage />
    </>
  );
}
