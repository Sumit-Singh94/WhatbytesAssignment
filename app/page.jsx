import { Suspense } from "react";
import HomePage from "@/components/HomePage";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#f5f8fc]">
          <p className="text-[#0b2344]">Loading products...</p>
        </div>
      }
    >
      <HomePage />
    </Suspense>
  );
}