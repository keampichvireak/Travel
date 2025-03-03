"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import React from "react";

function Contact() {
  const words = [
    {
      text: "Discover",
    },
    {
      text: "your",
    },
    {
      text: "adventure",
    },
    {
      text: "with",
    },
    {
      text: "us.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="mt-64 overflow-x-hidden ">
      {/* FORM */}
      <div className="flex justify-around">
        <div className="flex flex-col flex-[3] ">
          <div className="flex justify-center flex-col rounded-3xl items-center w-[700px] mx-auto shadow-lg p-8 sm:w-[500px]  ">
            <h1 className="text-[40px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              <b>Say Hello</b>
            </h1>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">How can we call you?</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email : </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Subject :</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            {/* Text area */}
            <label className="form-control">
              <div className="label">
                <span className="label-text">Write here :</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-32 w-[320px]"
                placeholder="Bio"
              ></textarea>
            </label>
            <button className="btn btn-neutral mt-5">Submit</button>
          </div>
        </div>
        <div className=" sm:hidden hide-at-850px md:flex flex-[2] justify-center items-center show-at-966px  ">
          <div className="flex flex-col items-center justify-center h-[40rem]  hide-at-965px">
            <TypewriterEffectSmooth words={words} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
