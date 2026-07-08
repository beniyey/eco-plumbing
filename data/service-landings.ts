import type { ServiceLandingConfig } from "@/lib/landing/types";
import {
  DEFAULT_PROCESS,
  DEFAULT_WHY_US,
  SITE,
} from "@/lib/landing/constants";

const baseGallery = (hero: string, extra?: { src: string; alt: string; label: string }[]) => [
  { src: hero, alt: "ציוד עבודה מקצועי", label: "ציוד מתקדם" },
  { src: "/images/plumber-working.jpg", alt: "עבודה בשטח", label: "צוות מקצועי" },
  ...(extra || []),
  { src: "/images/quality-control.jpg", alt: "בדיקה מקצועית", label: "אבחון וצילום" },
];

export const serviceLandings: Record<string, ServiceLandingConfig> = {
  jetting: {
    slug: "jetting",
    heroImage: "/images/jetter-service.png",
    hero: {
      title: "סתימה שחוזרת?",
      titleHighlight: "נפתור את זה מהשורש",
      subtitle:
        "פתיחת סתימות, צילום קווי ביוב וטיפול בשורשים עם ציוד מתקדם — כדי לפתור את הבעיה מהשורש, לא רק לפתוח אותה זמנית.",
    },
    problemsSection: {
      title: "סתימה חוזרת? ביוב שעולה? ריח רע מהצנרת?",
      subtitle:
        "במקרים רבים סתימה היא רק סימפטום. שורשים, שבר בצנרת או שיפוע לא תקין יכולים לגרום לסתימות חוזרות. אנחנו מאתרים את מקור הבעיה בעזרת צילום מתקדם.",
    },
    problems: [
      { title: "סתימות חוזרות", icon: "refresh", desc: "פתיחה זמנית לא פותרת — לרוב יש גורם עמוק בקו." },
      { title: "שורשים בצנרת", icon: "leaf", desc: "חדירת שורשים שסותמת את הקו ודורשת טיפול ממוקד." },
      { title: "ריח ביוב", icon: "wind", desc: "ריח מתמשך מצביע על בעיה בקו הביוב." },
      { title: "מים שעולים במקלחת / אסלה", icon: "droplets", desc: "הצפה או גובה מים — סימן לסתימה או חסימה." },
      { title: "זרימה איטית", icon: "slow", desc: "ניקוז חלש לפני סתימה מלאה — כדאי לטפל מוקדם." },
      { title: "חשד לשבר או שיפוע לא תקין", icon: "alert", desc: "צילום קו מאשר מצב הצנרת לפני תיקון." },
    ],
    packages: [
      { name: "פתיחת סתימה בסיסית", price: "החל מ־400–650 ₪ + מע״מ", desc: "סתימות בכיור, מקלחת או אסלה בגישה נוחה.", recommended: false },
      { name: "פתיחת סתימה בקו ביוב", price: "החל מ־600 ₪ + מע״מ", desc: "קו חיצוני או קו ראשי.", recommended: false },
      { name: "פתיחת סתימה + צילום קו", price: "החל מ־1,200 ₪ + מע״מ", desc: "מתאים לסתימות חוזרות וחשד לשורשים.", recommended: true },
      { name: "טיפול שורשים + שטיפה + צילום", price: "החל מ־1,200–2,500 ₪ + מע״מ", desc: "קווים עם שורשים או הצפות חוזרות.", recommended: false },
      { name: "צילום קו ביוב בלבד", price: "החל מ־900–1,500 ₪ + מע״מ", desc: "בדיקת מצב הצנרת והמלצה מקצועית.", recommended: false },
    ],
    packagesSubtitle: "מחירים שקופים לפי סוג התקלה, מורכבות העבודה והציוד הנדרש.",
    whyUs: DEFAULT_WHY_US,
    processSteps: DEFAULT_PROCESS,
    gallery: baseGallery("/images/jetter-service.png", [
      { src: "/images/drain-cleaning-service.png", alt: "פתיחת סתימה", label: "פתיחה מקצועית" },
    ]),
    videoUrl: "https://www.youtube.com/embed/JYfWcU1xvoQ",
    gallerySubtitle: "אנחנו משתמשים בציוד צילום כדי להבין מה קורה בתוך הצנרת — ולא רק לנחש.",
    faq: [
      { title: "כמה עולה פתיחת סתימה?", content: "המחיר מתחיל מ־400–650 ₪ + מע״מ לסתימות פשוטות, ועולה לפי מורכבות וציוד." },
      { title: "מתי צריך צילום קו ביוב?", content: "בסתימות חוזרות, ריח ביוב, חשד לשורשים או שבר בקו." },
      { title: "האם אתם מבצעים ביובית?", content: "אנחנו מבצעים פתיחה, שטיפות, צילום וטיפול בשורשים. ביובית כבדה — נעדכן מראש." },
      { title: "האם ניתן לפתור בלי לשבור?", content: "במקרים רבים כן — צילום ואבחון מאפשרים פתרון ללא הרס." },
      { title: "באילו אזורים אתם עובדים?", content: "השרון והמרכז — הרצליה, רעננה, כפר סבא, נתניה, תל אביב והסביבה." },
    ],
    finalCta: {
      title: "יש סתימה או בעיה חוזרת בצנרת?",
      subtitle: "דברו איתנו עכשיו — פתיחה, צילום, שטיפה או טיפול מתקדם.",
    },
    meta: {
      title: "פתיחת סתימות מקצועית {city} | צילום קווי ביוב | אקו אינסטלציה",
      description: "פתיחת סתימות, צילום קווי ביוב וטיפול בשורשים ב{city}. ציוד מתקדם ומחירים שקופים. התקשרו {phone}.",
      ogImage: "/images/jetter-service.png",
    },
  },

  "drain-cleaning": {
    slug: "drain-cleaning",
    heroImage: "/images/drain-cleaning-service.png",
    hero: {
      title: "סתימה דחופה?",
      titleHighlight: "מגיעים עם הציוד הנכון",
      subtitle:
        "פתיחת סתימות מקצועית בבית ובעסק — כיור, מקלחת, קו ביוב ועוד. אבחון מדויק, עבודה נקייה ופתרון יסודי.",
    },
    problemsSection: {
      title: "סתימה בבית או בעסק?",
      subtitle: "כל סתימה יכולה להסלים מהר — הצפה, ריח ונזק לריצוף. אנחנו פותרים את הבעיה בצורה מקצועית ומהירה.",
    },
    problems: [
      { title: "סתימה בכיור או מקלחת", icon: "droplets", desc: "פתיחה נקייה בלי נזק למערכת." },
      { title: "סתימה באסלה", icon: "alert", desc: "טיפול מיידי לפני הצפה." },
      { title: "קו ביוב ראשי", icon: "slow", desc: "ציוד מתאים לקווים חיצוניים ופנימיים." },
      { title: "ריח רע מהניקוז", icon: "wind", desc: "ניקוי יסודי והמלצה למניעה." },
      { title: "סתימה חוזרת", icon: "refresh", desc: "בדיקה מעמיקה למציאת הגורם." },
      { title: "זרימה איטית", icon: "slow", desc: "טיפול לפני שהבעיה מחמירה." },
    ],
    packages: [
      { name: "פתיחת סתימה נקודתית", price: "החל מ־400–650 ₪ + מע״מ", desc: "כיור, מקלחת או אסלה.", recommended: false },
      { name: "פתיחת קו ביוב", price: "החל מ־600 ₪ + מע״מ", desc: "קו ראשי או חיצוני.", recommended: false },
      { name: "פתיחה + בדיקת קו", price: "החל מ־1,000 ₪ + מע״מ", desc: "מתאים לסתימות חוזרות.", recommended: true },
    ],
    whyUs: DEFAULT_WHY_US,
    processSteps: DEFAULT_PROCESS,
    gallery: baseGallery("/images/drain-cleaning-service.png"),
    faq: [
      { title: "כמה עולה פתיחת סתימה?", content: "החל מ־400–650 ₪ + מע״מ, לפי מורכבות וגישה." },
      { title: "כמה מהר אתם מגיעים?", content: "זמינות מהירה באזור השרון והמרכז, כולל מקרי חירום." },
      { title: "האם העבודה מלכלכת?", content: "אנחנו עובדים בצורה מסודרת ונקייה ככל האפשר." },
      { title: "באילו אזורים אתם עובדים?", content: "השרון והמרכז והסביבה." },
    ],
    finalCta: { title: "צריך לפתוח סתימה עכשיו?", subtitle: "התקשרו או שלחו WhatsApp — נגיע עם הציוד המתאים." },
    meta: {
      title: "פתיחת סתימות {city} | שירות מקצועי | אקו אינסטלציה",
      description: "פתיחת סתימות מקצועית ב{city}. זמינות מהירה, ציוד מתקדם. {phone}",
      ogImage: "/images/drain-cleaning-service.png",
    },
  },

  "leak-detection": {
    slug: "leak-detection",
    heroImage: "/images/leak-detection.png",
    hero: {
      title: "נזילה נסתרת?",
      titleHighlight: "נאתר בלי לנחש",
      subtitle:
        "איתור נזילות מדויק עם מצלמה תרמית, צילום וציוד מתקדם — בלי לשבור קירות שלא לצורך.",
    },
    problemsSection: {
      title: "כתם רטוב? לחות בקיר? חשבון מים קפץ?",
      subtitle: "נזילה שלא מטופלת גורמת לנזק יקר. אנחנו מאתרים את המקור במדויק ומציעים פתרון.",
    },
    problems: [
      { title: "כתם רטוב בתקרה או בקיר", icon: "droplets", desc: "איתור מקור הנזילה לפני הרחבת הנזק." },
      { title: "חשבון מים גבוה", icon: "alert", desc: "בדיקת נזילה נסתרת במערכת." },
      { title: "ריח עובש או לחות", icon: "wind", desc: "אבחון לחות ונזילות בקירות." },
      { title: "נזילה מתחת לריצוף", icon: "slow", desc: "ציוד לאיתור בלי פירוק מיותר." },
      { title: "נזילה בקו נסתר", icon: "refresh", desc: "מצלמה תרמית וציוד איתור מתקדם." },
      { title: "חשד לנזילה בדוד", icon: "alert", desc: "בדיקה מקיפה והמלצה לתיקון." },
    ],
    whyUs: DEFAULT_WHY_US,
    processSteps: DEFAULT_PROCESS,
    gallery: baseGallery("/images/leak-detection.png"),
    faq: [
      { title: "איך מאתרים נזילה בלי לשבור?", content: "באמצעות מצלמה תרמית, מכשירי איתור וניסיון בשטח." },
      { title: "כמה עולה איתור נזילה?", content: "לפי היקף הבדיקה — הצעת מחיר לאחר שיחה קצרה." },
      { title: "האם אתם גם מתקנים?", content: "כן — איתור ותיקון במקום ככל האפשר." },
      { title: "באילו אזורים?", content: "השרון והמרכז." },
    ],
    finalCta: { title: "חושדים בנזילה?", subtitle: "נאתר את המקור ונציע פתרון ברור — בלי בזבוז זמן וכסף." },
    meta: {
      title: "איתור נזילות {city} | ללא שבירה מיותרת | אקו אינסטלציה",
      description: "איתור נזילות מדויק ב{city}. מצלמה תרמית וציוד מתקדם. {phone}",
      ogImage: "/images/leak-detection.png",
    },
  },

  "pipe-repair": {
    slug: "pipe-repair",
    heroImage: "/images/pipe-fitting.jpg",
    hero: {
      title: "בעיה בצנרת?",
      titleHighlight: "תיקון מקצועי ויציב",
      subtitle: "תיקוני צנרת מים וביוב — החלפות, חיבורים, קווים ישנים ותקלות מורכבות.",
    },
    problemsSection: {
      title: "נזילה, לחץ חלש או צנרת ישנה?",
      subtitle: "תיקון נכון חוסך נזקים עתידיים. אנחנו עובדים בצורה מסודרת עם חומרים איכותיים.",
    },
    problems: [
      { title: "נזילה בצינור", icon: "droplets", desc: "תיקון נקודתי או החלפת קטע." },
      { title: "צנרת ישנה או סדוקה", icon: "alert", desc: "החלפה או שדרוג לפי הצורך." },
      { title: "לחץ מים חלש", icon: "slow", desc: "בדיקת הקו ותיקון מקור הבעיה." },
      { title: "בעיה בקו ביוב", icon: "wind", desc: "תיקון מקצועי עם אחריות." },
      { title: "חיבור חדש", icon: "refresh", desc: "התקנות מדויקות לכלים סניטריים." },
      { title: "נזק לאחר עבודות", icon: "alert", desc: "פתרון מהיר ואמין." },
    ],
    whyUs: DEFAULT_WHY_US,
    processSteps: DEFAULT_PROCESS,
    gallery: baseGallery("/images/pipe-fitting.jpg", [{ src: "/images/pipes-arranged.jpg", alt: "צנרת", label: "תיקוני צנרת" }]),
    faq: [
      { title: "האם אתם מתקנים גם קווים חיצוניים?", content: "כן — מים, ביוב וקווים נסתרים." },
      { title: "יש אחריות על העבודה?", content: "אנחנו עומדים מאחורי העבודה שאנחנו מבצעים." },
      { title: "כמה עולה תיקון צנרת?", content: "לפי סוג התקלה — הצעת מחיר לפני עבודה." },
      { title: "באילו אזורים?", content: "השרון והמרכז." },
    ],
    finalCta: { title: "צריך תיקון צנרת?", subtitle: "נבדוק, נסביר ונבצע תיקון מקצועי — התקשרו עכשיו." },
    meta: {
      title: "תיקוני צנרת {city} | אקו אינסטלציה",
      description: "תיקוני צנרת מקצועיים ב{city}. מים וביוב. {phone}",
      ogImage: "/images/pipe-fitting.jpg",
    },
  },

  "no-dig-solutions": {
    slug: "no-dig-solutions",
    heroImage: "/images/plumbing-service.png",
    hero: {
      title: "צנרת סדוקה מתחת לריצוף?",
      titleHighlight: "בלי לשבור את הבית",
      subtitle:
        "תיקון צנרת ללא הרס — צילום קו, אבחון מדויק ופתרונות מתקדמים בלי לפתוח קירות ורצפה.",
    },
    problemsSection: {
      title: "לא חייבים לשבור כדי לתקן",
      subtitle: "במקרים רבים ניתן לטפל בצנרת סמויה עם טכנולוגיה מתקדמת — חוסך זמן, כסף ובלגן.",
    },
    problems: [
      { title: "סדק בצינור סמוי", icon: "alert", desc: "אבחון ותיקון נקודתי." },
      { title: "נזילה מתחת לריצוף", icon: "droplets", desc: "איתור לפני פירוק מיותר." },
      { title: "שורשים בקו", icon: "leaf", desc: "טיפול מקצועי בקו." },
      { title: "צנרת ישנה בקיר", icon: "slow", desc: "פתרונות ללא הרס במקרים מתאימים." },
      { title: "צריך צילום לפני שיפוץ", icon: "camera", desc: "צילום קו ודוח מצב." },
      { title: "רוצים למנוע שבירה", icon: "shield", desc: "בודקים אפשרויות ללא הרס." },
    ],
    whyUs: DEFAULT_WHY_US,
    processSteps: DEFAULT_PROCESS,
    gallery: baseGallery("/images/plumbing-service.png"),
    faq: [
      { title: "מה זה תיקון ללא הרס?", content: "טיפול בצנרת סמויה עם צילום, ניקוי וחיזוק פנימי — בלי לשבור ריצוף." },
      { title: "מתי זה אפשרי?", content: "לאחר צילום ואבחון — נדע אם ניתן בלי פתיחה." },
      { title: "האם זה יקר יותר?", content: "לעיתים חוסך עלות שבירה ושיפוץ — נבדוק לפי מקרה." },
      { title: "באילו אזורים?", content: "השרון והמרכז." },
    ],
    finalCta: { title: "רוצים לתקן בלי לשבור?", subtitle: "נצלם, נאבחן ונציע את הפתרון המתאים ביותר." },
    meta: {
      title: "תיקון צנרת ללא הרס {city} | אקו אינסטלציה",
      description: "פתרונות ללא הרס ב{city}. צילום קווים ותיקון חכם. {phone}",
      ogImage: "/images/plumbing-service.png",
    },
  },

  plumbing: {
    slug: "plumbing",
    heroImage: "/images/jetter-service.png",

    hero: {
      title: "פתרונות אינסטלציה מתקדמים",
      titleHighlight: "לעבודות מורכבות",
      subtitle:
        "שירותי אינסטלציה מתקדמים לבית, לעסק ולוועדי בתים. החלפת קווי מים וביוב, תיקון פיצוצי מים, פתיחת סתימות, איתור נזילות, צילום קווי ביוב ופתרונות מתקדמים עם ציוד מקצועי.",
    },

    problemsSection: {
      title: "כל פתרונות האינסטלציה במקום אחד",
      subtitle:
        "משירותי אינסטלציה מהירים ועד פרויקטים מורכבים — עבודה מקצועית, ציוד מתקדם ואחריות מלאה.",
    },

    problems: [
      {
        title: "פיצוץ בצנרת מים",
        icon: "droplets",
        desc: "איתור ותיקון מהיר של פיצוצי מים והחלפת מקטעי צנרת.",
      },

      {
        title: "החלפת קווי מים",
        icon: "refresh",
        desc: "החלפת קווי מים ישנים, חלודים או דולפים.",
      },

      {
        title: "החלפת קווי ביוב",
        icon: "wrench",
        desc: "החלפת קווי ביוב ותשתיות לבתים פרטיים, בניינים ועסקים.",
      },

      {
        title: "פתיחת סתימות מורכבות",
        icon: "zap",
        desc: "סתימות קשות, שורשים, שומנים ושטיפות בלחץ גבוה.",
      },

      {
        title: "צילום קווי ביוב",
        icon: "camera",
        desc: "צילום מקצועי לאבחון תקלות, שברים, שורשים ושקיעות.",
      },

      {
        title: "איתור נזילות",
        icon: "camera",
        desc: "איתור נזילות ללא הרס באמצעות ציוד מתקדם ומערכת גז.",
      },
    ],

    whyUs: [
      "אינסטלטורים מקצועיים עם ציוד מתקדם",
      "איתור נזילות, צילום קווים והחלפות קווי מים וביוב",
      "שירות לבית, לעסק, למפעלים ולוועדי בתים",
      "פתרונות גם לתקלות מורכבות שלא כל אינסטלטור מבצע",
      "הגעה מהירה באזור השרון והמרכז",
      "מחירים הוגנים והצעת מחיר לפני תחילת העבודה",
    ],

    processSteps: [
      "שיחת ייעוץ ואבחון ראשוני",
      "הגעה מהירה למקום",
      "בדיקה מקצועית עם ציוד מתקדם",
      "הצגת פתרון והצעת מחיר",
      "ביצוע העבודה בצורה נקייה ומקצועית",
      "בדיקה סופית ומתן אחריות",
    ],

    gallery: baseGallery("/images/plumbing-service.png", [
      {
        src: "/images/plumber.webp",
        alt: "אינסטלטור מקצועי",
        label: "שירות מקצועי",
      },
    ]),

    faq: [
      {
        title: "אילו שירותי אינסטלציה אתם מבצעים?",
        content:
          "החלפת קווי מים וביוב, פתיחת סתימות, תיקון פיצוצי מים, צילום קווי ביוב, איתור נזילות, התקנת כלים סניטריים, תיקוני אינסטלציה ועבודות מורכבות.",
      },

      {
        title: "האם אתם מבצעים החלפת קווי מים וביוב?",
        content:
          "כן. אנו מבצעים החלפת קווי מים וביוב לבתים פרטיים, בניינים, עסקים ומוסדות.",
      },

      {
        title: "כמה עולה אינסטלטור?",
        content:
          "המחיר משתנה בהתאם לסוג התקלה והיקף העבודה. לאחר אבחון תקבלו הצעת מחיר ברורה לפני תחילת העבודה.",
      },

      {
        title: "האם אתם מגיעים במהירות?",
        content:
          "כן. אנו מספקים שירות מהיר באזור השרון והמרכז, ובמקרי חירום עושים מאמץ להגיע בהקדם האפשרי.",
      },

      {
        title: "באילו אזורים אתם עובדים?",
        content:
          "הרצליה, רעננה, כפר סבא, הוד השרון, נתניה, חדרה, תל אביב, פתח תקווה וכל אזור השרון והמרכז.",
      },
    ],

    finalCta: {
      title: "מחפשים אינסטלטור מקצועי?",
      subtitle:
        "התקשרו עכשיו או שלחו WhatsApp לקבלת ייעוץ, הגעה מהירה והצעת מחיר.",
    },

    meta: {
      title:
        "אינסטלטור ב{city} | החלפת קווי מים וביוב | פתיחת סתימות | אקו אינסטלציה",

      description:
        "אינסטלטור מקצועי ב{city}. החלפת קווי מים וביוב, פתיחת סתימות, איתור נזילות, צילום קווי ביוב ותיקוני אינסטלציה מתקדמים. {phone}",

      ogImage: "/images/plumbing-service.png",
    },
  },
};

export function getServiceLanding(slug: string): ServiceLandingConfig | undefined {
  return serviceLandings[slug];
}
