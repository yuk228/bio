import React from "react";
import { card } from "@/lib/type";
import Link from "next/link";

const Card = (props: card) => {
  return (
    <Link
      href={props.link}
      className="p-4 w-full flex items-center border border-white/[0.08] bg-white/[0.02] hover:border-white/[0.12] transition-colors duration-300 rounded-3xl "
    >
      <div className="w-10 h-10 flex items-center justify-center my-auto mr-2 text-white">
        {props.icon}
      </div>
      <div className="flex flex-col">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </Link>
  );
};

export default Card;
