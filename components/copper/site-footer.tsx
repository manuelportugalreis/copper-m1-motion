import Image from "next/image";

// Night Sky in both themes, so it always uses the Desert Sand wordmark.
export function SiteFooter() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-night text-sand border-t border-white/10"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 text-center sm:flex-row sm:text-left sm:px-6">
        <Image
          src="/assets/brand/copper-mascot.png"
          alt="Copper the robot mascot in a yellow hard hat, waving and holding a checklist"
          width={1254}
          height={1254}
          sizes="80px"
          className="h-auto w-20"
        />
        <div className="flex flex-col gap-2">
          <Image
            src="/brand/logo-dark.png"
            alt="Copper State Labs"
            width={1200}
            height={197}
            className="h-auto w-44"
          />
          <p className="text-sm opacity-80">Fictional — for educational use.</p>
        </div>
      </div>
    </footer>
  );
}
