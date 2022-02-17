import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import Item from '../list/Item';
import Pagination from '../helpers/Pagination';
import get from '../../services/SendGet';

function List() {
  const [information, setInformation] = useState([]);
  const [error, setError] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = information.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber + 1);
  };

  useEffect(() => {
    const noteList = () => {
      get('items').then((data) => setInformation(data));
    };
    noteList();
  }, []);

  return (
    <Box sx={{ width: '80%', margin: 'auto' }}>
      {information && (
        <>
          <Box>
            {currentPosts.map((item) => (
              <Item data={item} key={item.id} />
            ))}
          </Box>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={information.length}
            paginate={paginate}
          />
        </>
      )}
    </Box>
  );
}

export default List;
