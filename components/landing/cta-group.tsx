"use client";

import ConversionLink from "@/components/ConversionLink";
import { filledButton } from "@/components/buttons";
import Image from "next/image";
import { IconPhone } from "./landing-icons";

const PHONE = "tel:0526736935";
const WHATSAPP =
  "https://api.whatsapp.com/send?phone=972526736935&text=" +
  encodeURIComponent("שלום, יש לי בעיית סתימה/ביוב ואשמח לייעוץ");

export const CALL_CONVERSION = "AW-17385017560/pZqJCLDbyfcaENih6eFA";
export const WHATSAPP_CONVERSION = "AW-17385017560/_ZT_CPPR3vsaENih6eFA";

type CtaGroupProps = {
  layout?: "row" | "stack";
  className?: string;
};

export default function CtaGroup({
  layout = "row",
  className = "",
}: CtaGroupProps) {
  const flex =
    layout === "stack"
      ? "flex flex-col gap-3 w-full max-w-sm mx-auto"
      : "flex flex-col sm:flex-row gap-3 justify-center items-center";

  return (
    <div className={`${flex} ${className}`}>
      <ConversionLink
        href={PHONE}
        sendTo={CALL_CONVERSION}
        className={
          filledButton +
          " !bg-primary-sea hover:!bg-primary-text text-center min-w-[180px] flex items-center justify-center gap-2 font-bold shadow-lg"
        }
      >
        <IconPhone className="w-5 h-5" />
        התקשר עכשיו
      </ConversionLink>
      <ConversionLink
        href={WHATSAPP}
        sendTo={WHATSAPP_CONVERSION}
        className={
          filledButton +
          " !bg-[#25D366] hover:!bg-[#1da851] text-center min-w-[180px] flex items-center justify-center gap-2 font-bold shadow-lg"
        }
      >
        <Image
          src="/whatsapp-svgrepo-com.svg"
          alt=""
          width={22}
          height={22}
          className="brightness-0 invert"
        />
        שלחו WhatsApp
      </ConversionLink>
    </div>
  );
}
