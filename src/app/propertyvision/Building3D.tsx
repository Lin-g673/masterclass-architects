
"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  ContactShadows,
  Environment,
} from "@react-three/drei";

const FLOORS = [4, 9, 12, 16];
const GOLD = "#D4A85A";
const FLOOR_HEIGHT = 0.48;

type BuildingProps = {
  selectedFloor: number;
  onSelectFloor: (floor: number) => void;
};

type PartProps = {
  position: [number, number, number];
  size: [number, number, number];
  color?: string;
  metalness?: number;
  roughness?: number;
  opacity?: number;
  emissive?: string;
  emissiveIntensity?: number;
};

function Part({
  position,
  size,
  color = "#E0DED7",
  metalness = 0.1,
  roughness = 0.65,
  opacity = 1,
  emissive = "#000000",
  emissiveIntensity = 0,
}: PartProps) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial
        color={color}
        metalness={metalness}
        roughness={roughness}
        transparent={opacity < 1}
        opacity={opacity}
        depthWrite={opacity === 1}
        emissive={emissive}
        emissiveIntensity={emissiveIntensity}
      />
    </mesh>
  );
}

function Building({
  selectedFloor,
  onSelectFloor,
}: BuildingProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  const towerWidth = 5.6;
  const towerDepth = 3.5;
  const podiumHeight = 0.95;
  const roofY = podiumHeight + 16 * FLOOR_HEIGHT;

  return (
    <group>
      {/* Ground and landscape podium */}
      <Part
        position={[0, -0.12, 0]}
        size={[12, 0.24, 9]}
        color="#46535A"
      />

      <Part
        position={[0, 0.12, 0]}
        size={[7.5, 0.24, 5.5]}
        color="#C5C4BE"
      />

      {/* Glazed entrance lobby */}
      <Part
        position={[0, 0.52, 0]}
        size={[6.1, 0.85, 4.1]}
        color="#25313B"
        metalness={0.45}
        roughness={0.35}
      />

      <Part
        position={[0, 0.54, 2.08]}
        size={[5.6, 0.67, 0.055]}
        color="#76929D"
        metalness={0.8}
        roughness={0.12}
      />

      {[-2.4, -1.2, 0, 1.2, 2.4].map((x) => (
        <Part
          key={`lobby-${x}`}
          position={[x, 0.54, 2.12]}
          size={[0.045, 0.78, 0.08]}
          color="#252B30"
          metalness={0.7}
        />
      ))}

      <Part
        position={[0, 0.98, 0]}
        size={[6.6, 0.18, 4.5]}
        color="#D6D4CE"
      />

      {/* Sixteen residential floors */}
      {Array.from({ length: 16 }, (_, index) => {
        const level = index + 1;
        const y = podiumHeight + index * FLOOR_HEIGHT + FLOOR_HEIGHT / 2;

        const selected = level === selectedFloor;
        const active = FLOORS.includes(level);
        const highlighted = selected || hovered === level;

        const slabColor = selected ? GOLD : "#E3E0D8";
        const glassColor = selected ? "#D5B578" : "#7797A7";

        return (
          <group key={level} position={[0, y, 0]}>
            {/* Main structural building mass */}
            <Part
              position={[0, 0, 0]}
              size={[towerWidth, 0.43, towerDepth]}
              color={highlighted ? "#56616B" : "#3C4C58"}
              roughness={0.55}
            />

            {/* Floor-to-ceiling front glazing */}
            <Part
              position={[0, 0, towerDepth / 2 + 0.018]}
              size={[5.15, 0.34, 0.045]}
              color={glassColor}
              metalness={0.82}
              roughness={0.16}
              opacity={0.88}
            />

            {/* Side glazing */}
            <Part
              position={[towerWidth / 2 + 0.02, 0, 0]}
              size={[0.045, 0.34, 2.9]}
              color="#668899"
              metalness={0.8}
              roughness={0.18}
              opacity={0.9}
            />

            {/* Vertical facade mullions */}
            {[-2.05, -1.025, 0, 1.025, 2.05].map((x) => (
              <Part
                key={`mullion-${level}-${x}`}
                position={[x, 0, 1.81]}
                size={[0.055, 0.39, 0.075]}
                color="#202B34"
                metalness={0.65}
                roughness={0.3}
              />
            ))}

            {/* Side window divisions */}
            {[-1.1, 0, 1.1].map((z) => (
              <Part
                key={`side-${level}-${z}`}
                position={[2.85, 0, z]}
                size={[0.065, 0.39, 0.055]}
                color="#1E2932"
                metalness={0.65}
              />
            ))}

            {/* Projecting balcony slab */}
            <Part
              position={[0, -0.205, 2.06]}
              size={[5.95, 0.09, 1.05]}
              color={slabColor}
              roughness={0.75}
            />

            {/* Glass balcony balustrade */}
            <Part
              position={[0, -0.015, 2.57]}
              size={[5.8, 0.3, 0.035]}
              color={selected ? "#E2C27D" : "#A6C5D0"}
              metalness={0.45}
              roughness={0.14}
              opacity={0.57}
            />

            {/* Balcony handrail */}
            <Part
              position={[0, 0.14, 2.58]}
              size={[5.85, 0.035, 0.06]}
              color="#28343B"
              metalness={0.8}
              roughness={0.22}
            />

            {/* Balcony vertical railing supports */}
            {[-2.75, -1.4, 0, 1.4, 2.75].map((x) => (
              <Part
                key={`rail-${level}-${x}`}
                position={[x, -0.015, 2.59]}
                size={[0.035, 0.3, 0.045]}
                color="#343F46"
                metalness={0.7}
              />
            ))}

            {/* Architectural slab edge */}
            <Part
              position={[0, -0.225, 1.78]}
              size={[6.0, 0.07, 3.85]}
              color={slabColor}
              roughness={0.7}
            />

            {/* Warm accent lighting beneath balconies */}
            <Part
              position={[0, -0.165, 2.29]}
              size={[4.8, 0.012, 0.035]}
              color="#F4D6A2"
              emissive="#E9A85C"
              emissiveIntensity={0.8}
            />

            {/* Interactive transparent floor target */}
            <mesh
              position={[0, 0, 0]}
              onClick={(event) => {
                event.stopPropagation();
                if (active) onSelectFloor(level);
              }}
              onPointerOver={(event) => {
                event.stopPropagation();
                if (active) {
                  setHovered(level);
                  document.body.style.cursor = "pointer";
                }
              }}
              onPointerOut={() => {
                setHovered(null);
                document.body.style.cursor = "auto";
              }}
            >
              <boxGeometry args={[6.1, 0.46, 5.2]} />
              <meshBasicMaterial
                transparent
                opacity={0}
                depthWrite={false}
              />
            </mesh>

            {/* Gold selection band */}
            {selected && (
              <>
                <Part
                  position={[0, -0.19, 2.64]}
                  size={[6.1, 0.055, 0.08]}
                  color={GOLD}
                  emissive={GOLD}
                  emissiveIntensity={0.65}
                />

                <Part
                  position={[2.96, -0.19, 0]}
                  size={[0.075, 0.055, 4.0]}
                  color={GOLD}
                  emissive={GOLD}
                  emissiveIntensity={0.5}
                />
              </>
            )}
          </group>
        );
      })}

      {/* Continuous vertical facade fins */}
      {[-2.91, 2.91].map((x) => (
        <Part
          key={`fin-${x}`}
          position={[x, (podiumHeight + roofY) / 2, 1.7]}
          size={[0.14, roofY - podiumHeight, 0.32]}
          color="#D8D4CB"
          metalness={0.12}
          roughness={0.65}
        />
      ))}

      {/* Rooftop architectural treatment */}
      <Part
        position={[0, roofY + 0.07, 0]}
        size={[6.2, 0.17, 4.05]}
        color="#E0DED8"
      />

      {/* Parapet walls */}
      <Part
        position={[0, roofY + 0.35, -1.95]}
        size={[6.2, 0.55, 0.14]}
        color="#D4D0C8"
      />

      {[-3.03, 3.03].map((x) => (
        <Part
          key={`parapet-${x}`}
          position={[x, roofY + 0.35, 0]}
          size={[0.14, 0.55, 4.0]}
          color="#D4D0C8"
        />
      ))}

      {/* Rooftop service enclosure */}
      <Part
        position={[-1.45, roofY + 0.54, -0.75]}
        size={[1.8, 0.92, 1.45]}
        color="#49555C"
      />

      <Part
        position={[-1.45, roofY + 1.03, -0.75]}
        size={[2, 0.12, 1.65]}
        color="#303D46"
      />

      {/* Rooftop pergola */}
      {[0.8, 1.35, 1.9, 2.45].map((x) => (
        <Part
          key={`pergola-${x}`}
          position={[x, roofY + 0.78, 0.7]}
          size={[0.09, 0.09, 2.4]}
          color="#BCA27A"
        />
      ))}

      {/* Planter boxes around the podium */}
      {[-4.1, 4.1].map((x) => (
        <group key={`planter-${x}`}>
          <Part
            position={[x, 0.24, 2.4]}
            size={[0.9, 0.35, 1.1]}
            color="#8B8C81"
          />

          {[0, 0.22, -0.22].map((offset) => (
            <mesh
              key={offset}
              position={[x + offset, 0.65, 2.4]}
              castShadow
            >
              <sphereGeometry args={[0.26, 10, 8]} />
              <meshStandardMaterial
                color="#36594A"
                roughness={0.9}
              />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

export default function Building3D({
  selectedFloor,
  onSelectFloor,
}: BuildingProps) {
  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-xl bg-[#0B1828] sm:h-[650px]">
      <Canvas
        shadows
        dpr={[1, 1.75]}
        camera={{
          position: [13, 10, 17],
          fov: 38,
          near: 0.1,
          far: 100,
        }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={["#101F2E"]} />

        <ambientLight intensity={0.8} />

        <hemisphereLight
          args={["#DDEAF5", "#44515A", 1.25]}
        />

        <directionalLight
          position={[9, 16, 12]}
          intensity={3}
          color="#FFF1D8"
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-camera-left={-12}
          shadow-camera-right={12}
          shadow-camera-top={15}
          shadow-camera-bottom={-12}
        />

        <directionalLight
          position={[-8, 9, -7]}
          intensity={1.3}
          color="#A9C9E8"
        />

        <Environment preset="city" />

        <Building
          selectedFloor={selectedFloor}
          onSelectFloor={onSelectFloor}
        />

        <ContactShadows
          position={[0, -0.23, 0]}
          opacity={0.38}
          scale={18}
          blur={2.5}
          far={5}
          resolution={256}
          frames={1}
        />

        <OrbitControls
          target={[0, 4.5, 0]}
          enablePan={false}
          enableDamping
          dampingFactor={0.06}
          minDistance={11}
          maxDistance={32}
          minPolarAngle={0.2}
          maxPolarAngle={Math.PI / 2.05}
        />
      </Canvas>

      <div className="pointer-events-none absolute left-5 top-5 max-w-[240px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4A85A]">
          PropertyVision / Interactive Architecture
        </p>

        <h3 className="mt-2 font-heading text-3xl text-white">
          The Residence
        </h3>

        <p className="mt-2 text-xs leading-5 text-white/65">
          Explore the building in real time.
          Rotate, zoom and select a highlighted floor.
        </p>
      </div>

      <div className="pointer-events-none absolute right-5 top-5 rounded-lg border border-white/15 bg-[#071321]/80 px-4 py-3 text-right backdrop-blur-md">
        <p className="text-[10px] uppercase tracking-widest text-white/50">
          Selected Level
        </p>
        <p className="mt-1 font-heading text-2xl text-[#D4A85A]">
          Floor {selectedFloor}
        </p>
      </div>

      <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
        {FLOORS.map((floor) => (
          <button
            key={floor}
            type="button"
            onClick={() => onSelectFloor(floor)}
            className={`rounded-full border px-4 py-2 text-xs transition ${
              selectedFloor === floor
                ? "border-[#D4A85A] bg-[#D4A85A] text-[#071321]"
                : "border-white/30 bg-[#071321]/85 text-white hover:border-[#D4A85A]"
            }`}
          >
            Floor {floor}
          </button>
        ))}
      </div>
    </div>
  );
}
