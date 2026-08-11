"use client";

import { useState } from "react";
import { Navbar } from "./Navbar";
import { InstantSearchModal } from "@/components/search/InstantSearchModal";

export const AppShell = ({ children }: { children: React.ReactNode }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />
      <InstantSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <main className="flex-1">{children}</main>
    </>
  );
};
