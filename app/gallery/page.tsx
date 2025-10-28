"use client";

import Image from "next/image";
import style from "./gallery.module.css";
import { photos } from "@/Components/Modal/modal.const";
import Link from "next/link";

export default function PhotosPage() {
  return (
    <div className={`${style.grid} ${style.container}`}>
      {photos.map((photo) => (
        <Link
          className="card"
          key={photo.id}
          href={`/gallery/${photo.id}`}
          passHref
        >
          <div className={`${style.imageCard}`} key={photo.id}>
            <Image
              src={photo.src}
              alt={`Photo ${photo.id}`}
              width={photo.width}
              height={photo.height}
              className={style.image}
              priority
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
