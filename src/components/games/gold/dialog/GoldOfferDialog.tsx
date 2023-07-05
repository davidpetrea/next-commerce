"use client";
import React from "react";
import Dialog from "@components/common/Dialog";
import DialogContainer from "@components/common/DialogContainer";
import GoldOfferForm from "../forms/GoldOfferForm";
import Details from "./Details";
import Reviews from "./Reviews";
import { useQuery } from "@tanstack/react-query";
import { getGoldOfferById } from "@lib/supabase";
import { LoadingSpinner } from "@assets/SvgComponents";
import TopInfo from "./TopInfo";

const GoldOfferDialog = ({
  isOpen,
  offerId,
  handleClose,
}: {
  isOpen: boolean;
  offerId: string;
  handleClose: () => void;
}) => {
  const {
    data: offer,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["offer", offerId],
    queryFn: () => getGoldOfferById({ offerId }),
  });

  let dialogContent;

  if (isLoading) {
    dialogContent = (
      <div className="flex justify-center w-full h-full items-center">
        <LoadingSpinner className="w-16 h-16 fill-purple-700" />
      </div>
    );
  }

  if (error) {
    dialogContent = (
      <div className="flex justify-center w-full h-full items-center">
        <div className="text-red-600 font-semibold text-center">
          Something went wrong. Please try again later.
        </div>
      </div>
    );
  }

  if (offer) {
    dialogContent = (
      <>
        <div className="flex flex-col">
          <div className="p-4">
            <TopInfo offer={offer} />
          </div>
          <div className="md:hidden bg-neutral-800 p-4">
            <GoldOfferForm offer={offer} />
          </div>
          <div className="">
            <Details />
          </div>
          <div className="">
            <Reviews />
          </div>
        </div>
        <div className="hidden md:inline-block basis-1/3 min-w-[300px] w-full bg-neutral-800 p-4">
          <GoldOfferForm offer={offer} />
        </div>
      </>
    );
  }

  return (
    <DialogContainer isOpen={isOpen} handleClose={handleClose}>
      <Dialog.Panel className="flex flex-col md:flex-row w-full gap-4 justify-between min-h-[400px]">
        {dialogContent}
      </Dialog.Panel>
    </DialogContainer>
  );
};

export default GoldOfferDialog;
