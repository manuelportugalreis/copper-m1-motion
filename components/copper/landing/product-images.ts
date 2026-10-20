import type { ProductId } from "@/lib/copper/catalog";

// Alt text and captions for the product photography. Image paths come from the
// catalog; this file only describes what each photo shows.

export const CUTOUT_SIZE = 1254;

export const CUTOUT_ALT: Record<ProductId, string> = {
  "copper-home":
    "Copper Home smart speaker in copper fabric with a round clock display",
  "copper-notes":
    "Copper Notes clip-on recorder in brushed copper with a glowing amber ring",
};

type LifestylePhoto = {
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const LIFESTYLE: Record<string, LifestylePhoto> = {
  "/assets/lifestyle/copper-home-desert-light.png": {
    alt: "Copper Home on a stone kitchen counter, with a desert sunset and saguaros through the window",
    caption: "Copper Home keeps the house running while the desert sun goes down.",
    width: 1672,
    height: 941,
  },
  "/assets/lifestyle/copper-notes-stone-desk.png": {
    alt: "Copper Notes standing on a stone desk next to its round copper charging puck",
    caption: "Charged overnight and ready for the first meeting of the day.",
    width: 1672,
    height: 941,
  },
  "/assets/lifestyle/copper-notes-golden-hour.png": {
    alt: "A man writing in a notebook at a café table with Copper Notes clipped to his shirt pocket",
    caption: "Clip it on, write what matters, and let Copper Notes catch the rest.",
    width: 1536,
    height: 1024,
  },
};
