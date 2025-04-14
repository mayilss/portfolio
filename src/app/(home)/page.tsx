import Header from "@/components/header/Header";
import Contact from "./_components/Contact";
import Experience from "./_components/Experience";
import Home from "./_components/Home";

export default function Main() {
  return (
    <main className="flex flex-col">
      <Header />
      <Home />
      <Experience />
      <Contact />
    </main>
  );
}
