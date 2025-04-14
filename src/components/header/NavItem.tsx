"use client";

import { handleNavItemClick } from "@/lib/helpers";

type IProps = {
  index: number;
  name: string;
};

export default function NavItem({ index, name }: IProps) {
  return (
    <li key={index} className="flex flex-col hover:text-turquoise">
      <span className="text-8 opacity-75 text-end">0{index + 1}</span>
      <button onClick={() => handleNavItemClick(index)}>
        {"//"} {name}
      </button>
    </li>
  );
}
