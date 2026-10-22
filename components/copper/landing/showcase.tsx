import Image from "next/image";
import { cn } from "@/lib/utils";
import { getProducts } from "@/lib/copper/catalog";
import { LIFESTYLE } from "./product-images";

export function Showcase() {
  const photos = getProducts().flatMap((product) =>
    product.lifestyle
      .filter((src) => src in LIFESTYLE)
      .map((src) => ({ src, product, ...LIFESTYLE[src] })),
  );

  return (
    <section
      data-testid="showcase"
      id="showcase"
      className="bg-secondary text-secondary-foreground scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="mb-12 max-w-2xl text-3xl font-extrabold sm:text-4xl">
          Made for life in the Copper State
        </h2>
        <ul className="flex flex-col gap-14 md:gap-20">
          {photos.map((photo, index) => (
            <li
              key={photo.src}
              className="grid items-center gap-6 md:grid-cols-5 md:gap-12"
            >
              <div
                className={cn(
                  "overflow-hidden rounded-2xl shadow-lg md:col-span-3",
                  index % 2 === 1 && "md:order-last",
                )}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="h-auto w-full transition-transform duration-700 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100"
                />
              </div>
              <div className="md:col-span-2">
                <p className="text-muted-foreground text-sm font-semibold tracking-widest uppercase">
                  {photo.product.name}
                </p>
                <p className="font-heading mt-2 text-2xl font-bold text-balance sm:text-3xl">
                  {photo.caption}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
