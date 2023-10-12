import Link from "next/link";
import { NavIndex, type Item } from "./NavIndex";

export default function HomeNav() {
  return (
    <div>
      <nav className="grid grid-cols-1 items-center gap-4">
        {NavIndex.map((page, index) => {
          return (
            <div key={index} className="grid items-center ">
              {page.items.map((item) => (
                <NavItem key={item.slug} item={item} />
              ))}
            </div>
          );
        })}
      </nav>
    </div>
  );
}

function NavItem({ item }: { item: Item }) {
  return (
    <Link
      href={`${item.slug}`}
      className="border border-white px-16 py-2 text-center"
    >
      {item.name}
    </Link>
  );
}
