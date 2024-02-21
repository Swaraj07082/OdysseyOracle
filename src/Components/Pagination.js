"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Pagination({ page, hasNext, hasPrev }) {
  const router = useRouter();
  return (
    <div className="flex gap-x-[300px] justify-center">
      <button
        className="bg-[red] h-10 w-[100px] rounded-lg"
        onClick={() => router.push(`?page=${page - 1}`)}
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        className="bg-[red] h-10 w-20 rounded-lg"
        onClick={() => router.push(`?page=${page + 1}`)}
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
}
