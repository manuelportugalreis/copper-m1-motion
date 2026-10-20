import { Hero } from "@/components/copper/landing/hero";
import { PlusPricing } from "@/components/copper/landing/plus-pricing";
import { PrivacySummary } from "@/components/copper/landing/privacy-summary";
import { Products } from "@/components/copper/landing/products";
import { Showcase } from "@/components/copper/landing/showcase";
import { SiteFooter } from "@/components/copper/site-footer";
import { SiteHeader } from "@/components/copper/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Products />
        <Showcase />
        <PlusPricing />
        <PrivacySummary />
      </main>
      <SiteFooter />
    </>
  );
}
