import CalenderShowcaseComponent from "@/components/comp-505";
import TimelineShowcaseComponent from "@/components/comp-536";
// import ComponentShowcase from "@/components/component-showcase";
import { ThemeToggle } from "@/components/theme/theme-switcher";
import { Timeline } from "@/components/ui/timeline";
import { Component } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <CalenderShowcaseComponent />
      <TimelineShowcaseComponent />
      {/* <ComponentShowcase /> */}
    </>
  );
}
