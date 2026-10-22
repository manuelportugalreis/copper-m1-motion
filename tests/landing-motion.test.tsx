import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";

function animatedElements(container: HTMLElement) {
  return [
    ...container.querySelectorAll<HTMLElement>(
      "[class*='animate-'], [class*='hover:'], [class*='group-hover:']",
    ),
  ];
}

describe("Landing page motion", () => {
  it("floats both hero product images and breathes the circle behind them", () => {
    const { getByTestId } = render(<Home />);
    const hero = getByTestId("hero");
    expect(hero.querySelectorAll("img.animate-float")).toHaveLength(2);
    expect(hero.querySelector(".animate-breathe")).not.toBeNull();
  });

  it("lifts product cards and zooms showcase photos on hover", () => {
    const { getAllByTestId, getByTestId } = render(<Home />);
    for (const card of getAllByTestId("product-card")) {
      expect(card.className).toContain("hover:-translate-y-1");
    }
    const photos = getByTestId("showcase").querySelectorAll("img");
    expect(photos.length).toBeGreaterThan(0);
    photos.forEach((photo) =>
      expect(photo.className).toContain("hover:scale-105"),
    );
  });

  it("switches every animation and hover motion off for reduced-motion users", () => {
    const { container } = render(<Home />);
    const moving = animatedElements(container).filter((el) =>
      /animate-(float|breathe)|hover:-translate|hover:scale/.test(el.className),
    );
    expect(moving.length).toBeGreaterThan(0);
    moving.forEach((el) => expect(el.className).toMatch(/motion-reduce:/));
  });
});
