"use client";

import Image from "next/image";

export default function LargeImage() {
  return (
    <div className="relative mb-8 max-w-screen-xl mt-[-30px]"> {/* Container para centralizar e definir o tamanho máximo */}
      <Image
        src="/banner-1.png"
        alt="Imagem 1"
        layout="responsive"
        width={1920} // Largura maior
        height={1080} // Proporção 16:9
        className="rounded-md h-[350px] w-full" // Altura fixa e largura total
        objectFit="cover" // Para garantir que a imagem se ajuste sem distorções
      />
    </div>
  );
}
