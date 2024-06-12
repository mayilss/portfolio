"use client";

type IProps = {
  index: number;
  name: string;
};

export default function NavItem({ index, name }: IProps) {
  const handleNavItemClick = (pageIndex: number) => {
    scrollTo({ top: pageIndex * window.innerHeight, behavior: "smooth" });
  };
  return (
    <li
      key={index}
      className="flex flex-col tracking-[-1px] hover:text-turquoise"
    >
      <span className="text-8 opacity-75 text-end">0{index + 1}</span>
      <button onClick={() => handleNavItemClick(index)}>{name}</button>
    </li>
  );
}
