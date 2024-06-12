import GlowingBall from "@/components/GlowingBall";

export default function Home() {
  return (
    <section className="bg-home bg-cover bg-center relative h-screen w-full flex justify-center items-center">
      <GlowingBall />
      <div className="flex flex-col items-center">
        <h1 className="text-[9vw] font-extrabold">MAYIL SAFARZADE</h1>
        <h5 className="text-25">
          SOFTWARE ENGINEER, SPECIALIZED IN FRONTEND & REACT.JS
        </h5>
      </div>
    </section>
  );
}
