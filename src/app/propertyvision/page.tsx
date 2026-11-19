
"use client";
import type { FlatId } from "./TypicalFloorExplorer";
import Building3DLoader from "./Building3DLoader";
import { useRef, useState, type PointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Maximize2,
  Menu,
  Minus,
  Plus,
  RotateCcw,
  Sparkles,
  Trees,
  X,
  ParkingCircle,
} from "lucide-react";

type Room = "Living Room" | "Kitchen" | "Bedroom";
type Style = "Minimalist" | "Modern Classical";
type Unit = "3 Bedroom" | "4 Bedroom";
type Section =
  | "overview"
  | "apartments"
  | "interiors"
  | "amenities"
  | "rooftop";

type Hotspot = {
  id: string;
  label: string;
  room: Room;
  x: number;
  y: number;
};


const FLOORS = [4, 9, 12, 16];
const UNITS: Unit[] = ["3 Bedroom", "4 Bedroom"];
const ROOMS: Room[] = ["Living Room", "Kitchen", "Bedroom"];
const STYLES: Style[] = ["Minimalist", "Modern Classical"];

const PLANS: Record<Unit, string> = {
  "3 Bedroom": "/property/3bed.webp",
  "4 Bedroom": "/property/4bed.webp",
};

const INTERIORS: Record<Style, Record<Room, string>> = {
  Minimalist: {
    "Living Room": "/minimalist/minimalistliving2.webp",
    Kitchen: "/minimalist/minimalistkitchen3.webp",
    Bedroom: "/minimalist/minimalistbed2.webp",
  },
  "Modern Classical": {
    "Living Room": "/classical/classicalliving3.webp",
    Kitchen: "/classical/classicalkitchen2.webp",
    Bedroom: "/classical/classicalbed1.webp",
  },
};

const BALCONIES: Record<number, string> = {
  4: "/property/4balcony.webp",
  9: "/property/9balcony.webp",
  12: "/property/12balcony.webp",
  16: "/property/16balcony.webp",
};

const AMENITIES = [
  {
    title: "Infinity Swimming Pool",
    image: "/property/swimming.webp",
    description:
      "A luxurious poolside retreat with skyline views and landscaped relaxation areas.",
  },
  {
    title: "Residents' Gym",
    image: "/property/gym.webp",
    description:
      "A contemporary fitness studio with cardio, strength and wellness zones.",
  },
];

const HOTSPOTS: Record<Unit, Hotspot[]> = {
  "3 Bedroom": [
    { id: "living", label: "Living Room", room: "Living Room", x: 49, y: 76 },
    { id: "kitchen", label: "Kitchen", room: "Kitchen", x: 75, y: 55 },
    { id: "bed1", label: "Bedroom 01", room: "Bedroom", x: 27, y: 73 },
    { id: "bed2", label: "Bedroom 02", room: "Bedroom", x: 27, y: 14 },
    { id: "bed3", label: "Bedroom 03", room: "Bedroom", x: 77, y: 14 },
  ],
  "4 Bedroom": [
    { id: "living", label: "Living Room", room: "Living Room", x: 39, y: 43 },
    { id: "kitchen", label: "Kitchen", room: "Kitchen", x: 77, y: 77 },
    { id: "bed1", label: "Bedroom 01", room: "Bedroom", x: 23, y: 78 },
    { id: "bed2", label: "Bedroom 02", room: "Bedroom", x: 24, y: 17 },
    { id: "bed3", label: "Bedroom 03", room: "Bedroom", x: 77, y: 16 },
    { id: "bed4", label: "Bedroom 04", room: "Bedroom", x: 76, y: 52 },
  ],
};

const NAV = [
  { id: "overview" as Section, title: "Development Overview", Icon: Building2 },
  { id: "apartments" as Section, title: "Explore Apartments", Icon: LayoutGrid },
  { id: "interiors" as Section, title: "Interior Collections", Icon: Sparkles },
  { id: "amenities" as Section, title: "Lifestyle Amenities", Icon: ParkingCircle },
  { id: "rooftop" as Section, title: "Balcony & Skyline Views", Icon: Trees },
];

const panel = "rounded-2xl border border-white/10 bg-[#0D1D30]";
const goldButton =
  "rounded-full bg-[#D4A85A] px-5 py-3 text-xs font-medium text-[#071321] hover:bg-white";
const outlineButton =
  "rounded-full border border-[#D4A85A]/50 px-5 py-3 text-xs text-[#D4A85A] hover:bg-[#D4A85A] hover:text-[#071321]";

function PlanViewer({
  unit,
  floor,
  onRoom,
  fullscreen = false,
}: {
  unit: Unit;
  floor: number;
  onRoom: (room: Room) => void;
  fullscreen?: boolean;
}) {
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const drag = useRef<{
    x: number;
    y: number;
    ox: number;
    oy: number;
  } | null>(null);

  function reset() {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  }

  function changeZoom(amount: number) {
    setZoom((value) =>
      Math.max(1, Math.min(4, Math.round((value + amount) * 100) / 100))
    );
  }

  function down(event: PointerEvent<HTMLDivElement>) {
    if (
      zoom <= 1 ||
      (event.target as HTMLElement).closest("button")
    ) {
      return;
    }

    drag.current = {
      x: event.clientX,
      y: event.clientY,
      ox: offset.x,
      oy: offset.y,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function move(event: PointerEvent<HTMLDivElement>) {
    if (!drag.current) return;

    setOffset({
      x: drag.current.ox + event.clientX - drag.current.x,
      y: drag.current.oy + event.clientY - drag.current.y,
    });
  }

  return (
    <div
      className={`flex min-h-0 flex-col overflow-hidden rounded-xl bg-[#F1F0EC] ${
        fullscreen ? "h-full" : ""
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 bg-white p-3 text-[#071321] sm:px-5">
        <span className="text-xs font-medium">
          Floor {floor} · {unit}
        </span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => changeZoom(-0.25)}
            disabled={zoom <= 1}
            aria-label="Zoom out"
            className="rounded-lg border border-black/10 p-2 disabled:opacity-30"
          >
            <Minus size={16} />
          </button>

          <span className="min-w-12 text-center text-xs">
            {Math.round(zoom * 100)}%
          </span>

          <button
            type="button"
            onClick={() => changeZoom(0.25)}
            disabled={zoom >= 4}
            aria-label="Zoom in"
            className="rounded-lg border border-black/10 p-2 disabled:opacity-30"
          >
            <Plus size={16} />
          </button>

          <button
            type="button"
            onClick={reset}
            aria-label="Reset zoom"
            className="rounded-lg border border-black/10 p-2"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      <div
        className={`relative flex min-h-0 items-center justify-center overflow-hidden p-3 sm:p-5 ${
          fullscreen ? "flex-1" : "h-[470px] sm:h-[650px]"
        } ${zoom > 1 ? "cursor-grab active:cursor-grabbing" : ""}`}
        style={{ touchAction: zoom > 1 ? "none" : "auto" }}
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={() => (drag.current = null)}
        onPointerCancel={() => (drag.current = null)}
      >
        <div
          className="relative inline-block max-h-full max-w-full shrink-0"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
            transformOrigin: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={PLANS[unit]}
            alt={`Floor ${floor} ${unit} furnished floor plan`}
            draggable={false}
            className="block h-auto max-h-[410px] w-auto max-w-full select-none object-contain sm:max-h-[590px]"
          />

          {HOTSPOTS[unit].map((spot) => (
            <button
              key={spot.id}
              type="button"
              title={`Explore ${spot.label}`}
              aria-label={`Explore ${spot.label}`}
              onPointerDown={(event) => event.stopPropagation()}
              onClick={() => onRoom(spot.room)}
              style={{
                left: `${spot.x}%`,
                top: `${spot.y}%`,
              }}
              className="absolute z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#D4A85A] text-[#071321] shadow-lg hover:bg-white"
            >
              <Plus size={15} />
            </button>
          ))}
        </div>
      </div>

      <p className="border-t border-black/10 bg-white px-4 py-3 text-center text-[11px] text-[#071321]/60">
        Click a gold marker to explore a room. Zoom in to drag the plan.
      </p>
    </div>
  );
}

export default function PropertyVisionPage() {
  const [section, setSection] = useState<Section>("overview");
  const [floor, setFloor] = useState(9);
  const [selectedFlat, setSelectedFlat] = useState<FlatId | null>(null);
  const residenceId = selectedFlat
  ? `${floor}${selectedFlat}`
  : null;

const residenceLabel = residenceId
  ? `Residence ${residenceId}`
  : `Floor ${floor} Residences`;
  const [unit, setUnit] = useState<Unit>("3 Bedroom");
  const [style, setStyle] = useState<Style>("Minimalist");
  const [room, setRoom] = useState<Room>("Living Room");

  const [menuOpen, setMenuOpen] = useState(false);
  const [planFullscreen, setPlanFullscreen] = useState(false);
  const [interiorFullscreen, setInteriorFullscreen] = useState(false);
  const [amenityOpen, setAmenityOpen] = useState<string | null>(null);
  const [balconyOpen, setBalconyOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
const videoRef = useRef<HTMLVideoElement>(null);

  const interiorSrc = INTERIORS[style][room];

  function goTo(next: Section) {
    setSection(next);
    setMenuOpen(false);

    const targets: Record<Section, string> = {
      overview: "pv-overview",
      apartments: "floor-plan-explorer",
      interiors: "interior-gallery",
      amenities: "pv-amenities",
      rooftop: "pv-rooftop",
    };

    document.getElementById(targets[next])?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function exploreRoom(next: Room) {
    setRoom(next);
    setSection("interiors");
    setPlanFullscreen(false);

    window.setTimeout(() => {
      document.getElementById("interior-gallery")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 40);
  }

  function changeRoom(direction: number) {
    setRoom(
      (current) =>
        ROOMS[
          (ROOMS.indexOf(current) + direction + ROOMS.length) %
            ROOMS.length
        ]
    );
  }

  return (
    <main className="min-h-screen bg-[#071321] text-white">
      <Navbar />

      <div className="mx-auto max-w-[1800px] px-4 pb-12 pt-24 sm:px-6 lg:px-10 lg:pt-28">
        {/* HEADER */}

        <header className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.27em] text-[#D4A85A]">
              Apiyo Design Studio Presents
            </p>

            <h1 className="font-heading text-5xl font-light sm:text-6xl">
              Property
              <span className="text-[#D4A85A]">Vision</span>
            </h1>

            <p className="mt-3 text-sm text-white/55">
              An interactive architectural property presentation.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setEnquiryOpen(true)}
            className={goldButton}
          >
            Make an Enquiry
            <ArrowUpRight size={14} className="ml-2 inline" />
          </button>
        </header>

        <div className="grid gap-5 lg:grid-cols-[260px_minmax(0,1fr)]">
          {/* MOBILE NAVIGATION */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`${panel} flex items-center gap-3 p-4 text-sm lg:hidden`}
          >
            <Menu size={18} />
            Explore PropertyVision
          </button>

          {/* SIDEBAR */}

          <aside
            className={`${panel} ${
              menuOpen ? "block" : "hidden"
            } self-start p-4 lg:sticky lg:top-24 lg:block`}
          >
            <p className="px-3 pb-4 pt-2 text-[10px] uppercase tracking-[0.2em] text-[#D4A85A]">
              Explore the Development
            </p>

            <nav className="space-y-1">
              {NAV.map(({ id, title, Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => goTo(id)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-xs transition ${
                    section === id
                      ? "bg-[#D4A85A]/10 text-[#D4A85A]"
                      : "text-white/65 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon size={17} />
                  {title}
                </button>
              ))}
            </nav>

            <div className="mx-3 mt-6 border-t border-white/10 pt-5">
              <p className="text-[10px] uppercase tracking-widest text-white/40">
                Current Selection
              </p>

              <p className="text-sm text-white">
  {residenceLabel}
</p>

<p className="mt-1 text-xs text-white/50">
  {selectedFlat
    ? `4 Bedroom · ${style}`
    : "2 Four-Bedroom Residences"}
</p>
            </div>
          </aside>

          {/* MAIN DASHBOARD */}

          <div className="min-w-0 space-y-5">
            {/* DEVELOPMENT OVERVIEW */}

            <section
              id="pv-overview"
              className={`${panel} scroll-mt-28 overflow-hidden`}
            >
              <div className="relative min-h-[360px] sm:min-h-[510px]">
                <Image
                  src="/3d/3d1.webp"
                  alt="Apiyo Design Studio architectural exterior visualization"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 75vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#071321]/90 via-[#071321]/30 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/80 to-transparent" />

                <div className="absolute bottom-8 left-6 right-6 sm:left-9">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#D4A85A]">
                    PropertyVision Experience
                  </p>

                  <h2 className="mt-3 max-w-xl font-heading text-4xl sm:text-6xl">
                    A New Perspective on Living
                  </h2>

                  <p className="mt-4 max-w-md text-sm leading-6 text-white/75">
                    Explore apartments, furnished floor plans,
                    interior collections, amenities and skyline
                    perspectives.
                  </p>

                  <button
                    type="button"
                    onClick={() => goTo("apartments")}
                    className={`${outlineButton} mt-6`}
                  >
                    Explore Apartments
                    <ArrowRight size={15} className="ml-2 inline" />
                  </button>
                </div>
              </div>
            </section>

            {/* APARTMENT AND STYLE SELECTORS */}

            <section className="grid gap-5 xl:grid-cols-2">
              <div className={`${panel} p-6`}>
                <p className="text-[10px] uppercase tracking-widest text-[#D4A85A]">
                  01 / Apartment Explorer
                </p>

                <h3 className="mt-3 font-heading text-3xl">
                  Select Your Residence
                </h3>

                <p className="mb-3 mt-6 text-xs text-white/45">
                  Choose a Floor
                </p>

                <div className="grid grid-cols-4 gap-2">
                  {FLOORS.map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => {
                        setFloor(level);
                        setSection("apartments");
                      }}
                      aria-pressed={floor === level}
                      className={`rounded-xl border px-2 py-4 text-center ${
                        floor === level
                          ? "border-[#D4A85A] bg-[#D4A85A] text-[#071321]"
                          : "border-white/15 text-white/75"
                      }`}
                    >
                      <span className="block text-[9px] uppercase">
                        Floor
                      </span>

                      <span className="font-heading text-3xl">
                        {level}
                      </span>
                    </button>
                  ))}
                </div>

                <p className="mb-3 mt-6 text-xs text-white/45">
                  Apartment Type
                </p>

                <div className="flex flex-wrap gap-2">
                  {UNITS.map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setUnit(value)}
                      className={`rounded-full border px-4 py-3 text-xs ${
                        unit === value
                          ? "border-[#D4A85A] bg-[#D4A85A]/10 text-[#D4A85A]"
                          : "border-white/15 text-white/65"
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>

                <p className="mt-6 border-t border-white/10 pt-4 font-heading text-2xl">
                  Floor {floor} · {unit}
                </p>
              </div>

              <div className={`${panel} p-6`}>
                <p className="text-[10px] uppercase tracking-widest text-[#D4A85A]">
                  02 / Interior Collections
                </p>

                <h3 className="mt-3 font-heading text-3xl">
                  Your Interior, Your Way
                </h3>

                <p className="mt-3 text-xs leading-6 text-white/55">
                  Explore Minimalist and Modern Classical
                  architectural visualizations.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-2">
                  {STYLES.map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setStyle(value)}
                      className={`flex min-h-20 items-end justify-between rounded-xl border p-3 text-left text-xs ${
                        style === value
                          ? "border-[#D4A85A] bg-[#D4A85A]/10 text-[#D4A85A]"
                          : "border-white/15 text-white/65"
                      }`}
                    >
                      {value}
                      {style === value && <Check size={15} />}
                    </button>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {ROOMS.map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setRoom(value)}
                      className={`rounded-full px-3 py-2 text-xs ${
                        room === value
                          ? "bg-white text-[#071321]"
                          : "border border-white/15 text-white/65"
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => goTo("interiors")}
                  className="mt-6 text-xs text-[#D4A85A]"
                >
                  View Interior Gallery
                  <ArrowRight size={14} className="ml-2 inline" />
                </button>
              </div>
            </section>


{/* CINEMATIC ARCHITECTURAL VIDEO TOUR */}

<section
  id="cinematic-tour"
  className={`${panel} scroll-mt-28 overflow-hidden`}
>
  <div className="flex flex-wrap items-end justify-between gap-5 p-6 sm:p-8">
    <div>
      <p className="text-[10px] uppercase tracking-[0.22em] text-[#D4A85A]">
        Cinematic Architectural Experience
      </p>

      <h2 className="mt-3 font-heading text-4xl text-white sm:text-5xl">
        Experience the Vision
      </h2>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">
        Discover the architecture, spaces and character of
        the development through a cinematic visual journey.
      </p>
    </div>

    <span className="rounded-full border border-[#D4A85A]/40 px-4 py-2 text-[11px] tracking-widest text-[#D4A85A]">
      ARCHITECTURAL FILM
    </span>
  </div>

  <div className="bg-black px-3 pb-3 sm:px-6 sm:pb-6">
    
<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black">

  <video
    ref={videoRef}
    src="/3d/3dvideo.mp4"
    poster="/3d/3d1.webp"
    playsInline
    preload="metadata"
    loop
    controls={videoPlaying}
    onPlay={() => setVideoPlaying(true)}
    onPause={() => setVideoPlaying(false)}
    className="aspect-video w-full bg-black object-contain"
    aria-label="PropertyVision cinematic architectural tour"
  >
    Your browser does not support HTML5 video.
  </video>

  {!videoPlaying && (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#071321]/70 via-[#071321]/20 to-transparent">

      <button
        type="button"
        onClick={() => {
          videoRef.current?.play().catch(() => {
            setVideoPlaying(false);
          });
        }}
        aria-label="Play architectural film"
        className="flex h-20 w-20 items-center justify-center rounded-full border border-[#D4A85A]/60 bg-[#D4A85A] text-[#071321] shadow-2xl transition duration-300 hover:scale-110 hover:bg-white sm:h-24 sm:w-24"
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>

      <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-white">
        Play Architectural Film
      </p>

    </div>
  )}

</div>

  </div>

  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 p-6">
    <div>
      <p className="text-[10px] uppercase tracking-widest text-[#D4A85A]">
        Continue Exploring
      </p>

      <h3 className="mt-2 font-heading text-2xl text-white">
        Go Beyond the Film
      </h3>

      <p className="mt-2 text-xs text-white/50">
        Take control of the experience in our interactive
        3D building explorer.
      </p>
    </div>

    <button
      type="button"
      onClick={() => {
        document
          .getElementById("building-3d")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }}
      className="rounded-full bg-[#D4A85A] px-6 py-3 text-xs font-medium text-[#071321] transition hover:bg-white"
    >
      Explore Building in 3D →
    </button>
  </div>
</section>


{/* INTERACTIVE 3D BUILDING EXPLORER */}

<section
  id="building-3d"
  className={`${panel} scroll-mt-28 overflow-hidden`}
>
  <div className="p-6 sm:p-8">
    <p className="text-[10px] uppercase tracking-widest text-[#D4A85A]">
      03 / Interactive 3D Experience
    </p>

    <h3 className="mt-3 font-heading text-4xl">
      Explore the Building in 3D
    </h3>

    <p className="mt-3 text-sm text-white/55">
      Rotate the building, zoom in and select a floor
      to explore its apartments and furnished layouts.
    </p>
  </div>

  <div className="px-4 pb-5 sm:px-6">
    <Building3DLoader
  selectedFloor={floor}
  onSelectFloor={(selectedFloor: number) => {
    setFloor(selectedFloor);
    setSelectedFlat(null);
    setSection("apartments");

    window.setTimeout(() => {
      document
        .getElementById("typical-floor-explorer")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 80);
  }}
/>
  </div>

  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 p-6">
    <div>
      <p className="text-xs text-white/45">
        Selected Residence
      </p>

      <h4 className="mt-1 font-heading text-2xl">
        Floor {floor} · {selectedFlat ? `Flat ${selectedFlat}` : "2 Four-Bedroom Residences"}
      </h4>
    </div>

    <button
      type="button"
      onClick={() => {
        document
          .getElementById("typical-floor-explorer")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }}
      className="rounded-full bg-[#D4A85A] px-5 py-3 text-xs font-medium text-[#071321]"
    >
      Explore Floor Layout →
    </button>
  </div>
</section>


{/* TYPICAL FLOOR AND UNIT SELECTION */}

<section
  id="typical-floor-explorer"
  className="scroll-mt-28 overflow-hidden rounded-2xl border border-white/10 bg-[#0D1D30]"
>
  <div className="border-b border-white/10 p-6 sm:p-8">
    <p className="text-[10px] uppercase tracking-[0.22em] text-[#D4A85A]">
      04 / Floor & Apartment Selection
    </p>

    <h2 className="mt-3 text-4xl text-white">
      Explore Floor {floor}
    </h2>

    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">
      Explore the complete floor layout and select an apartment
      to view its dedicated interior and floor plan.
    </p>
  </div>

  <div className="grid xl:grid-cols-[minmax(0,1fr)_290px]">
    {/* FLOOR PLAN IMAGE */}
    <div className="bg-[#EDECE8] p-4 sm:p-6">
      <div className="mx-auto max-w-[650px]">
        <div className="relative overflow-hidden rounded-lg bg-white">
          <img
            src="/property/typical1.png"
            alt="Typical floor layout showing Flat A and Flat B"
            className="block h-auto w-full"
          />

          {/* FLAT B */}
          <button
            type="button"
            onClick={() => {
              setSelectedFlat("B");
              setUnit("4 Bedroom");
              setSection("apartments");

              document
                .getElementById("floor-plan-explorer")
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
            }}
            className={`absolute left-[14%] top-[7%] h-[36%] w-[72%] border-2 transition-all ${
              selectedFlat === "B"
                ? "border-[#D4A85A] bg-[#D4A85A]/20"
                : "border-transparent hover:border-[#D4A85A] hover:bg-[#D4A85A]/20"
            }`}
          >
            <span className="rounded-full bg-[#071321] px-4 py-2 text-xs font-semibold text-white shadow-lg">
              FLAT B →
            </span>
          </button>

          {/* FLAT A */}
          <button
            type="button"
            onClick={() => {
              setSelectedFlat("A");
              setUnit("4 Bedroom");
              setSection("apartments");

              document
                .getElementById("floor-plan-explorer")
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
            }}
            className={`absolute left-[14%] top-[53%] h-[36%] w-[72%] border-2 transition-all ${
              selectedFlat === "A"
                ? "border-[#D4A85A] bg-[#D4A85A]/20"
                : "border-transparent hover:border-[#D4A85A] hover:bg-[#D4A85A]/20"
            }`}
          >
            <span className="rounded-full bg-[#071321] px-4 py-2 text-xs font-semibold text-white shadow-lg">
              FLAT A →
            </span>
          </button>
        </div>
      </div>
    </div>

    {/* SIDE PANEL */}
    <aside className="border-t border-white/10 bg-[#102237] p-5 xl:border-l xl:border-t-0">
      <p className="text-[10px] uppercase tracking-widest text-[#D4A85A]">
        Apartment Selection
      </p>

      <h3 className="mt-4 text-2xl text-white">
        Floor {floor} Residences
      </h3>

      <p className="mt-3 text-xs leading-6 text-white/50">
        Choose either residence to explore its furnished
        apartment layout.
      </p>

      <div className="mt-6 space-y-3">
        {(["B", "A"] as const).map((flat) => (
          <button
            key={flat}
            type="button"
            onClick={() => {
              setSelectedFlat(flat);
              setUnit("4 Bedroom");
              setSection("apartments");

              document
                .getElementById("floor-plan-explorer")
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
            }}
            className={`w-full rounded-xl border p-4 text-left transition ${
              selectedFlat === flat
                ? "border-[#D4A85A] bg-[#D4A85A]/10"
                : "border-white/10 bg-[#071321]/50 hover:border-[#D4A85A]/60"
            }`}
          >
            <div className="flex items-center justify-between">
             <div>
  <span className="text-xl text-white">
    Residence {floor}{flat}
  </span>

  <p className="mt-1 text-[11px] text-white/45">
    Flat {flat} · Floor {floor}
  </p>
</div>
              <span className="text-[#D4A85A]">→</span>
            </div>

            <p className="mt-2 text-xs text-white/55">
              4 Bedroom Apartment
            </p>

            <p className="mt-2 text-[11px] text-[#D4A85A]">
              View Apartment Layout
            </p>
          </button>
        ))}
      </div>

      
    </aside>
  </div>
</section>


            {/* FLOOR PLAN EXPLORER */}
{residenceId && (
  <div className="mt-3 flex flex-wrap items-center gap-3">
    <span className="rounded-full border border-[#D4A85A]/40 bg-[#D4A85A]/10 px-4 py-2 text-xs font-semibold text-[#D4A85A]">
      {residenceLabel}
    </span>

    <span className="text-xs text-white/50">
      Floor {floor} · Flat {selectedFlat} · 4 Bedrooms
    </span>
  </div>
)}
            <section
              id="floor-plan-explorer"
              className={`${panel} scroll-mt-28 overflow-hidden`}
            >
              <div className="flex flex-wrap items-end justify-between gap-4 p-6 sm:p-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#D4A85A]">
                    03 / Furnished Floor Plans
                  </p>

                  <h3 className="mt-3 font-heading text-4xl">
                    Explore Your Floor Plan
                  </h3>

                  <p className="mt-3 text-xs text-white/55">
                    Interactive presentation layouts for the
                    selected apartment type.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setPlanFullscreen(true)}
                  className={outlineButton}
                >
                  <Maximize2 size={15} className="mr-2 inline" />
                  Full Screen
                </button>
              </div>

              <div className="flex flex-wrap gap-2 px-6 pb-5 sm:px-8">
                {UNITS.map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setUnit(value)}
                    className={`rounded-full border px-5 py-3 text-xs ${
                      unit === value
                        ? "border-[#D4A85A] bg-[#D4A85A] text-[#071321]"
                        : "border-white/20 text-white/65"
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>

              <PlanViewer
                key={`regular-${unit}`}
                unit={unit}
                floor={floor}
                onRoom={exploreRoom}
              />

              <div className="flex flex-wrap items-center justify-between gap-4 p-6 sm:p-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#D4A85A]">
                    Step Inside Your Residence
                  </p>

                  <h4 className="mt-2 font-heading text-2xl">
                    Explore the Rooms
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {ROOMS.map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => exploreRoom(value)}
                      className={outlineButton}
                    >
                      {value}
                      <ArrowUpRight size={13} className="ml-2 inline" />
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* INTERIOR GALLERY */}

            <section
              id="interior-gallery"
              className={`${panel} scroll-mt-28 overflow-hidden`}
            >
              <div className="p-6 sm:p-8">
                <p className="text-[10px] uppercase tracking-widest text-[#D4A85A]">
                  04 / Interior Gallery
                </p>

                <h3 className="mt-3 font-heading text-4xl">
                  Explore the Interiors
                </h3>

                <p className="mt-3 text-xs text-white/55">
                  Illustrative interior design collections.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {STYLES.map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setStyle(value)}
                      className={`rounded-full border px-5 py-3 text-xs ${
                        style === value
                          ? "border-[#D4A85A] bg-[#D4A85A] text-[#071321]"
                          : "border-white/20 text-white/65"
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative aspect-[4/3] sm:aspect-[16/9]">
                <Image
                  key={interiorSrc}
                  src={interiorSrc}
                  alt={`${style} ${room} interior`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 75vw"
                  className="object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071321]/85 via-transparent to-transparent" />

                <button
                  type="button"
                  onClick={() => setInteriorFullscreen(true)}
                  aria-label="Enlarge interior"
                  className="absolute right-5 top-5 rounded-full border border-white/40 bg-[#071321]/60 p-3"
                >
                  <Maximize2 size={18} />
                </button>

                <div className="absolute bottom-6 left-6">
                  <p className="text-xs text-[#D4A85A]">
                    {style} Collection
                  </p>

                  <h4 className="mt-1 font-heading text-4xl">
                    {room}
                  </h4>
                </div>

                <div className="absolute bottom-6 right-6 flex gap-2">
                  <button
                    type="button"
                    onClick={() => changeRoom(-1)}
                    aria-label="Previous room"
                    className="rounded-full border border-white/40 bg-[#071321]/60 p-3"
                  >
                    <ChevronLeft size={19} />
                  </button>

                  <button
                    type="button"
                    onClick={() => changeRoom(1)}
                    aria-label="Next room"
                    className="rounded-full border border-white/40 bg-[#071321]/60 p-3"
                  >
                    <ChevronRight size={19} />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 p-6">
                {ROOMS.map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setRoom(value)}
                    className={`rounded-full px-4 py-3 text-xs ${
                      room === value
                        ? "bg-white text-[#071321]"
                        : "border border-white/20 text-white/65"
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </section>

            {/* SWIMMING POOL AND GYM */}

            <section
              id="pv-amenities"
              className={`${panel} scroll-mt-28 p-5 sm:p-8`}
            >
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#D4A85A]">
                05 / Lifestyle Amenities
              </p>

              <h3 className="mt-3 font-heading text-4xl sm:text-5xl">
                Beyond Your Residence
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">
                Explore the swimming pool and residents' gym
                through premium architectural visualizations.
              </p>

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                {AMENITIES.map((item) => (
                  <article
                    key={item.title}
                    className="overflow-hidden rounded-xl border border-white/10 bg-[#102237]"
                  >
                    <button
                      type="button"
                      onClick={() => setAmenityOpen(item.image)}
                      aria-label={`Enlarge ${item.title}`}
                      className="group relative block aspect-[16/10] w-full overflow-hidden"
                    >
                      <Image
                        src={item.image}
                        alt={`${item.title} architectural visualization`}
                        fill
                        sizes="(max-width: 768px) 100vw, 45vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />

                      <span className="absolute right-4 top-4 rounded-full border border-white/30 bg-[#071321]/65 p-3">
                        <Maximize2 size={16} />
                      </span>
                    </button>

                    <div className="p-5">
                      <h4 className="font-heading text-2xl">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-xs leading-6 text-white/55">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* FLOOR-DEPENDENT BALCONY VIEWS */}

            <section
              id="pv-rooftop"
              className={`${panel} scroll-mt-28 overflow-hidden`}
            >
              <div className="p-5 sm:p-8">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#D4A85A]">
                  06 / Skyline Perspectives
                </p>

                <h3 className="mt-3 font-heading text-4xl sm:text-5xl">
                  The View From Above
                </h3>

                <p className="mt-3 text-sm text-white/55">
                  Select a floor to experience its
                  illustrative Nairobi skyline perspective.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {FLOORS.map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => {
                        setFloor(level);
                        setSection("rooftop");
                      }}
                      aria-pressed={floor === level}
                      className={`rounded-full border px-5 py-3 text-xs transition ${
                        floor === level
                          ? "border-[#D4A85A] bg-[#D4A85A] text-[#071321]"
                          : "border-white/20 text-white/70 hover:border-[#D4A85A]"
                      }`}
                    >
                      Floor {level}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative aspect-[4/3] bg-[#071321] sm:aspect-[16/9]">
                <Image
                  key={floor}
                  src={BALCONIES[floor]}
                  alt={`Floor ${floor} Nairobi skyline balcony visualization`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 75vw"
                  className="object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071321]/75 via-transparent to-transparent" />

                <button
                  type="button"
                  onClick={() => setBalconyOpen(true)}
                  aria-label="Enlarge balcony view"
                  className="absolute right-5 top-5 rounded-full border border-white/40 bg-[#071321]/65 p-3"
                >
                  <Maximize2 size={18} />
                </button>

                <div className="absolute bottom-6 left-6">
                  <p className="text-xs uppercase tracking-widest text-[#D4A85A]">
                    Balcony Perspective
                  </p>

                  <h4 className="mt-2 font-heading text-4xl sm:text-5xl">
                    Floor {floor}
                  </h4>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 p-5 sm:p-8">
                <p className="text-xs text-white/55">
                  Conceptual views, not verified site-specific
                  line-of-sight simulations.
                </p>

                <button
                  type="button"
                  onClick={() => goTo("apartments")}
                  className="flex items-center gap-2 text-xs text-[#D4A85A]"
                >
                  Explore This Floor's Apartments
                  <ArrowRight size={15} />
                </button>
              </div>
            </section>

            {/* FOOTER */}

            <div className="flex flex-wrap justify-between gap-4 border-t border-white/10 pt-5 text-xs text-white/40">
              <span>
                PropertyVision · An Apiyo Design Studio Experience
              </span>

              <Link href="/3d" className="text-[#D4A85A]">
                3D Visualization Portfolio
                <ArrowUpRight size={13} className="ml-1 inline" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN FLOOR PLAN */}

      {planFullscreen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full-screen floor plan"
          className="fixed inset-0 z-[130] flex flex-col bg-[#071321] p-3 sm:p-6"
        >
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-[#D4A85A]">
                PropertyVision · Floor Plan Explorer
              </p>

              <h2 className="mt-1 font-heading text-3xl">
                Floor {floor} · {unit}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setPlanFullscreen(false)}
              aria-label="Close floor plan"
              className="rounded-full border border-white/30 p-3"
            >
              <X size={20} />
            </button>
          </div>

          <div className="min-h-0 flex-1">
            <PlanViewer
              key={`fullscreen-${unit}`}
              unit={unit}
              floor={floor}
              fullscreen
              onRoom={exploreRoom}
            />
          </div>
        </div>
      )}

      {/* FULLSCREEN INTERIOR */}

      {interiorFullscreen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full-screen interior"
          className="fixed inset-0 z-[140] flex flex-col bg-[#030811] p-4 sm:p-6"
        >
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-[#D4A85A]">{style}</p>
              <h2 className="font-heading text-3xl">{room}</h2>
            </div>

            <button
              type="button"
              onClick={() => setInteriorFullscreen(false)}
              aria-label="Close interior"
              className="rounded-full border border-white/30 p-3"
            >
              <X size={20} />
            </button>
          </div>

          <div className="relative min-h-0 flex-1">
            <Image
              src={interiorSrc}
              alt={`${style} ${room}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <div className="flex justify-between py-4">
            <button
              type="button"
              onClick={() => changeRoom(-1)}
              className="flex items-center gap-2 text-xs"
            >
              <ChevronLeft size={18} />
              Previous
            </button>

            <button
              type="button"
              onClick={() => changeRoom(1)}
              className="flex items-center gap-2 text-xs"
            >
              Next
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* FULLSCREEN AMENITIES AND BALCONY */}

      {(amenityOpen || balconyOpen) && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full-screen architectural visualization"
          className="fixed inset-0 z-[145] flex flex-col bg-[#030811] p-4 sm:p-6"
        >
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs text-[#D4A85A]">
                Apiyo Design Studio · PropertyVision
              </p>

              <h2 className="mt-1 font-heading text-2xl sm:text-3xl">
                {balconyOpen
                  ? `Floor ${floor} Balcony`
                  : AMENITIES.find((item) => item.image === amenityOpen)
                      ?.title}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => {
                setAmenityOpen(null);
                setBalconyOpen(false);
              }}
              aria-label="Close viewer"
              className="rounded-full border border-white/30 p-3"
            >
              <X size={20} />
            </button>
          </div>

          <div className="relative min-h-0 flex-1">
            <Image
              src={balconyOpen ? BALCONIES[floor] : amenityOpen!}
              alt="Architectural visualization"
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* ENQUIRY MODAL */}

      {enquiryOpen && (
        <div
          className="fixed inset-0 z-[150] flex items-center justify-center bg-black/75 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setEnquiryOpen(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Property enquiry"
            className="w-full max-w-md rounded-2xl border border-[#D4A85A]/30 bg-[#0D1D30] p-7"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-heading text-3xl">
                Let's Talk Property
              </h2>

              <button
                type="button"
                onClick={() => setEnquiryOpen(false)}
                aria-label="Close enquiry"
              >
                <X size={20} />
              </button>
            </div>

            
<div className="mt-6 rounded-xl border border-[#D4A85A]/25 bg-[#071321] p-5">
  <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4A85A]">
    Your Selected Residence
  </p>

  <h3 className="mt-3 font-heading text-3xl text-white">
    {residenceId ? `Residence ${residenceId}` : `Floor ${floor}`}
  </h3>

  <div className="mt-4 space-y-2 text-sm text-white/65">
    <p>Floor: {floor}</p>

    {selectedFlat && (
      <p>Apartment: Flat {selectedFlat}</p>
    )}

    <p>Apartment Type: {selectedFlat ? "4 Bedroom" : unit}</p>

    <p>Interior Collection: {style}</p>
  </div>
</div>

<p className="mt-4 text-xs leading-6 text-white/55">
  Connect with our team to discuss this residence,
  available options and the next steps.
</p>


            <Link
              href="/consultation"
              className={`${goldButton} mt-6 flex items-center justify-center gap-2`}
            >
              Continue to Consultation
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
