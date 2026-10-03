from pathlib import Path
from PIL import Image, ImageOps

SOURCE = Path("public/houseplans")
OUTPUT = Path("public/houseplans-optimized")

MAX_WIDTH = 1400
MAX_HEIGHT = 1400
QUALITY = 78

OUTPUT.mkdir(parents=True, exist_ok=True)

total_original = 0
total_optimized = 0

for source in SOURCE.rglob("*"):
    if not source.is_file():
        continue

    if source.suffix.lower() not in (".png", ".jpg", ".jpeg"):
        continue

    relative = source.relative_to(SOURCE)
    destination = (OUTPUT / relative).with_suffix(".webp")
    destination.parent.mkdir(parents=True, exist_ok=True)

    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original)
        image.thumbnail(
            (MAX_WIDTH, MAX_HEIGHT),
            Image.Resampling.LANCZOS
        )

        if image.mode not in ("RGB", "RGBA"):
            image = image.convert("RGBA" if "A" in image.getbands() else "RGB")

        image.save(
            destination,
            "WEBP",
            quality=QUALITY,
            method=6
        )

    original_size = source.stat().st_size
    optimized_size = destination.stat().st_size

    total_original += original_size
    total_optimized += optimized_size

    print(
        f"{source.name}: "
        f"{original_size / 1048576:.2f} MB -> "
        f"{optimized_size / 1048576:.2f} MB"
    )

print("\nOptimization completed.")
print(f"Original total: {total_original / 1048576:.2f} MB")
print(f"Optimized total: {total_optimized / 1048576:.2f} MB")

if total_original:
    reduction = (1 - total_optimized / total_original) * 100
    print(f"Reduction: {reduction:.1f}%")