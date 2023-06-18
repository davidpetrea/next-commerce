'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const WowGoldFilters = ({
  region,
  faction,
}: {
  region: string;
  faction: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleFilterChange = (
    field: 'region' | 'faction',
    value: 'eu' | 'us' | 'horde' | 'alliance' | ''
  ) => {
    const current = new URLSearchParams(searchParams as any);

    if (value === '') {
      current.delete(`${field}`);
    } else {
      current.set(`${field}`, value);
    }

    const search = current.toString();

    const query = search ? `?${search}` : '';

    router.push(`${pathname}${query}`);
  };

  return (
    <div className='flex flex-col md:flex-row items-center gap-8'>
      {/* Region */}
      <FiltersContainer>
        <>
          <FilterButton
            label='eu'
            isActive={region === 'eu'}
            onClick={() => handleFilterChange('region', 'eu')}
          />
          <FilterButton
            label='us'
            isActive={region === 'us'}
            onClick={() => handleFilterChange('region', 'us')}
          />
        </>
      </FiltersContainer>
      {/* Faction */}
      <FiltersContainer>
        <>
          <FilterButton
            label='any faction'
            isActive={faction === ''}
            onClick={() => handleFilterChange('faction', '')}
          />
          <FilterButton
            label='horde'
            isActive={faction === 'horde'}
            onClick={() => handleFilterChange('faction', 'horde')}
          />

          <FilterButton
            label='alliance'
            isActive={faction === 'alliance'}
            onClick={() => handleFilterChange('faction', 'alliance')}
          />
        </>
      </FiltersContainer>
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
        isActive ? 'bg-violet-800 border border-[#ffffff4d]' : ''
      } py-4 px-5 rounded-md font-bold text-sm uppercase flex-1 whitespace-nowrap`}
    >
      {label}
    </button>
  );
};

export default WowGoldFilters;
