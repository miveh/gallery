"use client";
import { useParams, useRouter } from "next/navigation";
import Modal from "@/Components/Modal/Modal";
import Image from "next/image";

function ModalComponent() {
  const router = useRouter();
  const params = useParams();

  const id = params.id;

  const photo = {
    id: id,
    src: `/gallery/hiking/${id}.jpeg`,
    title: `Photo`,
  };

  function handleClose() {
    router.back();
  }
  return (
    <Modal onClose={handleClose}>
      <Image src={photo.src} alt={photo.title} width={600} height={600} />
      <h2 className="">{photo.title}</h2>
    </Modal>
  );
}

export default ModalComponent;
