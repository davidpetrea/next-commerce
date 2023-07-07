import { ClockIcon, ProfileIcon, TrashIcon } from "@assets/SvgComponents";
import { useCartDispatch } from "@components/context/CartContext";
import useRemoveUserCartItemMutation from "@components/mutations/useRemoveUserCartItemMutation";
import { UserCartItem } from "@lib/supabase/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartItem = ({ item }: { item: UserCartItem }) => {
  const { mutate, isLoading } = useRemoveUserCartItemMutation();

  const dispatch = useCartDispatch();

  const handleRemove = () => {
    mutate(
      { cartItemId: item.cart_item_id },
      {
        onSuccess: () => {
          dispatch({ type: "remove", payload: item.cart_item_id });
        },
      }
    );
  };

  const productUrl = `/games/${item.product?.game?.path}/${item.product?.path}`;

  const serverName = item.gold_offer_id ? item.offer?.server?.name : undefined;

  const name = item.gold_offer_id
    ? `${
        serverName && serverName?.charAt(0).toUpperCase() + serverName?.slice(1)
      } - ${item.offer?.server?.region.toUpperCase()} Gold`
    : `${item.product?.name}`;

  const tags = item.gold_offer_id
    ? [item.offer?.server?.region.toUpperCase(), item.offer?.faction, name]
    : [];

  return (
    <div className="p-4 bg-zinc-800 rounded-md flex items-start gap-4">
      {/* TODO: for gold offers, add query param to specific gold offer and open dialog */}
      <Link href={productUrl} className="shrink-0">
        <Image
          src={item.product?.image_url!}
          width={69}
          height={69}
          className="rounded-lg"
          alt="Product image"
        />
      </Link>
      <div className="w-full">
        {/* Name and price */}
        <div className="flex justify-between items-start gap-2">
          <Link href={productUrl} className="font-bold">
            {name}
          </Link>
          <div className="font-bold">${item.total_price}</div>
        </div>
        {/* Tags */}
        <div className="text-xs font-bold text-slate-400">
          {item.gold_offer_id && (
            <>
              <span className="text-orange-500">Currency </span>
              &middot;
            </>
          )}
          {tags.map((tag, index) => {
            return (
              <span key={tag} className="capitalize">
                {index !== 0 && <span> &middot;</span>} {tag}
              </span>
            );
          })}
        </div>
        {/* Seller */}
        <div className="flex gap-1 text-sm text-slate-400">
          <ProfileIcon className="w-4 h-4 fill-slate-400" />
          <div>
            <span className="font-bold">Sold by:</span> {item.seller.name!}
          </div>
        </div>
        {/* Delivery */}
        <div className="flex gap-1 text-sm text-slate-400">
          <ClockIcon className="w-4 h-4 fill-slate-400" />
          <div>
            <span className="font-bold">Delivery time:</span> 15 minutes
          </div>
        </div>
        <div className="p-1"></div>
        {/* Quantity and remove  */}
        <div className="flex items-center text-sm justify-between gap-2 text-slate-400">
          {!!item.quantity && (
            <div className="font-bold">
              Quantity: <span className="text-slate-50">{item.quantity}</span>
            </div>
          )}
          <button
            disabled={isLoading}
            onClick={handleRemove}
            className="flex items-center gap-1"
          >
            <TrashIcon className="w-4 h-4 fill-slate-400" />
            <div className="font-bold">
              {isLoading ? "Removing..." : "Remove"}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
