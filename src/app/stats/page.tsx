import BackHome from "@/components/BackHome";
import RelationshipCounter from "@/components/RelationshipCounter";

const todaysDate = Date();

export default function Stats() {
  return (
    <main className="flex min-h-[calc(100vh-112px)] flex-col items-center justify-between p-10 pt-16 w-full text-neo-300/80">
      <div className="absolute left-0 top-9">
        <BackHome color="" />
      </div>
      <div className="flex flex-col gap-8 w-full items-center">
        <div className="px-4 py-2 rounded-[4px] bg-neo-300 w-fit">
          <h1 className="text-xl text-center font-medium text-mako-950">
            stats
          </h1>
        </div>
        <RelationshipCounter />
      </div>
    </main>
  );
}
