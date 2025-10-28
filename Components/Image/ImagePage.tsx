"use client";
import Image from "next/image";
import { useParams } from "next/navigation";

function ImagePage() {
  const params = useParams();
  const id = params.id;
  return (
    <div>
      <Image
        alt="hiking image"
        width={500}
        height={600}
        src={`/gallery/hiking/${id}.jpeg`}
      />
    </div>
  );
}

export default ImagePage;
