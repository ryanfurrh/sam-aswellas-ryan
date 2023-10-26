import Image from "next/image";

export default function StatsGif() {
  return (
    <Image
      src="https://web.archive.org/web/20091026142333/http://geocities.com/Athens/Acropolis/9980/statsjava.gif"
      alt="chart moving up as well as down"
      width={65}
      height={75}
      className="luminosity opacity-70"
    />
  );
}
