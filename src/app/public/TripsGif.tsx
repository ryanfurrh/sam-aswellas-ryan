import Image from "next/image";

export default function TimelineGif() {
  return (
    <Image
      src="https://web.archive.org/web/20091021100132/http://www.geocities.com/bronallen/cool_globe.gif"
      alt="spinning globe"
      width={45}
      height={55}
      className="luminosity opacity-[85%] py-2"
    />
  );
}
