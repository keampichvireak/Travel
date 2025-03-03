"use client";
import Cursor from "../cursor/Cursor";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ImagesSlider } from "../ui/images-slider";
import Link from "next/link";
import "./home.css";
function HomePage() {
  const images = [
    "https://images.unsplash.com/photo-1539768942893-daf53e448371?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1466500419182-8602dc906b51?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <>
      {/* <Cursor /> */}
      <div className="flex flex-col  overflow-x-hidden  ">
        <div className="flex gap-5 justify-between  mb-16">
          <div className="flex-[3] flex justify-center">
            <div className="flex flex-col w-[600px] gap-7 shadow-xl rounded-3xl p-14 medium">
              <h1 className="font-cursive">ME ? </h1>
              <p className="font-cursive">Hi, Im Pika Pu</p>
              <p className="font-cursive">
                A passionate traveler who's explored over 30 countries , I'm
                here to share my adventure and tips with fellow travel
                enthusiasts .
              </p>
              <h2 className="font-cursive">My Favorite Spots </h2>

              <ul className="flex flex-col gap-5 list-disc">
                <li>
                  <p className="font-cursive ">
                    <b> Bali, Indonesia:</b> A paradise for beach lovers and
                    culture seekers
                  </p>
                </li>
                <li>
                  <p className="font-cursive ">
                    <b>Kyoto, Japan:</b> Where tradition meets modernity
                  </p>
                </li>
                <li>
                  <p className="font-cursive ">
                    <b>Amalfi Coast, Italy:</b> Breathtaking views and charming
                    villages
                  </p>
                </li>
              </ul>

              <div className="flex justify-center">
                <button className="btn btn-active btn-primary max-w-max">
                  Contact US
                </button>
              </div>
            </div>
          </div>
          <div className="flex-[2] flex justify-start items-center sm:hidden md:flex ">
            <div className="rounded-full overflow-hidden">
              <Image
                alt="Rounded Image"
                src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww"
                width={400} // Adjusted size for better alignment
                height={200}
              />
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <progress
            className="progress w-1/2 "
            value="100"
            max="100"
          ></progress>
        </div>

        {/* SECTION 2 */}
        <div className="flex mt-20  sm:w-[1000px] md:w-[1200px]">
          {/* Accordion */}
          <div className="flex flex-[3] flex-col">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium font-serif">
                Destination Type
              </div>
              <div className="collapse-content leading-8 ">
                <p className="font-sans text-sm md:text-md">
                  I'm most interested in exploring urban landscapes. There's
                  something incredibly exicitng about immersing mysel in the
                  hustle and bustle of a new city. I love wandering through
                  vibrant neighborhoods, experiencing the local culture, and
                  uncovering hidden spots that only the locals know about . From
                  visitng iconic landmars to trying out trendy cafes, urban
                  destinations offer a dynamic mix of experiences that keep me
                  engaged and inspired .
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 ">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium font-serif">
                Travel Style
              </div>
              <div className="collapse-content">
                <p className="font-sans leading-8">
                  My preferred travel style is budget-friendly adventure . I
                  believe that travling doesn'have to be expensive to be
                  rewarding.I enjoy the thrill of finding affordable
                  accommodations, hunting down the best local street food, and
                  discovering attractions that are both unique and easy on the
                  wallet. For me , traveling on a budget is not just about
                  saving money but also about embracing the spontaneity and
                  creativity that comes with it. I find that some of the most
                  memorable experiences often come from exploring
                  off-the-beaten-path destinations that offer authentic and
                  affordable adventures.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium font-serif">
                Season
              </div>
              <div className="collapse-content">
                <p className="font-sans leading-8">
                  I'm planning to travel during the spring season.Spring is a
                  wonderful time to explore new destinations because the weather
                  is usually mild, making it perfect for outdoor activies. I
                  love witnessing the burst of colors as flowers bloom and
                  landscapes come to life after winter. It's also a great time
                  to visit popular tourist spots before the summer crowds
                  arrive. Whether it's hiking through lush green trails,
                  enjoying a picnic in a blooming garden, or simply strolling
                  through a charming town , spring offers a refreshing and
                  invigorating travel experience.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-[2]"></div>
        </div>

        <div className="mt-24 ">
          <ImagesSlider
            className="h-[30rem] rounded-2xl hidden md:block"
            images={images}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: -80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="z-50 flex flex-col justify-center items-center"
            >
              <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                My recently trip
              </motion.p>
              <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                <Link href="/contact">
                  <span>Join with us →</span>
                </Link>
                <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
              </button>
            </motion.div>
          </ImagesSlider>
        </div>
      </div>
    </>
  );
}

export default HomePage;
