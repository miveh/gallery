"use client";

import { useRouter } from "next/navigation";
import Modal from "../../Modal";
import Image from "next/image";

export default function PhotoModalPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  console.log({ params });

  const photo = {
    id: params.id,
    src: `/gallery/hiking/${params.id}.png`,
    title: `Photo ${params.id}`,
  };

  function handleClose() {
    router.push("/gallery");
  }

  return (
    <Modal onClose={handleClose}>
      <Image src={photo.src} alt={photo.title} width={600} />
      <h2>{photo.title}</h2>
    </Modal>
  );
}
