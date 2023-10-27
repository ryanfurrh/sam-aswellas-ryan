import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="bg-black w-full items-center flex justify-center border-t border-mako-900/80 h-28 sticky bottom-0">
        <div className="border w-fit px-8 sm:px-12 py-2 text-xs border-mako-700 rounded-[4px] flex flex-col  items-center gap-1">
          <Link
            href={"/about"}
            className="underline hover:text-mako-300 text-mako-100"
          >
            about
          </Link>
          <div className="text-mako-400 flex gap-2 items-center text-[10px]">
            <h1>ryan furrh</h1>
            <h1 className="">© 2023</h1>
          </div>
        </div>
      </div>
    </footer>
  );
}
