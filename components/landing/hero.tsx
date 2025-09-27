"use client";

import type React from "react";

import Link from "next/link";
import TailwindCSS from "@/components/icons/tailwindcss";
import { motion } from "motion/react";

import {
  PlaneTakeoff,
  BarChart2,
  Video,
  AudioLines,
  Globe,
  Diamond,
  Sparkles,
  Code,
  Layers,
} from "lucide-react";
// import { Btn14 } from "../ringui/button/btn-14";
// import Btn03 from "../ringui/button/btn-03";
// import Input09 from "../ringui/input/input-09";
// import AIInput_04 from "../ringui/ai-input/ai-input-04";

// import Card08 from "../ringui/card/card-08";
import { BrowseBlocksButton } from "../ui/browse-blocks";
import { BrowseComponentsButton } from "../ui/browse-button";
import Features from "./feature-block";
import Card_01 from "../ringui/card/card-01";
import AIInput_01 from "../ringui/ai-input/ai-input-01";
import Btn01 from "../ringui/button/btn-01";
import Input_01 from "../ringui/input/input-01";

// import Card02 from "../ringui/card/card-02";

interface Action {
  id: string;
  label: string;
  icon: React.ReactNode;
  description?: string;
  short?: string;
  end?: string;
}

export function HeroSection() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-between gap-8 px-4 py-12 sm:px-6 md:py-16 lg:flex-row lg:gap-12 lg:py-20">
      {/* Left side - Title and CTA */}
      <div className="flex w-full flex-col items-start space-y-8 text-left lg:w-[45%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl leading-[1.1] font-bold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl dark:text-zinc-100">
            Craft with{" "}
            <span className="bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400">
              precision
            </span>
            <br />
            build with{" "}
            <span className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent dark:from-purple-400 dark:via-fuchsia-400 dark:to-rose-400">
              ease
            </span>
            .
          </h1>
          <p className="mt-6 max-w-lg text-base text-zinc-700 md:text-xl dark:text-zinc-300">
            A curated collection of{" "}
            <span className="font-semibold">100+ premium UI components</span>{" "}
            crafted with{" "}
            <span className="bg-gradient-to-r from-rose-500 to-fuchsia-500 bg-clip-text text-transparent dark:from-rose-400 dark:to-fuchsia-400">
              Tailwind CSS
            </span>{" "}
            and{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent dark:from-fuchsia-400 dark:to-purple-400">
              shadcn/ui
            </span>{" "}
            for modern React and Next.js applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex w-full flex-col justify-start"
        >
          <span className="flex items-center gap-2 pb-3 text-start text-sm text-zinc-500 dark:text-zinc-300">
            <TailwindCSS className="h-4 w-4" />
            <span className="flex items-center gap-1.5">
              Now updated for Tailwind CSS 4.0!
              <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                <Sparkles className="mr-1 h-3 w-3" />
                New
              </span>
            </span>
          </span>
          <div className="flex flex-col items-start justify-start gap-3 sm:flex-row sm:items-center">
            <BrowseComponentsButton />
            <BrowseBlocksButton />
          </div>
        </motion.div>

        <Features />
      </div>

      {/* Right side - Components Layout */}
      <div className="flex w-full flex-col justify-between gap-6 lg:w-[55%] lg:pl-8">
        {/* Top row: Card + Action Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="grid w-full grid-cols-1 items-center justify-center gap-6 md:grid-cols-2"
        >
          {/* Card component */}
          <div className="col-span-2 flex w-full flex-col items-center justify-center">
            {/* <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
              {"<Card/>"}
            </span>
            <Card08 href="/docs/components/card" /> */}

            {/* Action Search Bar */}
            {/* <div className="w-full max-w-[600px] bg-transparent"> */}
            {/* <span className="text-sm text-zinc-500 dark:text-zinc-400 block text-center mb-2">
              Components
            </span> */}
            {/* <ActionSearchBar
                            actions={allActions}
                            defaultOpen={true}
                            /> */}
            <Card_01 />
          </div>
          {/* </div> */}
        </motion.div>

        {/* Middle row: AI Chat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full"
        >
          <span className="mb-2 block text-center text-sm text-zinc-500 dark:text-zinc-400">
            AI Chat
          </span>
          <AIInput_01 />
          {/* <div className="flex h-48 w-full items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800">
            // {/* <AIInput_04 /> */}
          {/* </div> */}
        </motion.div>

        {/* Bottom row: Buttons on left, Input on right */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid w-full grid-cols-1 gap-6 md:grid-cols-2"
        >
          {/* Left side - Buttons */}
          <div className="w-full">
            <span className="mb-2 block text-center text-sm text-zinc-500 dark:text-zinc-400">
              Buttons
            </span>
            <div className="flex h-48 w-full flex-col items-center justify-center gap-3 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <Link href="/docs/components/button">
                <Btn01 className="w-42 py-5" />
              </Link>
              {/* <Link href="/docs/components/button"> */}
              {/* <Btn03 className=" w-42 py-5" /> */}
              {/* </Link> */}
            </div>
          </div>

          {/* Right side - Input */}
          <div className="w-full">
            <span className="mb-2 block text-center text-sm text-zinc-500 dark:text-zinc-400">
              Input
            </span>
            <Link href="/docs/components/input">
              <Input_01 />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
