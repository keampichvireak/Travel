import { ParallaxScrollDemo } from "@/components/ParallaxScrollDemo";
import { LayoutGrid } from "@/components/ui/layout-grid";
import React from "react";

function Gallery() {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <h1 className="text-3xl font-bold font-serif">
          Selected Photos from Our Journey. 📸✨
        </h1>
      </div>
      <div className="max-h-[80vh] overflow-scroll">
        <ParallaxScrollDemo />
      </div>
    </>
  );
}

export default Gallery;
