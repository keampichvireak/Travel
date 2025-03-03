"use client";

import { ParallaxScroll } from "./ui/parallax-scroll";

export function ParallaxScrollDemo() {
  return <ParallaxScroll images={images} />;
}

const images = [
  "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1520962922320-2038eebab146?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1689516470164-61fd6f94b7f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGxhbmRzY2FwZXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1535479804851-93f60320e644?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1563791877359-4a03fb576945?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1504294198417-66eaa23e79e1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1622979358300-68884045fa62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGxhbmRzY2FwZXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1533680635069-35927f241ead?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGxhbmRzY2FwZXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1503993656770-0479a287559e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGxhbmRzY2FwZXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1584433213328-fad675bc3052?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGxhbmRzY2FwZXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1516739711484-6f80025660c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGxhbmRzY2FwZXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1600375672973-3fb1067ef8b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGxhbmRzY2FwZXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1503924087716-07cbd5f49b21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGxhbmRzY2FwZXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1494783435443-c15feee0a80a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGxhbmRzY2FwZXN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1670761685615-c0282f3fd649?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGxhbmRzY2FwZXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1532024639950-31addd0b8f2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGxhbmRzY2FwZXN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1690481525613-e0169273609a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGxhbmRzY2FwZXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1600337752115-de2c09d6704f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGxhbmRzY2FwZXN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1691434474131-01f982a2dab1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGxhbmRzY2FwZXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1701433903114-604135ec6224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGxhbmRzY2FwZXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1683011837386-68a8ecf9a835?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGxhbmRzY2FwZXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1689516470109-cf88f00da714?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGxhbmRzY2FwZXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1683014840734-529aaa12a085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGxhbmRzY2FwZXN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1715504303290-dd3592224d21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGxhbmRzY2FwZXN8ZW58MHx8MHx8fDA%3D",
];
