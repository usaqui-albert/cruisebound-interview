"use client";

import { Suspense } from "react";
import { Sidebar } from "@/components/sidebar";

export default function SearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <Suspense>
        <Sidebar />
      </Suspense>
      <main className="flex flex-1 justify-center h-full overflow-scroll">
        {children}
      </main>
    </div>
  );
}
