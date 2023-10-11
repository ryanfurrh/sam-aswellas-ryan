import BackHome from "@/components/BackHome";

export default function Trips() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      <div className="absolute w-full left-0">
        <BackHome />
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl text-center font-bold">Trips</h1>
        <div className="border border-purple-950 px-8 gap-4 flex flex-col py-4 rounded-md">
          <h1 className="text-center text-purple-600">2023</h1>
          <div className="flex flex-row gap-4 text-center justify-center">
            <div className="bg-purple-900 text-purple-300 p-4 rounded-sm">
              <h2>Newport, RI</h2>
            </div>
            <div className="bg-purple-900 text-purple-300 p-4 rounded-sm">
              <h2>Bluffton, SC</h2>
            </div>
            <div className="bg-purple-900 text-purple-300 p-4 rounded-sm">
              <h2>Miami, FL</h2>
            </div>
          </div>
        </div>
        <div className="border border-purple-950 px-8 gap-4 flex flex-col py-4 rounded-md">
          <h1 className="text-center text-purple-600">2022</h1>
          <div className="flex flex-row gap-4 text-center justify-center">
            <div className="bg-purple-900 text-purple-300 p-4 rounded-sm">
              <h2>Montauk</h2>
            </div>
            <div className="bg-purple-900 text-purple-300 p-4 rounded-sm">
              <h2>Montauk</h2>
            </div>
          </div>
        </div>
        <div className="border border-purple-950 px-8 gap-4 flex flex-col py-4 rounded-md">
          <h1 className="text-center text-purple-600">2021</h1>
          <div className="flex flex-row gap-4 text-center justify-center">
            <div className="bg-purple-900 text-purple-300 p-4 rounded-sm">
              <h2>Montauk</h2>
            </div>
            <div className="bg-purple-900 text-purple-300 p-4 rounded-sm">
              <h2>Montauk</h2>
            </div>
          </div>
        </div>
        <div className="border border-purple-950 px-8 gap-4 flex flex-col py-4 rounded-md">
          <h1 className="text-center text-purple-600">2020</h1>
          <div className="flex flex-row gap-4 text-center justify-center">
            <div className="bg-purple-900 text-purple-300 p-4 rounded-sm">
              <h2>Montauk</h2>
            </div>
            <div className="bg-purple-900 text-purple-300 p-4 rounded-sm">
              <h2>Montauk</h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
