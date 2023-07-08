"use client";
import CustomAutocomplete, {
  AutocompleteHandle,
} from "@components/ui/Autocomplete";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useRef } from "react";

type FilterField = "region" | "faction" | "server";
type FunctionParams = {
  region: "eu" | "us";
  faction: "horde" | "alliance" | "";
  server: string | "";
};

const WowGoldFilters = ({
  serverOptions,
  region,
  faction,
}: {
  serverOptions: string[];
  region: string;
  faction: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const serverQuery = searchParams.get("server");
  const [serverOption] = serverOptions.filter(
    (option) => option.trim().toLowerCase().replaceAll(" ", "") === serverQuery
  );

  const autocompleteRef = useRef<AutocompleteHandle>(null);

  const handleFilterChange = <T extends FilterField>(
    field: T,
    value: FunctionParams[T]
  ) => {
    const current = new URLSearchParams(searchParams as any);

    if (value === "") {
      current.delete(`${field}`);
    } else {
      current.set(
        `${field}`,
        field === "server"
          ? value.trim().toLowerCase().replaceAll(" ", "")
          : value
      );
    }

    //if region is changing, delete server query param
    if (field === "region") {
      current.delete(`server`);
      autocompleteRef.current?.clearAutocompleteValue();
    }

    //on change, remove page query param
    current.delete("page");

    const search = current.toString();

    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  };

  //Set default query region to EU
  const setDefaultQueryParams = useCallback(() => {
    const current = new URLSearchParams(searchParams as any);

    const region = current.get("region");
    if (!region) {
      current.set("region", "eu");

      const search = current.toString();

      const query = search ? `?${search}` : "";

      router.push(`${pathname}${query}`);
    }
  }, [pathname, router, searchParams]);

  useEffect(() => {
    setDefaultQueryParams();
  }, [setDefaultQueryParams]);

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 flex-wrap">
      {/* Region */}
      <FiltersContainer>
        <>
          <FilterButton
            label="eu"
            isActive={region === "eu"}
            onClick={() => handleFilterChange("region", "eu")}
          />
          <FilterButton
            label="us"
            isActive={region === "us"}
            onClick={() => handleFilterChange("region", "us")}
          />
        </>
      </FiltersContainer>
      {/* Faction */}
      <FiltersContainer>
        <>
          <FilterButton
            label="any faction"
            isActive={faction === ""}
            onClick={() => handleFilterChange("faction", "")}
          />
          <FilterButton
            label="horde"
            isActive={faction === "horde"}
            onClick={() => handleFilterChange("faction", "horde")}
          />

          <FilterButton
            label="alliance"
            isActive={faction === "alliance"}
            onClick={() => handleFilterChange("faction", "alliance")}
          />
        </>
      </FiltersContainer>
      {/* Server Search autocomplete */}
      <CustomAutocomplete
        ref={autocompleteRef}
        options={serverOptions}
        defaultValue={serverOption ?? ""}
        handleServerChange={(value: string) =>
          handleFilterChange("server", value)
        }
      />
    </div>
  );
};

const FiltersContainer = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <div
      className={`flex bg-[#271d5e] rounded-[5px] border border-[#9195d64d] w-full md:max-w-fit`}
    >
      {children}
    </div>
  );
};
const FilterButton = ({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      disabled={isActive}
      onClick={onClick}
      className={`${
        isActive ? "bg-violet-800 border border-[#ffffff4d]" : ""
      } py-4 px-5 rounded-md font-bold text-sm uppercase flex-1 whitespace-nowrap`}
    >
      {label}
    </button>
  );
};

export default WowGoldFilters;
