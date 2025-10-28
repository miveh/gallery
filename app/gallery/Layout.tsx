import Link from "next/link";

export default function PhotosLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <Link href="gallery/1" as="/gallery">
          Open modal
        </Link>
      </nav>
      {modal}
      {children}
    </>
  );
}
