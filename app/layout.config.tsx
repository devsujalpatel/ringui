import { RingUi } from "@/components/icons/ringui-logo";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center">
        <RingUi />
        <span className="hidden items-center text-lg ml-2 font-bold tracking-tight text-black md:inline-flex dark:text-white">
          Ring UI
        </span>
      </div>
    ),
  },
  // links: [
  //   {
  //     text: "Pricing",
  //     url: "/pricing",
  //   },

  //   {
  //     type: "custom",
  //     children: <HeaderPro />,
  //   },
  // ],
};
