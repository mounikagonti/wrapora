import Image from "next/image";
import React from "react";

const AuthBrand = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={"/images/brand.png"}
        alt="brand-logo"
        width={180}
        height={70}
      />
      <p className="text-[#B0184F]">Pack Your Hamper With Love</p>
    </div>
  );
};

export default AuthBrand;
