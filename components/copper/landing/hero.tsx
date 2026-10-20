import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/copper/catalog";
import { CUTOUT_ALT, CUTOUT_SIZE } from "./product-images";

// The larger product sits back-left, the smaller one overlaps front-right.
const PLACEMENT = [
  "left-0 top-0 w-[78%]",
  "bottom-0 right-0 w-[50%] drop-shadow-2xl",
];

export function Hero() {
  const products = getProducts();

  return (
    <section
      data-testid="hero"
      id="top"
      className="bg-secondary text-secondary-foreground scroll-mt-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-24">
        <div className="flex flex-col items-start gap-5">
          <p className="text-muted-foreground text-sm font-semibold tracking-widest uppercase">
            {products.map((product) => product.name).join(" · ")}
          </p>
          <h1 className="text-4xl leading-tight font-extrabold text-balance sm:text-5xl lg:text-6xl">
            Smart help for your home and your meetings.
          </h1>
          <p className="text-xl font-semibold sm:text-2xl">
            From raw ideas to refined answers.
          </p>
          <p className="text-muted-foreground max-w-md text-lg">
            A smart speaker that remembers what your household needs, and a
            clip-on recorder that turns every meeting into clear notes.
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <Button asChild size="lg" className="px-6 text-base">
              <a href="#products">See products</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-6 text-base">
              <a href="#plus">Compare plans</a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto aspect-[5/4] w-full max-w-lg">
          <div
            aria-hidden
            className="bg-primary/15 absolute inset-[6%] rounded-full"
          />
          {products.map((product, index) => (
            <Image
              key={product.id}
              src={product.cutout}
              alt={CUTOUT_ALT[product.id]}
              width={CUTOUT_SIZE}
              height={CUTOUT_SIZE}
              priority
              sizes="(min-width: 768px) 40vw, 80vw"
              className={`absolute h-auto drop-shadow-xl ${PLACEMENT[index] ?? ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
