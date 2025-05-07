import React from "react";
import { Timeline } from "@/components/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Day 1 – Kickoff & Scope",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            We align on your product vision, define the MVP, and set up
            communication and development tools. You&apos;ll leave Day 1 with a
            crystal-clear scope and a delivery date.
          </p>
        </div>
      ),
    },
    {
      title: "Days 2–10 – Build Sprint",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            We build the MVP in real time with daily progress drops and tight
            feedback loops. You&apos;ll see working features quickly, and we iterate
            together via Slack, Loom, or live calls.
          </p>
        </div>
      ),
    },
    {
      title: "Days 11–14 – Polish & Launch",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            We QA test, smooth rough edges, and ship your MVP to production.
            You&apos;ll get handoff docs, walkthroughs, and basic analytics so you
            can start getting real user feedback immediately.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className=" w-full">
        <Timeline data={data} />


    </div>
  );
}
