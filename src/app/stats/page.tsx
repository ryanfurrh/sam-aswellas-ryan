import BackHome from "@/components/BackHome";
import RelationshipCounter from "@/components/RelationshipCounter";

const todaysDate = Date();

export default function Stats() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      <div className="absolute w-full left-0">
        <BackHome />
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl text-center font-bold">Stats</h1>
        <RelationshipCounter />
      </div>
    </main>
  );
}
