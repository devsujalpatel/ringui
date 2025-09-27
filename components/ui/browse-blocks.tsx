"use client";

import { Link } from "next-view-transitions";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ArrowDownRight, ArrowRight, BlocksIcon } from "lucide-react";

/**
 *
 *
 */
export function BrowseBlocksButton() {
  return (
    <Link
      id="browse-blocks-button"
      href={process.env.NEXT_PUBLIC_URL as string}
      className="flex items-center gap-8"
    >
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 0.2 } }}
        whileHover={{ x: 5, transition: { duration: 0.2 } }}
        className="relative"
      >
        <Button
          className={cn(
            "relative inline-flex items-center justify-center gap-4 rounded-xl font-medium",
            "relative h-12 min-w-72 px-6 md:min-w-56",
            "bg-white dark:bg-black",
            "text-black dark:text-white",
            "border-2 border-black/20 dark:border-white/20",
            "hover:bg-black/5 dark:hover:bg-white/10",
            "backdrop-blur-xs",
            "shadow-md transition-all duration-200 hover:shadow-lg",
          )}
        >
          <span className="flex items-center gap-2 font-medium">
            Go to Templates
          </span>
          <ArrowRight className="h-5 w-5" />
        </Button>
      </motion.div>
    </Link>
  );
}
