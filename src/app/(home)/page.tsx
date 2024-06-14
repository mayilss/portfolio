import Header from "@/components/header/Header";
import Home from "./_components/Home";
import Experience from "./_components/Experience";

export default function Main() {
  return (
    <main className="flex flex-col">
      <Header />
      <Home />
      <Experience />
      <section className="h-screen"></section>
    </main>
  );
}
