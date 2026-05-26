import ServiceLanding from "@/components/landing/service-landing";
import { serviceLandings } from "@/data/service-landings";
import { buildServiceMetadata } from "@/lib/landing/metadata";

const config = serviceLandings.jetting;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city?: string[] }>;
}) {
  const { city: cityParam } = await params;
  return buildServiceMetadata(config, cityParam);
}

export default async function Page({
  params,
}: {
  params: Promise<{ city?: string[] }>;
}) {
  const { city: cityParam } = await params;
  const cityLabel = cityParam ? decodeURIComponent(cityParam[0]) : undefined;

  return <ServiceLanding config={config} cityLabel={cityLabel} />;
}
