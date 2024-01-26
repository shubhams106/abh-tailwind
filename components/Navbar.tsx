import React from "react";
import Link from "next/link";
import Menu from "./Menu";
import Cartlcon from "./Cartlcon";
import Image from "next/image";

function Navbar() {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* left links */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">HomePage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* logo */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Massimo</Link>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* Right links */}
      <div className="hidden md:flex  gap-4 items-center justify-end flex-1">
        <div className=" md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/temporary/phone.png" alt="" width={20} height={20} />
          <span>123 456 789</span>
        </div>

        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <Cartlcon />
      </div>
    </div>
  );
}

export default Navbar;
