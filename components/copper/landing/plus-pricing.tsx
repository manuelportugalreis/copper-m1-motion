import { CheckIcon, MinusIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  formatMemory,
  formatNotesHours,
  formatUsd,
  getPlans,
  type Plan,
} from "@/lib/copper/catalog";

const ROWS: { label: string; value: (plan: Plan) => string }[] = [
  { label: "Monthly", value: (plan) => `${formatUsd(plan.monthlyUsd)}/month` },
  { label: "Annual", value: (plan) => `${formatUsd(plan.annualUsd)}/year` },
  { label: "Memory kept", value: (plan) => formatMemory(plan.memoryDays) },
  {
    label: "Copper Notes recording",
    value: (plan) => formatNotesHours(plan.notesHoursPerMonth),
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  const highlighted = plan.id === "copper-plus";

  return (
    <Card
      className={cn(
        "relative py-0",
        highlighted && "border-primary ring-primary shadow-xl ring-2",
      )}
    >
      <CardContent className="flex flex-col gap-6 p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-2xl font-bold">{plan.name}</h3>
          {highlighted && <Badge>Most memory</Badge>}
        </div>
        <p>
          <span className="text-4xl font-extrabold">
            {formatUsd(plan.monthlyUsd)}
          </span>
          <span className="text-muted-foreground"> per month</span>
        </p>
        <dl className="divide-y">
          {ROWS.map((row) => (
            <div key={row.label} className="flex justify-between gap-4 py-3">
              <dt className="text-muted-foreground">{row.label}</dt>
              <dd className="text-right font-semibold">{row.value(plan)}</dd>
            </div>
          ))}
          <div className="flex justify-between gap-4 py-3">
            <dt className="text-muted-foreground">Refined answers</dt>
            <dd className="flex items-center gap-1 font-semibold">
              {plan.refinedAnswers ? (
                <>
                  <CheckIcon aria-hidden className="text-primary size-5" />
                  Included
                </>
              ) : (
                <>
                  <MinusIcon aria-hidden className="text-muted-foreground size-5" />
                  Not included
                </>
              )}
            </dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}

export function PlusPricing() {
  return (
    <section data-testid="plus-pricing" id="plus" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Free, or Copper Plus
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">
            Both devices work on the Free plan. Copper Plus remembers longer,
            records more, and adds Refined answers.
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {getPlans().map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
