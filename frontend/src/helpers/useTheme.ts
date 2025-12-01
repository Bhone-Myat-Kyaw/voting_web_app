import { useEffect, useState } from "react";

export function useTheme() {
  // Load initial theme from localStorage or system preference
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;

    if (stored === "light" || stored === "dark") {
      return stored;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  // Apply theme to <html> on mount
  useEffect(() => {
    const html = document.documentElement;

    html.classList.remove("light", "dark");
    html.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  // Safe toggle: update class + localStorage + refresh (no infinite loop)
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    // Set directly on html BEFORE reload
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(nextTheme);

    // Save
    localStorage.setItem("theme", nextTheme);

    // Force full app reload without re-triggering toggle
    window.location.replace(window.location.pathname);
  };

  return { theme, toggleTheme };
}
