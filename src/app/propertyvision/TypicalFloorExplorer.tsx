
"use client";

import Image from "next/image";
import { ArrowRight, Building2, Check, Compass } from "lucide-react";

export type FlatId = "A" | "B";

type Props = {
  selectedFloor: number;
  selectedFlat: FlatId | null;
  onSelectFlat: (flat: FlatId) => void;
};

const FLATS = [
  {
    id: "B" as const,
    name: "Flat B",
    location: "Upper portion of floor plan",
    position: "top",
  },
  {
    id: "A" as const,
    name: "Flat A",
    location: "Lower portion of floor plan",
    position: "bottom",
  },
];

export default function TypicalFloorExplorer({
  selectedFloor,
  selectedFlat,
  onSelectFlat,
}: Props) {
  return (
    <section
      id="typical-floor-explorer"
      className="scroll-mt-28 overflow-hidden rounded-2xl border border-white/10 bg-[#0D1D30]"
    >
      <div className="border-b border-white/10 p-6 sm:p-8">
        <p className="text-[10px] uppercase tracking-[0.22em] text-[#D4A85A]">
          04 / Floor & Apartment Selection
        </p>

        <h2 className="mt-3 font-heading text-4xl text-white">
          Explore Floor {selectedFloor}
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">
          Explore the complete floor arrangement, including the
          circulation core and apartment positions. Select either
          residence to view its dedicated apartment experience.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <span className="rounded-full border border-[#D4A85A]/40 px-4 py-2 text-xs text-[#D4A85A]">
            Floor {selectedFloor}
          </span>

          <span className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/65">
            2 Residences
          </span>

          <span className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/65">
            4 Bedrooms Each
          </span>
        </div>
      </div>

      <div className="grid gap-0 xl:grid-cols-[minmax(0,1fr)_290px]">
        {/* INTERACTIVE TYPICAL FLOOR PLAN */}
        <div className="bg-[#EDECE8] p-3 sm:p-6">
          <div className="mx-auto max-w-[650px]">
            <div className="relative overflow-hidden rounded-lg bg-white">
              <Image
                src="/property/typical1.png"
                alt={`Typical floor plan for level ${selectedFloor}, showing Flat A and Flat B`}
                width={960}
                height={1600}
                sizes="(max-width: 1280px) 100vw, 650px"
                className="block h-auto w-full"
              />

              {/* Flat B: upper apartment */}
              <button
                type="button"
                aria-label={`Select Flat B on floor ${selectedFloor}`}
                aria-pressed={selectedFlat === "B"}
                onClick={() => onSelectFlat("B")}
                className={`group absolute left-[14%] top-[7%] h-[36%] w-[72%] border-2 transition-all ${
                  selectedFlat === "B"
                    ? "border-[#D4A85A] bg-[#D4A85A]/20"
                    : "border-transparent bg-transparent hover:border-[#D4A85A] hover:bg-[#D4A85A]/20"
                }`}
              >
                <span className="absolute left-1/2 top-[48%] -translate-x-1/2 rounded-full border border-white/50 bg-[#071321]/90 px-3 py-2 text-[10px] font-semibold text-white shadow-lg sm:px-5 sm:text-xs">
                  FLAT B
                  <ArrowRight
                    size={12}
                    className="ml-2 inline text-[#D4A85A]"
                  />
                </span>
              </button>

              {/* Flat A: lower apartment */}
              <button
                type="button"
                aria-label={`Select Flat A on floor ${selectedFloor}`}
                aria-pressed={selectedFlat === "A"}
                onClick={() => onSelectFlat("A")}
                className={`group absolute left-[14%] top-[53%] h-[36%] w-[72%] border-2 transition-all ${
                  selectedFlat === "A"
                    ? "border-[#D4A85A] bg-[#D4A85A]/20"
                    : "border-transparent bg-transparent hover:border-[#D4A85A] hover:bg-[#D4A85A]/20"
                }`}
              >
                <span className="absolute left-1/2 top-[45%] -translate-x-1/2 rounded-full border border-white/50 bg-[#071321]/90 px-3 py-2 text-[10px] font-semibold text-white shadow-lg sm:px-5 sm:text-xs">
                  FLAT A
                  <ArrowRight
                    size={12}
                    className="ml-2 inline text-[#D4A85A]"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* APARTMENT SELECTION PANEL */}
        <aside className="border-t border-white/10 bg-[#102237] p-5 xl:border-l xl:border-t-0">
          <div className="flex items-center gap-2 text-[#D4A85A]">
            <Building2 size={17} />
            <span className="text-[10px] uppercase tracking-widest">
              Available to Explore
            </span>
          </div>

          <h3 className="mt-4 font-heading text-2xl text-white">
            Choose Your Residence
          </h3>

          <p className="mt-3 text-xs leading-6 text-white/50">
            Select an apartment below or click its position
            directly on the floor layout.
          </p>

          <div className="mt-6 space-y-3">
            {FLATS.map((flat) => {
              const active = selectedFlat === flat.id;

              return (
                <button
                  key={flat.id}
                  type="button"
                  onClick={() => onSelectFlat(flat.id)}
                  className={`w-full rounded-xl border p-4 text-left transition ${
                    active
                      ? "border-[#D4A85A] bg-[#D4A85A]/10"
                      : "border-white/10 bg-[#071321]/50 hover:border-[#D4A85A]/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-2xl text-white">
                      {flat.name}
                    </span>

                    {active ? (
                      <Check size={18} className="text-[#D4A85A]" />
                    ) : (
                      <ArrowRight size={17} className="text-white/50" />
                    )}
                  </div>

                  <p className="mt-2 text-xs text-white/60">
                    4 Bedroom Apartment
                  </p>

                  <p className="mt-1 text-[11px] text-white/40">
                    {flat.location}
                  </p>

                  <p className="mt-3 text-[11px] text-[#D4A85A]">
                    View Apartment Layout →
                  </p>
                </button>
              );
            })}
          </div>

          <div className="mt-6 border-t border-white/10 pt-5">
            <div className="flex items-center gap-2 text-white/50">
              <Compass size={16} />
              <span className="text-xs">Floor Orientation</span>
            </div>

            <p className="mt-2 text-xs leading-5 text-white/45">
              Refer to the north arrow on the floor plan.
              Apartment orientation and views will be
              linked to the actual project model.
            </p>
          </div>

          <p className="mt-6 text-[11px] leading-5 text-white/40">
            Demonstration layout. Unit boundaries and
            project-specific details will be verified
            against the architectural drawings.
          </p>
        </aside>
      </div>
    </section>
  );
}
