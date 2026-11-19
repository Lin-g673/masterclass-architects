
"use client";

import { useEffect, useState } from "react";
import type { ComponentType } from "react";

export type FlatId = "A" | "B";

type TypicalFloorProps = {
  selectedFloor: number;
  selectedFlat: FlatId | null;
  onSelectFlat: (flat: FlatId) => void;
};

export default function TypicalFloorLoader({
  selectedFloor,
  selectedFlat,
  onSelectFlat,
}: TypicalFloorProps) {
  const [Component, setComponent] =
    useState<ComponentType<TypicalFloorProps> | null>(null);

  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    import("./TypicalFloorExplorer")
      .then((module) => {
  console.log("Typical floor module:", module);

  let candidate: unknown = module.default;

  // Handle a nested default export from module interop.
  for (let i = 0; i < 3; i++) {
    if (typeof candidate === "function") break;

    if (
      candidate !== null &&
      typeof candidate === "object" &&
      "default" in candidate
    ) {
      candidate = candidate.default;
    } else {
      break;
    }
  }

  console.log("Resolved component type:", typeof candidate);

  if (typeof candidate !== "function") {
    throw new Error(
      "Could not resolve TypicalFloorExplorer component. " +
      "Inspect the module object in the console."
    );
  }

  if (active) {
    setComponent(
      () => candidate as ComponentType<TypicalFloorProps>
    );
  }
})
      .catch((err) => {
        console.error("Typical floor loading error:", err);
        if (active) setError(true);
      });

    return () => {
      active = false;
    };
  }, []);

  if (error) {
    return (
      <div className="rounded-xl border border-white/10 bg-[#0D1D30] p-8 text-white/70">
        Unable to load the typical floor explorer.
        Check the browser console for details.
      </div>
    );
  }

  if (!Component) {
    return (
      <div className="flex h-[300px] items-center justify-center rounded-xl bg-[#0D1D30] text-sm text-[#D4A85A]">
        Loading floor and apartment selection...
      </div>
    );
  }

  return (
    <Component
      selectedFloor={selectedFloor}
      selectedFlat={selectedFlat}
      onSelectFlat={onSelectFlat}
    />
  );
}
