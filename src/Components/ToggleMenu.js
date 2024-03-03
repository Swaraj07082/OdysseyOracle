import React from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";
// import Link from "next/navigation";

export default function ToggleMenu() {
  return (
    <>
      <Drawer>
        {/* <DrawerTrigger>Open</DrawerTrigger> */}
        <DrawerTrigger>
          <div class="burger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </DrawerTrigger>

        <DrawerContent>
          <DrawerHeader>
            <div class=" relative left-[100%] top-[50%] flex flex-col gap-y-8 text-center ">
              <DrawerTitle class="text-3xl text-white">Login</DrawerTitle>

              <DrawerTitle class="text-3xl text-white">Home Page</DrawerTitle>

              <DrawerTitle class="text-3xl text-white sms:hidden">
                Write
              </DrawerTitle>

              <DrawerTitle class="text-3xl text-white">Contact</DrawerTitle>

              <DrawerTitle class="text-3xl text-white">About</DrawerTitle>
            </div>

            {/* <DrawerTitle>Are you absolutely sure?</DrawerTitle> */}

            {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
          </DrawerHeader>
          <DrawerFooter>
            {/* <Button>Submit</Button> */}
            <DrawerClose>
              {/* <Button variant="outline">Cancel</Button> */}
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
