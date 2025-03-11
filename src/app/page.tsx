import { Button } from "@/components/ui/button"

import Image from "next/image";
import Nav from "@/components/Nav"


export default function Home() {
  return (
    <main className="p-24">
      <Nav />
      <section className="py-24 flex flex-col gap-8">
        <h1>Test h1</h1>
        <p>test p</p>
      </section>
      <Button variant="secondary">Button</Button>
    </main>
  );
}
