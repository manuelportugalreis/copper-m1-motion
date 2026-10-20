import { ShieldCheckIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getPrivacySummary } from "@/lib/copper/catalog";

export function PrivacySummary() {
  const privacy = getPrivacySummary();

  return (
    <section
      data-testid="privacy-summary"
      id="privacy"
      className="bg-accent text-accent-foreground scroll-mt-24"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-5 md:gap-12 md:py-24">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Your recordings, your call
          </h2>
          <p className="mt-3 text-lg font-semibold">
            How Copper handles what it hears, under our {privacy.policy} privacy
            policy.
          </p>
        </div>
        <Card className="py-0 md:col-span-3">
          <CardContent className="p-6 sm:p-8">
            <ul className="flex flex-col gap-5">
              {privacy.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <ShieldCheckIcon
                    aria-hidden
                    className="text-accent mt-0.5 size-5 shrink-0"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
