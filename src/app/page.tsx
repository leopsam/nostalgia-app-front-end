import { Copyright } from "@/components/Copyright";
import { EmptyMemories } from "@/components/EmptyMemories";
import { Hero } from "@/components/Hero";
import { Signin } from "@/components/Signin";
import { Stripes } from "@/components/Stripes";

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* left */}
      <div className="relative flex flex-col items-start justify-between px-28 py-16 border-r border-white/10">
        <Signin />
        <Hero />
        <Copyright />
        <Stripes />
      </div>
      {/* rigth */}
      <div className="bg-black flex justify-center items-center flex-col">      
        <EmptyMemories />
      </div>
    </main>
  )
}
