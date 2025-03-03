import React from "react";
import { cn } from "@/lib/utils";
import { CardStack } from "./ui/card-stack";

function CardStackClone() {
  return (
    <>
      <div className="h-[40rem] flex items-center justify-center w-full">
        <CardStack items={CARDS} />
      </div>
    </>
  );
}

export default CardStackClone;

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
        Travel humbles us, revealing our place in the grand scheme of things. It
        reminds us that we are but a speck in the vast expanse of our planet.
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "",
    content: (
      <p>
        In the pursuit of memories, collect moments—the intangible treasures
        that enrich your heart and soul—rather than accumulating material
        possessions.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "",
    content: (
      <p>
        Traveling leaves you momentarily speechless, then transforms you into a
        captivating storyteller, weaving tales of distant lands and
        unforgettable experiences.
      </p>
    ),
  },
];
