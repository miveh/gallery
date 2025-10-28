"use client";

import { ReactNode, useEffect } from "react";

export default function Modal({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="fixed flex justify-center items-center z-50 inset-0">
      <div
        onClick={(e) => e.stopPropagation()}
        className=" bg-[#fff] relative max-w-[80%] p-[16] rounded-[10]"
      >
        <button
          onClick={onClose}
          className="absolute w-5 h-5 rounded-2xl dark:bg-gray-300 cursor-pointer border-[none] right-[10] top-[10] bg-gray-300 text-[24]"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
