/**
 * Calculate pagination limits based on the given page number and page size.
 * @param {number} currentPage - The current page number (default is 1 if not provided).
 * @param {number} pageSize - The number of items per page.
 * @returns {Object} An object containing 'from' and 'to' properties representing the pagination limits.
 */
export const getPagination = (currentPage: number = 1, pageSize: number) => {
  const itemsPerPage = pageSize ? +pageSize : 3;
  const from =
    currentPage === 1 ? 0 : currentPage * itemsPerPage - itemsPerPage;
  const to = currentPage ? from + pageSize - 1 : pageSize - 1;
  return { from, to };
};
