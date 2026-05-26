import { SITE, PHONE_DISPLAY } from "./constants";
import type { ServiceLandingConfig } from "./types";

export function buildServiceMetadata(
  config: ServiceLandingConfig,
  cityParam?: string[]
) {
  const city = cityParam
    ? decodeURIComponent(cityParam[0])
    : "השרון והמרכז";

  const title = config.meta.title.replace("{city}", city);
  const description = config.meta.description
    .replace("{city}", city)
    .replace("{phone}", PHONE_DISPLAY);

  const path = cityParam
    ? `/services/${config.slug}/${cityParam[0]}`
    : `/services/${config.slug}`;

  const image = config.meta.ogImage.startsWith("http")
    ? config.meta.ogImage
    : `${SITE}${config.meta.ogImage}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE}${path}`,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: { canonical: `${SITE}${path}` },
    metadataBase: new URL(SITE),
  };
}
