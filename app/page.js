import { Hero, Excos } from "@/components";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center z-0 justify-between p-24 relative">
      <Hero />
    </main>
  );
}
