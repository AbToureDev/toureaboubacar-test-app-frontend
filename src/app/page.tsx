import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="">
      <Link
          href={"/programs"}
          className="pb-2 mt-2 flex justify-center items-center"
          title="Logo"
      >
        <h1 className="text-3xl text-blue-300 hover:text-blue-400 font-bold">Aller sur la page Admin</h1>
      </Link>
    </div>
  );
}
