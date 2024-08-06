import Hero from "@/components/hero";
import { Fira_Sans } from "next/font/google";

const fira = Fira_Sans({ subsets: ["latin"], weight: ["300"] });

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between flex-grow ${fira.className}`}
        >
            <Hero />
        </main>
    );
}
