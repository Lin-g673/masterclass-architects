from pathlib import Path
from PIL import Image, ImageOps
import re

files = [
    "src/app/about/page.tsx",
    "src/app/students/page.tsx",
    "src/app/consultation/page.tsx",
    "src/app/components/Navbar.tsx",
    "src/app/components/Footer.tsx",
]

page = "\n".join(
    Path(file).read_text(encoding="utf-8")
    for file in files
)
paths = sorted(set(re.findall(
    r'/[\w./-]+\.(?:png|jpg|jpeg|webp)',
    page,
    flags=re.IGNORECASE
)))

converted = 0
missing = []

for url in paths:
    source = Path("public") / url.lstrip("/")

    if not source.exists():
        missing.append(url)
        continue

    if source.suffix.lower() == ".webp":
        continue

    destination = source.with_suffix(".webp")

    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original)
        image.thumbnail((1920, 1920), Image.Resampling.LANCZOS)

        if image.mode not in ("RGB", "RGBA"):
            image = image.convert("RGB")

        image.save(destination, "WEBP", quality=80, method=6)

    before = source.stat().st_size / 1048576
    after = destination.stat().st_size / 1048576

    print(f"{source.name}: {before:.2f} MB -> {after:.2f} MB")
    converted += 1

print(f"\nConverted: {converted}")
print(f"Missing source files: {len(missing)}")

for path in missing:
    print("MISSING:", path)