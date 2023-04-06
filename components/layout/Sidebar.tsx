import React, { useRef } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { defaultNavItems } from "./defaultNavItems";
import { useOnClickOutside } from "usehooks-ts";
// define a NavItem prop
export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};
// add NavItem prop to component prop
type Props = {
  open: boolean;
  navItems?: NavItem[];
  setOpen(open: boolean): void;
};
const Sidebar = ({ open, navItems = defaultNavItems, setOpen }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, (e) => {
    setOpen(false);
  });
  return (
    <div
      className={classNames({
        "flex flex-col justify-center": true, // layout
        "bg-red-500 text-zinc-50 ": true, // colors
        "md:w-full md:sticky md:top-0 md:z-0 top-0 fixed": true, // positioning
        "md:h-[100vh] h-full w-[300px] min-h-screen": true, // for height and width
        "transition-transform .3s ease-in-out md:-translate-x-0": true, //animations
        "-translate-x-full ": !open, //hide sidebar to the left when closed
      })}
      ref={ref}
    >
      <nav>
        <div className="flex items-center justify-center">
          <Image
            src={"/profile.jpg"}
            height={200}
            width={200}
            alt="profile image"
            className="rounded-full"
          />
        </div>
        <ul className="py-2 flex flex-col gap-1">
          {navItems.map((item, index) => {
            return (
              <Link key={index} href={item.href}>
                <li
                  className={classNames({
                    "text-indigo-100 hover:bg-red-400": true, //colors
                    "flex gap-4 items-center justify-center": true, //layout
                    "transition-colors duration-300": true, //animation
                    "rounded-md p-2 mx-2": true, //self style
                  })}
                >
                  {item.icon} {item.label}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
