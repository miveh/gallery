"use client";

import ToggleButton from "@/Components/ToggleThemeButton/ToggleButton";

export default function PhotosLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <div className="py-2 sm:px-10 md:px-4">
        <ToggleButton />
      </div>
      {modal}
      {children}
    </>
  );
}
