"use client";

import Image from "next/image";
import style from "./gallery.module.css";
import { useRouter } from "next/navigation";

const photos = [
  {
    id: "1",
    src: "/gallery/hiking/12.jpeg",
    width: 200,
    height: 350,
    title: "Sunset",
  },
  {
    id: "2",
    src: "/gallery/hiking/2.jpg",
    width: 200,
    height: 350,
    title: "Mountains",
  },
  {
    id: "3",
    src: "/gallery/hiking/3.jpg",
    width: 200,
    height: 350,
    title: "Mountains",
  },
  {
    id: "4",
    src: "/gallery/hiking/4.jpg",
    width: 200,
    height: 350,
    title: "Mountains",
  },
  {
    id: "5",
    src: "/gallery/hiking/5.jpeg",
    width: 200,
    height: 350,
    title: "Mountains",
  },
  {
    id: "6",
    src: "/gallery/hiking/6.jpeg",
    width: 200,
    height: 350,
    title: "Mountains",
  },
  {
    id: "7",
    src: "/gallery/hiking/7.jpeg",
    width: 200,
    height: 350,
    title: "Mountains",
  },
  {
    id: "8",
    src: "/gallery/hiking/8.jpeg",
    width: 200,
    height: 500,
    title: "Mountains",
  },
  {
    id: "9",
    src: "/gallery/hiking/9.jpeg",
    width: 500,
    height: 350,
    title: "Mountains",
  },
  {
    id: "0",
    src: "/gallery/hiking/10.jpeg",
    width: 200,
    height: 100,
    title: "Mountains",
  },
  {
    id: "10",
    src: "/gallery/hiking/11.jpeg",
    width: 250,
    height: 350,
    title: "Mountains",
  },
  {
    id: "12",
    src: "/gallery/hiking/12.jpeg",
    width: 250,
    height: 350,
    title: "Mountains",
  },
  {
    id: "13",
    src: "/gallery/hiking/13.jpeg",
    width: 250,
    height: 350,
    title: "Mountains",
  },
  {
    id: "14",
    src: "/gallery/hiking/14.jpeg",
    width: 250,
    height: 350,
    title: "Mountains",
  },
  {
    id: "15",
    src: "/gallery/hiking/15.jpg",
    width: 250,
    height: 350,
    title: "Mountains",
  },
];

export default function PhotosPage() {
  const router = useRouter();
  return (
    <div className={`${style.grid} ${style.container}`}>
      {photos.map((photo) => (
        <div
          onClick={() => router.push(`/gallery/${photo.id}`, { scroll: false })}
          className={`${style.imageCard}`}
          key={photo.id}
        >
          <Image
            src={photo.src}
            alt={`Photo ${photo.id}`}
            width={photo.width}
            height={photo.height}
            className={style.image}
            priority
          />
        </div>
      ))}
    </div>
  );
}
