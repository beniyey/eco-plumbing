export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    navItems: [
        {
            label: "ראשי",
            href: "/",
        },
        {
            label: "עלינו",
            href: "/about",
        },
        {
            label: "שירותים",
            href: "/services",
        },
        // {
        //     label: "בלוג",
        //     href: "/blog",
        // },
        {
            label: "שאלות נפוצות",
            href: "/faq",
        }
    ],
    links: {
        github: "https://github.com/nextui-org/nextui",
        twitter: "https://twitter.com/getnextui",
        discord: "https://discord.gg/9b6yyZKmH4",
    },
};
