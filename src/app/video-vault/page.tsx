import BackHome from "@/components/BackHome";

export default function Page() {
  return (
    <main className="flex min-h-[calc(100vh-112px)] flex-col items-center justify-between p-10 pt-16 w-full text-portage-300/80">
      <div className="absolute left-0 top-9">
        <BackHome color="" />
      </div>
      <div className="flex flex-col gap-8 w-full items-center">
        <div className="px-4 py-2 rounded-[4px] bg-portage-300 w-fit">
          <h1 className="text-xl text-center font-medium text-mako-950">
            video vault
          </h1>
        </div>
      </div>
    </main>
  );
}
