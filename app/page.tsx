"use client";

import Image from "next/image";
import { createPortal } from "react-dom";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {typeof window !== "undefined" &&
        createPortal(
          <div className=" border-gray-500 border-[.5px] rounded-md py-2 px-4 m-4 bg-gray-900 max-w-96 absolute bottom-4 right-0 shadow-lg">
            <div>
              <div className="text-sm font-semibold">Titledi</div>
              <div className="text-xs font-extralight">
                This child is placed in the document body
              </div>
            </div>
            <Button
          </div>,
          window.document.body
        )}
    </main>
  );
}
