// "use client";
// import Image from "next/image";
// import plumber from "../images/plumber.webp";
// import sinkRepair from "../images/sink-repair.webp";
// import workingPlumber from "../images/plumber-working.jpg";

// // AboutUs Component
// export default function About() {
//   return (
//     <div className="m-auto">
//       {/* Hero Section */}
//       <section
//         className="relative h-[60vh] bg-cover bg-center"
//         style={{ backgroundImage: `url(${plumber.src})` }}
//       >
//         <div className="absolute inset-0 bg-black opacity-40"></div>
//         <div className="relative z-10 flex items-center justify-center h-full">
//           <h1 className="text-white text-5xl lg:text-7xl font-bold">עלינו</h1>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="container mx-auto py-20 px-6 lg:px-10">
//         <div className="flex flex-col lg:flex-row items-center gap-10">
//           <div className="lg:w-1/2">
//             <Image
//               src={sinkRepair}
//               alt="תמונה של אינסטלטור מתקן כיור"
//               width={600}
//               height={600}
//               className="rounded-xl shadow-lg"
//             />
//           </div>
//           <div className="lg:w-1/2 text-right">
//             <p className="text-primary-sea font-medium mb-4">על החברה שלנו</p>
//             <h2 className="text-4xl font-bold mb-6">
//               עמידה בזמנים ומקצועיות מעל הכל
//             </h2>
//             <p className="mb-4">
//               אנחנו צוות מומחים באינסטלציה עם ניסיון של שנים וידע מעמיק בטיפול בכל
//               בעיות הצנרת. אנו מתחייבים לספק ללקוחותינו שירות אמין, מהיר ואיכותי, עם
//               דגש על מקצועיות ושביעות רצון.
//             </p>
//             <p>
//               בחזוננו אנו שואפים להעניק ללקוחות שקט נפשי בעת בחירת שירותינו, ולהמשיך
//               להתרחב ולהתפתח עם השינויים בתחום.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Values Section */}
//       <section className="bg-gray-100 py-20">
//         <div className="container mx-auto px-6 lg:px-10">
//           <div className="text-center mb-12">
//             <p className="text-primary-sea font-medium">המשימה שלנו</p>
//             <h2 className="text-4xl font-bold">
//               מקצועיות, אמינות ושירות מהשורה הראשונה
//             </h2>
//           </div>
//           <div className="flex flex-col lg:flex-row gap-10">
//             <div className="lg:w-1/3 text-center px-4">
//               <h3 className="text-2xl font-bold mb-2">מקצועיות</h3>
//               <p>
//                 אנו מבצעים את כל עבודות האינסטלציה ברמה הגבוהה ביותר, עם תשומת לב לכל
//                 פרט.
//               </p>
//             </div>
//             <div className="lg:w-1/3 text-center px-4">
//               <h3 className="text-2xl font-bold mb-2">אמינות</h3>
//               <p>
//                 אנו עומדים בהבטחותינו ומתחייבים לשירות אמין ומדויק בכל פעם.
//               </p>
//             </div>
//             <div className="lg:w-1/3 text-center px-4">
//               <h3 className="text-2xl font-bold mb-2">שירות</h3>
//               <p>
//                 השירות שלנו זמין לכל לקוח, בכל שעות היום, ומספק פתרון מהיר ויעיל.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* History Section */}
//       <section className="container mx-auto py-20 px-6 lg:px-10">
//         <div className="text-center mb-12">
//           <p className="text-primary-sea font-medium">ההיסטוריה שלנו</p>
//           <h2 className="text-4xl font-bold">מסע של מומחיות וצמיחה</h2>
//         </div>
//         <div className="space-y-8">
//           <div className="flex flex-col lg:flex-row items-center gap-6">
//             <div className="lg:w-1/3 text-right">
//               <h3 className="text-2xl font-bold">2000</h3>
//             </div>
//             <div className="lg:w-2/3 text-right">
//               <p>
//                 הקמת החברה עם חזון לספק שירותי אינסטלציה מקצועיים ואמינים.
//               </p>
//             </div>
//           </div>
//           <div className="flex flex-col lg:flex-row items-center gap-6">
//             <div className="lg:w-1/3 text-right">
//               <h3 className="text-2xl font-bold">2010</h3>
//             </div>
//             <div className="lg:w-2/3 text-right">
//               <p>
//                 התרחבות החברה והוספת שירותים מתקדמים, עם טכנולוגיות חדשות לאיתור ותיקון
//                 בעיות.
//               </p>
//             </div>
//           </div>
//           <div className="flex flex-col lg:flex-row items-center gap-6">
//             <div className="lg:w-1/3 text-right">
//               <h3 className="text-2xl font-bold">2020</h3>
//             </div>
//             <div className="lg:w-2/3 text-right">
//               <p>
//                 מאות פרוייקטים מוצלחים ולקוחות מרוצים, והמשך צמיחה והתפתחות בתחום.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
