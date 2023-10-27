import Image from "next/image";

export default function StudioGif() {
  return (
    <Image
      src="https://web.archive.org/web/20091020071827/http://www.geocities.com/tirnakli/2_computers.gif"
      alt="Welcome Gif with butterflies ♡"
      width={100}
      height={75}
      className="luminosity opacity-80 py-2"
    />
  );
}
