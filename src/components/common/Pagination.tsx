'use client';

import Pagination from '@mui/material/Pagination';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React from 'react';

const CustomPagination = ({ count, page }: { count: number; page: number }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const current = new URLSearchParams(searchParams as any);

    if (!value) {
      current.delete(`page`);
    } else {
      current.set(`page`, value.toString());
    }

    const search = current.toString();

    const query = search ? `?${search}` : '';

    router.push(`${pathname}${query}`);
  };

  return (
    <Pagination
      count={count}
      variant='outlined'
      shape='rounded'
      page={page}
      onChange={handleChange}
      color='primary'
    />
  );
};

export default CustomPagination;
