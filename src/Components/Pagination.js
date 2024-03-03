"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Pagination({ page, hasNext, hasPrev , cat }) {
  const router = useRouter();
  return (
    <div className="flex gap-x-[0px] mt-14 flex-wrap  justify-center">
      <button
        className="bg-[transparent] border-white h-10 w-[100px] cs:h-7 cs:w-[80px] cs:text-[12px] "
        style={{ border : '1px solid white' , borderTopLeftRadius:"8px" , borderBottomLeftRadius :'8px'}}
        onClick={() => { cat? router.push(`?page=${page - 1}&cat=${cat||''}`) :
        router.push(`?page=${page - 1}`)
      }}
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        className="bg-[transparent] h-10 w-20 border-slate-500  cs:h-7 cs:w-[80px] cs:text-[12px]"
        style={{ border : '1px solid white' , borderTopRightRadius: '8px' , borderBottomRightRadius:'8px'}}
        // onClick={() => router.push(`?page=${page + 1}&cat=${cat||''}`)}
        onClick={() => { cat? router.push(`?page=${page + 1}&cat=${cat||''}`) :
        router.push(`?page=${page + 1}`)
      }}
        disabled={!hasNext}
      >
        Next
      </button>

      {/* <div className="join grid grid-cols-2">
  <button className="join-item btn btn-outline">Previous page</button>
  <button className="join-item btn btn-outline">Next</button>
</div> */}
    </div>
  );
}
