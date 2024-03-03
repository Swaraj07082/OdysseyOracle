"use client";

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
import { useRouter } from "next/navigation";
// import Link from "next/navigation";

export default function ToggleMenu() {
  const router = useRouter();

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
              <div
                onClick={() => {
                  router.push("/login");
                }}
              >
                <DrawerTitle class="text-3xl text-white">Login</DrawerTitle>
              </div>
              <div
                onClick={() => {
                  router.push("/");
                }}
              >
                <DrawerTitle class="text-3xl text-white">Home Page</DrawerTitle>
              </div>
              <div
                onClick={() => {
                  router.push("/write");
                }}
              >
                <DrawerTitle class="text-3xl text-white sms:hidden">
                  Write
                </DrawerTitle>
              </div>
              <div
                onClick={() => {
                  router.push("/contact");
                }}
              >
                <DrawerTitle class="text-3xl text-white">Contact</DrawerTitle>
              </div>

              <div
                onClick={() => {
                  router.push("/about");
                }}
              >
                <DrawerTitle class="text-3xl text-white">About</DrawerTitle>
              </div>
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
