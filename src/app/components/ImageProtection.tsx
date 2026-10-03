"use client";

import { useEffect } from "react";

export default function ImageProtection() {
  useEffect(() => {
    const preventImageContextMenu = (event: MouseEvent) => {
      const target = event.target;

      if (
        target instanceof Element &&
        target.closest("img, picture")
      ) {
        event.preventDefault();
      }
    };

    const preventImageDrag = (event: DragEvent) => {
      const target = event.target;

      if (
        target instanceof Element &&
        target.closest("img, picture")
      ) {
        event.preventDefault();
      }
    };

    document.addEventListener(
      "contextmenu",
      preventImageContextMenu
    );

    document.addEventListener(
      "dragstart",
      preventImageDrag
    );

    return () => {
      document.removeEventListener(
        "contextmenu",
        preventImageContextMenu
      );

      document.removeEventListener(
        "dragstart",
        preventImageDrag
      );
    };
  }, []);

  return null;
}