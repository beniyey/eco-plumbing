import Logo from "./logo";
import { filledButton } from "./buttons";
import Image from "next/image";
import Link from "next/link";
import { IconPhone } from "./landing/landing-icons";

const services = [
  { href: "/services/leak-detection", label: "איתור נזילות" },
  { href: "/services/drain-cleaning", label: "פתיחת סתימות" },
  { href: "/services/jetting", label: "צילום ושטיפת קווים" },
  { href: "/services/no-dig-solutions", label: "תיקון ללא הרס" },
  { href: "/services/plumbing", label: "אינסטלציה כללית" },
];

const links = [
  { href: "/", label: "עמוד הבית" },
  { href: "/about", label: "קצת עלינו" },
  { href: "/contact", label: "צור קשר" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-sea text-white mt-auto">
      <div className="container max-w-6xl mx-auto px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 text-right">
          {/* Brand + contact */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <span className="[&_svg]:brightness-0 [&_svg]:invert opacity-95">
              <Logo width={120} />
            </span>
            <p className="text-white/75 text-sm leading-relaxed">
              שירותי אינסטלציה מתקדמים — פתיחת סתימות, צילום קווים ופתרונות ללא הרס.
            </p>
            <div className="flex flex-row-reverse gap-3">
              <Link
                href="tel:0526736935"
                title="התקשרו"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-secondary-text hover:text-primary-text transition-colors"
              >
                <IconPhone className="w-5 h-5" />
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=972526736935"
                title="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-[#25D366] transition-colors"
              >
                <Image
                  src="/whatsapp-svgrepo-com.svg"
                  height={20}
                  width={20}
                  alt=""
                  className="brightness-0 invert"
                />
              </Link>
              <Link
                href="mailto:bensp@eco-plumbers.com"
                title="אימייל"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Image
                  src="/gmail-svgrepo-com.svg"
                  height={20}
                  width={20}
                  alt=""
                  className="brightness-0 invert opacity-90"
                />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-secondary-text font-bold mb-3 text-sm uppercase tracking-wide">
              שירותים
            </h2>
            <ul className="flex flex-col gap-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-white/80 text-sm hover:text-secondary-text transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-secondary-text font-bold mb-3 text-sm uppercase tracking-wide">
              קישורים
            </h2>
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/80 text-sm hover:text-secondary-text transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-white/60 text-xs mt-4">
              א׳–ה׳ 07:00–20:00 • חירום 24/7
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-3 items-start">
            <Link
              href="tel:0526736935"
              className="text-2xl font-bold text-secondary-text hover:text-white transition-colors"
            >
              052-6736935
            </Link>
            <p className="text-white/70 text-sm">
              הצעת מחיר לכל עבודה — גם ללא הגעה לפי הצורך.
            </p>
            <Link href="/contact" className={filledButton + " !text-sm"}>
              צור קשר
            </Link>
          </div>
        </div>

        <div className="border-t border-white/15 mt-8 pt-6 flex flex-col sm:flex-row-reverse justify-between items-center gap-3 text-white/50 text-xs">
          <p>© {new Date().getFullYear()} אקו אינסטלציה — כל הזכויות שמורות</p>
          <a
            href="https://www.midrag.co.il/SpCard/Sp/128232?sectorId=4&listId=2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary-text transition-colors"
          >
            ביקורות במדרג
          </a>
        </div>
      </div>
    </footer>
  );
}
