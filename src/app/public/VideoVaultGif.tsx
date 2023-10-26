import Image from "next/image";

export default function VideoVaultGif() {
  return (
    <Image
      src="https://web.archive.org/web/20091027070731/http://es.geocities.com/tenis_aspe/TgC_artefacto27.gif"
      alt="spinning video camera"
      width={75}
      height={75}
      className="fill mix-blend-multiply"
    />
  );
}
