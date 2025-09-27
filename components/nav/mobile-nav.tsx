import Link from "next/link";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import type { NavSection } from "@/config/navigation";

interface MobileNavProps {
  sections: NavSection[];
  pathname: string;
  isExpanded: boolean;
  currentPage?: { title: string };
  totalItems: number;
  onExpandToggle: () => void;
  onItemClick: () => void;
}

export function MobileNav({
  sections,
  pathname,
  isExpanded,
  currentPage,
  totalItems,
  onExpandToggle,
  onItemClick,
}: MobileNavProps) {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 flex items-end justify-center px-4 pb-6 md:hidden">
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-xs transition-opacity duration-300 ease-in-out dark:bg-black/40"
          onClick={onExpandToggle}
        />
      )}

      <div
        className={cn(
          "max-w-lg transition-all duration-300 ease-in-out",
          "bg-linear-to-b from-white/95 via-gray-50/95 to-white/95",
          "dark:from-zinc-900/90 dark:via-zinc-800/90 dark:to-zinc-900/90",
          "shadow-[0_2px_20px_-2px_rgba(0,0,0,0.15)]",
          "cursor-pointer backdrop-blur-md",
          "border border-[rgba(200,200,200,0.8)] dark:border-[rgba(70,70,70,0.7)]",
          isExpanded
            ? "h-[80vh] w-full rounded-[28px]"
            : "h-12 w-1/2 rounded-[28px]",
        )}
        onClick={() => !isExpanded && onExpandToggle()}
      >
        {isExpanded ? (
          <div className="flex h-full flex-col">
            <div className="flex-1 overflow-y-auto px-4 py-2">
              {sections.map((section) => (
                <div key={section.title} className="mb-6">
                  <h3 className="mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {section.title}
                  </h3>
                  <div className="space-y-1">
                    {section.items.map((item) => {
                      const isActive =
                        item.href === "/docs"
                          ? pathname === "/docs" ||
                            pathname === "/docs/introduction"
                          : item.href === "/docs/components/block/"
                            ? pathname.startsWith("/docs/components/block")
                            : pathname === item.href;
                      return (
                        <Link
                          key={item.id}
                          href={item.isComingSoon ? "#" : item.href}
                          onClick={onItemClick}
                          className={cn(
                            "flex items-center justify-between rounded-md px-3 py-2",
                            item.isComingSoon
                              ? "cursor-not-allowed opacity-70"
                              : isActive
                                ? item.isLab
                                  ? "bg-purple-500/10 text-purple-700 dark:text-purple-300"
                                  : "bg-zinc-900 dark:bg-white"
                                : "hover:bg-black/5 dark:hover:bg-white/5",
                          )}
                        >
                          <span
                            className={cn(
                              "text-sm font-medium",
                              isActive
                                ? item.isLab
                                  ? "text-purple-700 dark:text-purple-300"
                                  : "text-white dark:text-zinc-900"
                                : "text-zinc-600 dark:text-zinc-400",
                            )}
                          >
                            {item.title}
                            {item.isNew && !isActive && (
                              <span className="ml-2 inline-flex items-center rounded-lg bg-linear-to-r from-emerald-400/5 via-emerald-500/5 to-teal-500/5 px-2 py-0.5 text-[9px] font-medium tracking-wide text-emerald-600 uppercase ring-1 ring-emerald-500/20 dark:text-emerald-400 dark:ring-emerald-400/20">
                                new
                              </span>
                            )}
                            {item.isLab && !isActive && (
                              <span className="ml-2 inline-flex items-center rounded-xl bg-linear-to-r from-purple-400/5 via-purple-500/5 to-purple-500/5 px-2 py-0.5 text-[9px] font-medium tracking-wide text-purple-600 uppercase ring-1 ring-purple-500/20 dark:text-purple-400 dark:ring-purple-400/20">
                                lab
                              </span>
                            )}
                          </span>
                          {item.count && (
                            <span className="text-xs text-zinc-400">
                              {item.count}
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-zinc-200 p-4 dark:border-zinc-800">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onExpandToggle();
                }}
                className="flex w-full items-center justify-center rounded-lg p-3 hover:bg-black/5 dark:hover:bg-white/5"
              >
                <X className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center gap-1">
            <span className="truncate text-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {currentPage?.title}
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              {totalItems}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
