import { Link } from "@tanstack/react-router";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "full" | "mark";
  asLink?: boolean;
};

export function Logo({ className, variant = "full", asLink = true }: LogoProps) {
  const image =
    variant === "full" ? (
      <img
        src="/entrenos-logo.png"
        alt="EntreNós"
        width={220}
        height={80}
        className={cn("h-11 w-auto object-contain", className)}
      />
    ) : (
      <span
        className={cn("block h-10 w-10 overflow-hidden rounded-xl", className)}
        aria-hidden="true"
      >
        <img
          src="/entrenos-logo.png"
          alt=""
          className="h-full w-full object-contain"
        />
      </span>
    );

  if (!asLink) return image;

  return (
    <Link to="/" aria-label="EntreNós — página inicial" className="inline-flex items-center">
      {image}
    </Link>
  );
}
