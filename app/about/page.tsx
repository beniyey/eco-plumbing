import Hero from "@/sections/about/hero";
import Image from "next/image";

export const metadata = {
    title: "אודות - אקו פתרונות אינסטלציה"
}

export default function About() {
    return (
        <>
            <div className="m-auto flex flex-col gap-8">
                {/* Hero Section */}
                <section className="relative h-[30vh] lg:h-[30vh]">
                    {/* Overlay with a gradient for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-60"></div>
                    <Image
                        src="/images/modern-sink.webp"
                        alt="an image of a modern sink"
                        className="object-cover opacity-35"
                        fill={true}
                    />
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10 flex items-center justify-center h-fit">
                        <h1 className="text-white text-5xl lg:text-7xl font-extrabold tracking-wider">
                            עלינו
                        </h1>
                    </div>
                </section>

                <Hero></Hero>
            </div>
        </>
    );
}
