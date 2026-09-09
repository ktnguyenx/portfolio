"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="system" 
      enableSystem
      disableTransitionOnChange // Prevents layout flashing and ghost borders when flipping themes
    >
      {children}
    </ThemeProvider>
  );
}
