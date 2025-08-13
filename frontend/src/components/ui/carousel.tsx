"use client";

import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type CarouselProps = PropsWithChildren<{
  className?: string;
  ariaLabel?: string;
  /** Width classes applied to each item wrapper (e.g., min-w-[280px]) */
  itemClassName?: string;
  /** Optional id to anchor from buttons/links */
  id?: string;
}>;

export function Carousel({
  children,
  className,
  ariaLabel,
  itemClassName = "min-w-[260px]",
  id,
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  const scrollByAmount = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(600, Math.max(280, el.clientWidth * 0.8));
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const checkScrollable = () => {
      setIsScrollable(el.scrollWidth > el.clientWidth + 2);
    };

    checkScrollable();

    const ro = new ResizeObserver(checkScrollable);
    ro.observe(el);
    window.addEventListener("resize", checkScrollable);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", checkScrollable);
    };
  }, []);

  return (
    <div id={id} className={cn("relative", className)} aria-label={ariaLabel}>
      <div
        ref={trackRef}
        className={cn(
          "flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 px-2 md:px-10",
          "[&>*]:snap-start"
        )}
      >
        {React.Children.map(children, (child, idx) => (
          <div className={cn(itemClassName)} key={idx}>
            {child}
          </div>
        ))}
      </div>
      <button
        type="button"
        aria-label="Previous"
        onClick={() => scrollByAmount(-1)}
        className={cn(
          "absolute left-1 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-white text-foreground shadow border hover:bg-red-50",
          !isScrollable && "hidden",
          isScrollable && "hidden md:flex"
        )}
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => scrollByAmount(1)}
        className={cn(
          "absolute right-1 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-white text-foreground shadow border hover:bg-red-50",
          !isScrollable && "hidden",
          isScrollable && "hidden md:flex"
        )}
      >
        ›
      </button>
    </div>
  );
}


