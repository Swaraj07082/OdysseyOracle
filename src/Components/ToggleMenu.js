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
} from "@/Components/ui/Drawer";
import { useRouter } from "next/navigation";

export default function ToggleMenu() {
  const router = useRouter();

  return (
    <>
      <Drawer>
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
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose></DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
