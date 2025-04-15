import GlowingBall from "@/components/ui/GlowingBall";
import PageWrapper from "@/components/ui/PageWrapper";

export default function Home() {
  return (
    <PageWrapper className="bg-home bg-cover bg-center relative w-full justify-center">
      <GlowingBall />
      <div className="flex flex-col items-center">
        <h1 className="text-[9vw] font-extrabold">MAYIL SAFARZADE</h1>
        <h5 className="text-20 md:text-25 text-center">
          SOFTWARE ENGINEER, SPECIALIZED IN FRONTEND & REACT.JS
        </h5>
      </div>
    </PageWrapper>
  );
}
