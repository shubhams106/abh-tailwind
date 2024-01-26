import Link from "next/link";
import React from "react";
import Image from "next/image";

const Cartlcon = () => {
  return (
    <Link href="/cart" className="flex items-center gap-4">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src="/temporary/cart.png" alt="" fill />
      </div>
      <span>cart(3)</span>
    </Link>
  );
};

export default Cartlcon;
