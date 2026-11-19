
"use client";

import { useEffect, useState } from "react";
import type { ComponentType } from "react";

type BuildingProps = {
  selectedFloor: number;
  onSelectFloor: (floor: number) => void;
};

export default function Building3DLoader({
  selectedFloor,
  onSelectFloor,
}: BuildingProps) {
  const [Building, setBuilding] =
    useState<ComponentType<BuildingProps> | null>(null);

  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    import("./Building3D")
      .then((module) => {
  console.log("Building3D module:", module);
  console.log("Default export type:", typeof module.default);

  if (active) {
    setBuilding(() => module.default);
  }
})
      .catch((err) => {
        console.error("PropertyVision 3D loading error:", err);
        if (active) setError(true);
      });

    return () => {
      active = false;
    };
  }, []);

  if (error) {
    return (
      <div className="flex h-[480px] items-center justify-center rounded-xl bg-[#0B1828] p-6 text-center text-white/70">
        Unable to load the interactive 3D viewer.
        Check the browser console for details.
      </div>
    );
  }

  if (!Building) {
    return (
      <div className="flex h-[480px] items-center justify-center rounded-xl bg-[#0B1828] text-sm text-[#D4A85A]">
        Loading interactive 3D experience...
      </div>
    );
  }

  return (
    <Building
      selectedFloor={selectedFloor}
      onSelectFloor={onSelectFloor}
    />
  );
}
