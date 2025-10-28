"use client";
import ModalComponent from "@/Components/ModalComponent";

export default function PhotoModalPage({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  const { id } = params;
  console.log({ id });

  return <ModalComponent id={Number(id)} />;
}
