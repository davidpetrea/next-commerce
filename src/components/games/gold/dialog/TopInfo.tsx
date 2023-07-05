import { OfferExtended } from "@lib/supabase";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopInfo = ({ offer }: { offer: OfferExtended }) => {
  if (!offer) {
    return <div>No offer found.</div>;
  }

  return (
    <>
      <div className="font-bold text-4xl text-left">
        <span className="capitalize">{offer.server_name?.name}</span> -{" "}
        <span className="uppercase">{offer.region}</span> Gold
      </div>
      <div className="p-1"></div>
      {/* Tags */}
      <div className="flex items-center gap-2 flex-wrap">
        <div className="bg-gradient-to-r from-green to-seablue text-black p-0.5 px-2 shadow-dp01 rounded-md font-bold text-sm uppercase">
          {offer.game?.name} <span>{offer.region}</span>
        </div>
        <div
          className={`${
            offer.faction === "horde"
              ? "text-red-600 bg-red-200"
              : "text-sky-600 bg-sky-200"
          } p-0.5 px-2 shadow-dp01 rounded-md font-bold text-sm`}
        >
          <span className="uppercase">{offer.faction}</span>
        </div>
        {offer.minimum_amount && (
          <div className=" bg-slate-50 text-black p-0.5 px-2 shadow-dp01 rounded-md font-bold text-sm uppercase">
            {offer.minimum_amount.toLocaleString()} minimum purchase
          </div>
        )}
      </div>
      <div className="p-1"></div>
      {/* User info */}
      <Link href={`/profile/${offer.user_id}`}>
        <div className="flex items-center gap-2 max-w-fit">
          {/* TODO: Replace this with proper stars and reviews counts */}
          <div className="shrink-0">
            <Image
              src={offer.user?.avatar_url!}
              alt="avatar"
              width={56}
              height={56}
              className="rounded-full shadow-dp02"
            />
          </div>

          <div className="flex flex-col gap-1 shrink">
            <div className="text-sm font-bold">{offer.user?.name}</div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-orange-600 rotate-45 rounded-[3px]"></div>
              <div className="w-3 h-3 bg-orange-600 rotate-45 rounded-[3px]"></div>
              <div className="w-3 h-3 bg-orange-600 rotate-45 rounded-[3px]"></div>
              <div className="w-3 h-3 bg-orange-600 rotate-45 rounded-[3px]"></div>
              <div className="w-3 h-3 bg-orange-600 rotate-45 rounded-[3px]"></div>
            </div>
            <div className="text-xs text-gray-400">620 reviews</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TopInfo;
