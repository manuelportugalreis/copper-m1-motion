import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { formatUsd, getProducts, type Product } from "@/lib/copper/catalog";
import { CUTOUT_ALT, CUTOUT_SIZE } from "./product-images";

// Catalog color names → brand swatch.
const SWATCHES: Record<string, string> = {
  "Polished Copper": "bg-copper",
  "Brushed Copper": "bg-copper",
  "Patina Teal": "bg-patina",
  "Desert Sand": "bg-sand",
  "Night Sky": "bg-night",
};

function ProductCard({ product }: { product: Product }) {
  return (
    <Card
      data-testid="product-card"
      data-product={product.id}
      className="gap-0 overflow-hidden py-0"
    >
      <div className="bg-secondary flex flex-col items-center gap-4 px-8 pt-8 pb-6">
        <Image
          src={product.cutout}
          alt={CUTOUT_ALT[product.id]}
          width={CUTOUT_SIZE}
          height={CUTOUT_SIZE}
          sizes="(min-width: 768px) 280px, 60vw"
          className="h-auto w-3/5 max-w-72 drop-shadow-lg"
        />
        <ul aria-label="Colors" className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
          {product.colors.map((color) => (
            <li key={color} className="flex items-center gap-2">
              <span
                aria-hidden
                className={cn(
                  "size-4 rounded-full border border-black/15",
                  SWATCHES[color] ?? "bg-muted",
                )}
              />
              {color}
            </li>
          ))}
        </ul>
      </div>
      <CardContent className="flex flex-1 flex-col gap-5 p-6 sm:p-8">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold">{product.name}</h3>
            <p className="text-muted-foreground">{product.type}</p>
          </div>
          <p className="text-3xl font-extrabold">{formatUsd(product.priceUsd)}</p>
        </div>
        <ul className="flex flex-col gap-4">
          {product.features.map((feature) => (
            <li key={feature.name} className="border-primary border-l-4 pl-4">
              <p className="font-semibold">{feature.name}</p>
              <p className="text-muted-foreground">{feature.description}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function Products() {
  return (
    <section data-testid="products" id="products" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Two devices, one helpful Copper
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">
            Copper Home looks after the house. Copper Notes looks after your
            meetings and lectures. Both work with the Copper app.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {getProducts().map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
