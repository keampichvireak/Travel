// import Link from "next/link";
// import React from "react";
// import NavLink from "./navLink";
// import { motion } from "framer-motion";
// function NavBar() {
//   const links = [
//     { url: "/", title: "Home" },
//     { url: "/destination", title: "Destination" },
//     { url: "/travel-tips", title: "Travel Tips" },
//     { url: "/gallery", title: "Gallery" },
//     { url: "/contact", title: "Contact" },
//   ];
//   return (
//     <div className="navbar flex justify-around gap-10 mb-6 border-none border-gray-300  rounded-2xl mt-10 ">
//       <div>
//         <Link href="/">
//           <h1 className="text-4xl font-bold text-black">PIKAPU</h1>
//         </Link>
//       </div>
//       <div className="font-serif text-xl flex gap-5 text-black">
//         {links.map((link) => (
//           <NavLink link={link} key={link.url} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default NavBar;

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { url: "/", title: "Home" },
  { url: "/destination", title: "Destination" },
  { url: "/gallery", title: "Gallery" },
  { url: "/travel-tips", title: "Tips" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    // Close the motion.div when the pathname changes
    setOpen(false);
  }, [pathname]);
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center ">
        <Link
          href="/"
          className="text-sm bg-black rounded-xl p-1 font-semibold flex items-center justify-center "
        >
          <span className="text-white mr-1">PIKA</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .PU
          </span>
        </Link>
      </div>
      {/* SOCIAL */}
      <div className="show-at-850px  md:flex gap-4 w-1/3">
        <Link href="https://github.com">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://dribbble.com/">
          <Image src="/dribbble.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.instagram.com">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.facebook.com">
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.pinterest.com">
          <Image src="/pinterest.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className=" absolute top-0 left-0 w-screen h-[160vh] bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-[900]"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
