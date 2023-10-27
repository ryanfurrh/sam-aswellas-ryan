import BackHome from "@/components/BackHome";

export default function Page() {
  return (
    <main className="flex flex-col min-h-[calc(100vh-112px)] items-center justify-between p-10 pt-16 w-full text-mako-100/80">
      <div className="absolute left-0 top-9">
        <BackHome color="" />
      </div>
      <div className="flex flex-col gap-8 w-full items-center">
        <div className="px-4 py-2 rounded-[4px] bg-mako-200 w-fit">
          <h1 className="text-xl text-center font-medium text-mako-950">
            about
          </h1>
        </div>
        <div>
          <p className="text-sm text-mako-100">
            My name is Ryan Furrh and I love Sam Bews so much!!! &lt;3
          </p>
        </div>
      </div>
    </main>
  );
}
