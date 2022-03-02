import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Pagination from '../helpers/Pagination';
import ItemShare from '../list/ItemShare';
import { GetShareInformation } from '../../services/information/GetShare';

function ListShare() {
  const [information, setInformation] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts =
    information && information.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber + 1);
  };

  useEffect(() => {
    const ShareList = () => {
      GetShareInformation().then((data) => {
        setInformation(data.informations);
      });
    };
    ShareList();
  }, []);

  return (
    <Box sx={{ width: '45%', margin: 'auto' }}>
      <Box>
        {currentPosts.map((item) => (
          <ItemShare data={item} key={item.informationId} />
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
