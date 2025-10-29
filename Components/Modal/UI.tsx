"use client";
import { useParams, useRouter } from "next/navigation";
import Modal from "@/Components/Modal/Modal";
import Image from "next/image";
import { photos } from "./modal.const";

function ModalComponent() {
  const router = useRouter();
  const params = useParams();

  const id = params.id;

  const photo = photos.find((i) => i.id === id);
  function handleClose() {
    router.back();
  }
  return (
    <Modal onClose={handleClose}>
      {photo && (
        <Image src={photo.src} alt={photo.title} width={600} height={600} />
      )}
      <h2 className="text-gray-500 dark:text-gray-400 mt-3">{photo?.title}</h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        {photo?.description}
      </p>
      <div>
        {photo?.tags.map((tag, index) => (
          <span className="text-gray-700 dark:text-gray-700 mt-2" key={index}>
            #{tag}&nbsp;
          </span>
        ))}
      </div>
    </Modal>
  );
}

export default ModalComponent;
