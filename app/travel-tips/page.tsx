"use client";
import { CardStackDemo } from "@/components/CardStack";
import { CardHoverEffectDemo } from "@/components/ui/cardHover";
import React, { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import CardStackClone from "@/components/CardStackClone";
function TravelTips() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const HeroRef = useRef<HTMLDivElement>(null);
  const isHeroRefInView = useInView(HeroRef, { margin: "0px" });
  return (
    <>
      <div className="flex  flex-col">
        <div className="flex ">
          <CardStackDemo />
          <CardStackClone />
        </div>
        {/* <div>
          <CardHoverEffectDemo />
        </div> */}
        <div className="flex w-full max-h-[50vh] overflow-scroll overflow-x-hidden justify-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className=" w-2/3 flex flex-col gap-7 h-full bg-purple-200 border-none rounded-3xl bg-opacity-40 p-10"
          >
            {/* First Section */}
            <div>
              <h1 className="font-bold text-xl">
                Find Photogenic Places & Spots Using Instagrams
              </h1>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp; Each city in every country has certain must-see tourist
                spots, including places of worship, museums, or even landscapes
                full of natural beauty that you must visit. Instagram can be
                pretty useful as a starting point for pinning down which places
                you should necessarily add to your itinerary.
              </p>
            </div>
            {/* Second Section */}
            <div>
              <h1 className="font-bold text-xl">
                Learn Common Phrases of the Local Language
              </h1>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;This doesn’t mean that you have to spend weeks picking up
                the new language. It simply means that you can take out a few
                hours each week before your trip to learn some common phrases in
                the local language that will help you when in the foreign land.
              </p>
            </div>
            {/* Third Section */}
            <div>
              <h1 className="font-bold text-xl">
                Read a History Book About the Place You Are Visiting
              </h1>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;More knowledge never hurt anyone. It’s only human to be
                curious about a place before you visit it. For the sake of both
                your curiosity and for efficiency purposes, try to grab a hold
                of a history book about wherever you plan on visiting.
              </p>
            </div>
            {/* Fourth Section */}
            <div>
              <h1 className="font-bold text-xl">
                Get to Know Local Customs Before You Go
              </h1>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;If you are unaware of their culture entirely, you are
                quite likely to make this mistake. This is why it makes sense to
                read up a little on the traditions and customs of a place before
                you visit so that you understand them better and don’t risk
                acting in an insensitive manner.
              </p>
            </div>
            {/* Fifth Section */}
            <div>
              <h1 className="font-bold text-xl">
                Don’t Be Afraid to Take Your Kids with You
              </h1>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;In fact, traveling helps increase and if a child is made
                to travel from a younger age, they develop cultural awareness
                from that tender age and this shapes them up to be informed,
                educated, and sensitive adults.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      {/* <div className="flex flex-col w-screen gap-5">
          <motion.div
            ref={HeroRef}
            className="hero bg-base-200 min-h-[400px] max-w-[500px] rounded-2xl mx-0"
            initial={{ x: "-300px" }}
            animate={isHeroRefInView ? { x: 0 } : {}}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                className="max-w-sm rounded-2xl shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center items-center mr-20"
            ref={HeroRef}
            initial={{ x: "300px" }}
            animate={isHeroRefInView ? { x: 0 } : {}}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <div className="hero bg-base-200 min-h-[400px] max-w-[500px] rounded-2xl">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                  className="max-w-sm rounded-2xl shadow-2xl "
                />
                <div>
                  <h1 className="text-5xl font-bold">Box Office News!</h1>
                  <p className="py-2">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-end mr-32 ">
            <motion.div
              ref={HeroRef}
              initial={{ x: "500px" }}
              animate={isHeroRefInView ? { x: 0 } : {}}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="hero bg-base-200 min-h-[400px] max-w-[500px] rounded-2xl "
            >
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                  className="max-w-sm rounded-2xl shadow-2xl"
                />
                <div>
                  <h1 className="text-5xl font-bold">Box Office News!</h1>
                  <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </motion.div>
          </div>
        </div> */}
    </>
  );
}

export default TravelTips;
