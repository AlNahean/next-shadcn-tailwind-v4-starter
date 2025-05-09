import ComponentShowcase from "@/components/component-showcase";
import { ThemeToggle } from "@/components/theme/theme-switcher";
import { Component } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <ComponentShowcase />
    </>
  );
}
