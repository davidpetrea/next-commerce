import { Game, Offer } from "@lib/supabase";
import Image from "next/image";

const OfferItem = ({
  offer,
  game,
  handleSelect,
}: {
  offer: Offer;
  game: Game;
  handleSelect: () => void;
}) => {
  return (
    <button
      onClick={handleSelect}
      className="bg-slate-50 rounded-md p-4 flex flex-col md:flex-row items-start md:items-center gap-2 text-black shadow-dp04"
    >
      {/* Left container */}
      <div className="flex flex-col gap-2 flex-1">
        <div className="font-bold text-black text-left">
          <span className="capitalize">{offer.server_name?.name}</span> -{" "}
          <span className="uppercase">{offer.region}</span> - {offer.stock} gold
          in stock
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="bg-gradient-to-r from-green to-seablue text-black p-0.5 px-2 shadow-dp01 rounded-md font-bold text-sm uppercase">
            {game.name} <span>{offer.region}</span>
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
        </div>
      </div>
      {/* Right container */}
      <div className="flex items-center justify-between w-full flex-1">
        <div>
          <div className="flex gap-2">
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
        </div>

        <div className="flex flex-col items-end">
          <div className="text-xl font-bold ">${offer.price}</div>
          <div className="text-gray-400 text-right text-sm">
            For {offer.unit} gold
          </div>
        </div>
      </div>
    </button>
  );
};

export default OfferItem;
