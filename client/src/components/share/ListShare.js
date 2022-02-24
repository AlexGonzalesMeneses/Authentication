import { Box } from '@mui/material';
import React, { useState } from 'react';
import Pagination from '../helpers/Pagination';
import ItemShare from '../list/ItemShare';
const Shared = [
  {
    id: 1,
    name: 'nota1',
    user: 'alex1',
    type: 'Note',
  },
  {
    id: 2,
    name: 'nota2',
    user: 'alex2',
    type: 'Key',
  },
  {
    id: 3,
    name: 'nota3',
    user: 'alex3',
    type: 'CreditCard',
  },
  {
    id: 4,
    name: 'nota4',
    user: 'alex4',
    type: 'CreditCard',
  },
  {
    id: 5,
    name: 'nota5',
    user: 'alex5',
    type: 'Contact',
  },
  {
    id: 6,
    name: 'nota6',
    user: 'alex6',
    type: 'Note',
  },
  {
    id: 7,
    name: 'nota7',
    user: 'alex1@gmail.com',
    type: 'Key',
  },
];

function ListShare() {
  const [information, setInformation] = useState(Shared);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts =
    information && information.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber + 1);
  };
  return (
    <Box sx={{ width: '50%', margin: 'auto' }}>
      <Box>
        {currentPosts.map((item) => (
          <ItemShare data={item} key={item.id} />
        ))}
      </Box>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={information.length}
        paginate={paginate}
      />
    </Box>
  );
}

export default ListShare;
