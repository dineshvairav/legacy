
"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons";
import { Skeleton } from "@/components/ui/skeleton";

export function ThemeToggle() {
  const [theme, setTheme] = React.useState("light");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const storedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(storedTheme);
  }, []);

  React.useEffect(() => {
    if (mounted) {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  if (!mounted) {
    return <Skeleton className="h-10 w-10" />;
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === "dark" ? (
        <Icon name="Sun" className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Icon name="Moon" className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
}
