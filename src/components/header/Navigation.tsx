import NavItem from "./NavItem";

const items = ["home", "experience", "contact"];

export default function Navigation() {
  return (
    <nav>
      <ul className="flex space-x-10 text-18">
        {items.map((item, index) => (
          <NavItem key={index} name={item} index={index} />
        ))}
      </ul>
    </nav>
  );
}
