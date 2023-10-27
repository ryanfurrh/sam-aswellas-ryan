import BackHome from "@/components/BackHome";

export default function Trips() {
  return (
    <main className="flex min-h-[calc(100vh-112px)] flex-col items-center justify-between p-10 pt-16 w-full text-lavender-400/80">
      <div className="absolute left-0 top-9">
        <BackHome color="" />
      </div>
      <div className="flex flex-col gap-8 w-full items-center">
        <div className="px-4 py-2 rounded-[4px] bg-lavender-300 w-fit">
          <h1 className="text-xl text-center font-medium text-mako-950">
            trips
          </h1>
        </div>
        <div className="border border-lavender-950 px-8 gap-4 flex flex-col py-4 rounded-md">
          <h1 className="text-center text-lavender-600">2023</h1>
          <div className="flex flex-row gap-4 text-center justify-center flex-wrap">
            <div className="bg-lavender-900 text-lavender-300 p-4 rounded-sm">
              <h2>Newport, RI</h2>
            </div>
            <div className="bg-lavender-900 text-lavender-300 p-4 rounded-sm">
              <h2>Bluffton, SC</h2>
            </div>
            <div className="bg-lavender-900 text-lavender-300 p-4 rounded-sm">
              <h2>Miami, FL</h2>
            </div>
          </div>
        </div>
        <div className="border border-lavender-950 px-8 gap-4 flex flex-col flex-wrap py-4 rounded-md">
          <h1 className="text-center text-lavender-600">2022</h1>
          <div className="flex flex-row gap-4 text-center justify-center">
            <div className="bg-lavender-900 text-lavender-300 p-4 rounded-sm">
              <h2>Montauk</h2>
            </div>
            <div className="bg-lavender-900 text-lavender-300 p-4 rounded-sm">
              <h2>New Orleans, LA</h2>
            </div>
          </div>
        </div>
        <div className="border border-lavender-950 px-8 gap-4 flex flex-col flex-wrap py-4 rounded-md">
          <h1 className="text-center text-lavender-600">2021</h1>
          <div className="flex flex-row gap-4 text-center justify-center">
            <div className="bg-lavender-900 text-lavender-300 p-4 rounded-sm">
              <h2>Montauk</h2>
            </div>
            <div className="bg-lavender-900 text-lavender-300 p-4 rounded-sm">
              <h2>Montauk</h2>
            </div>
          </div>
        </div>
        <div className="border border-lavender-950 px-8 gap-4 flex flex-col flex-wrap py-4 rounded-md">
          <h1 className="text-center text-lavender-600">2020</h1>
          <div className="flex flex-row gap-4 text-center justify-center">
            <div className="bg-lavender-900 text-lavender-300 p-4 rounded-sm">
              <h2>Montauk</h2>
            </div>
            <div className="bg-lavender-900 text-purple-300 p-4 rounded-sm">
              <h2>Montauk</h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
