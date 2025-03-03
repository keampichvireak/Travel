"use client";

import { cn } from "@/lib/utils";
import { CardStack } from "./ui/card-stack";
export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "",
    content: (
      <p>
        Travel far, travel wide, and let your soul be your guide as you explore
        the vast tapestry of our world.
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "",
    content: (
      <p>
        The world is a magnificent book, and those who do not travel read only a
        single page—a mere glimpse of its boundless chapters.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "",
    content: (
      <p>
        Beyond the horizon lies a realm of adventure waiting to unfold, inviting
        you to step boldly into the unknown.
      </p>
    ),
  },
];
