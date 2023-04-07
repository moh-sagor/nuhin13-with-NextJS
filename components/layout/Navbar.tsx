import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import classNames from "classnames";
type Props = {
  onMenuButtonClick(): void;
};
const Navbar = (props: Props) => {
  return (
    <nav
      className={classNames({
        "md:collapse": true,
        "bg-red-300": true, // colors
        "flex items-center": true, // layout
        "w-full fixed h-16": true, //positioning & styling
      })}
    >
      <div className="flex-grow ">
        <h1 className="flex text-2xl font-medium text-red-800 justify-center">
          NAZMUS SADAT NUHIN
        </h1>
      </div>
      <button className="md:hidden" onClick={props.onMenuButtonClick}>
        <Bars3Icon className="h-8 w-8 m-5" />
      </button>
    </nav>
  );
};

export default Navbar;
