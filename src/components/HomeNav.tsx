import Link from "next/link";
import { NavIndex, type Item } from "./NavIndex";

export default function HomeNav() {
  return (
    <div>
      <nav className="flex-col items-center gap-4 w-56  flex">
        {NavIndex.map((page, index) => {
          return (
            <div key={index} className="flex w-full items-center">
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
      className={`rounded-[4px] px-4 py-3 text-center font-medium w-full ${item.textcolor} ${item.color} gap-2 flex flex-col text-mako-950`}
    >
      {item.name}
      <div className="justify-center flex">{item.gif}</div>
    </Link>
  );
}
