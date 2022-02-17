import React from 'react';
import TablePagination from '@mui/material/TablePagination';

function Pagination({ postsPerPage, totalPosts, paginate, goToPage }) {
  const pageNumbers = [];
  for (let i = 0; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    paginate(newPage);
  };

  return (
    <TablePagination
      component="div"
      count={totalPosts}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[]}
    />
  );
}
export default Pagination;
