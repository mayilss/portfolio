import Header from "@/components/header/Header";
import Home from "@/views/Home";

export default function Main() {
  return (
    <main className="flex flex-col">
      <Header />
      <Home />
      <section className="h-screen bg-home bg-cover"></section>
    </main>
  );
}
