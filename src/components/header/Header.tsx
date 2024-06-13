import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="flex items-center justify-center px-20 py-6 fixed w-full backdrop-blur z-10 h-[88px]">
      <Logo />
      <Navigation />
    </header>
  );
}
