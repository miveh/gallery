"use client";
import { useRouter } from "next/navigation";
import Modal from "@/Components/Modal";
import Image from "next/image";

function ModalComponent({ id }: { id: number }) {
  const router = useRouter();

  const photo = {
    id: id,
    src: `/gallery/hiking/${id}.jpg`,
    title: `Photo`,
  };

  function handleClose() {
    router.push("/gallery");
  }
  return (
    <Modal onClose={handleClose}>
      <Image src={photo.src} alt={photo.title} width={600} height={600} />
      <h2>{photo.title}</h2>
    </Modal>
  );
}

export default ModalComponent;
