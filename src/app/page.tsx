import { cookies } from "next/headers";
import { Copyright } from "@/components/Copyright";
import { EmptyMemories } from "@/components/EmptyMemories";
import { Hero } from "@/components/Hero";
import { Signin } from "@/components/Signin";
import { Stripes } from "@/components/Stripes";
import { Profile } from "@/components/Profile";

export default function Home() {
  const isAuthenticated = cookies().has("token");

  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* left */}
      <div className="relative flex flex-col items-start justify-between px-28 py-16 border-r border-white/10">
        {isAuthenticated ? <Profile /> : <Signin />}
        <Hero />
        <Copyright />
        <Stripes />
      </div>
      {/* rigth */}
      <div className="bg-black flex justify-center items-center flex-col">
        <EmptyMemories />
      </div>
    </main>
  );
}
