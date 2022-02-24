import React, { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/system';
import Item from '../list/Item';
import Pagination from '../helpers/Pagination';
import { SendGet } from '@pathSendGet';
import ListContext from '@pathListContext';

function List() {
  const { addItem, idContainer } = useContext(ListContext);
  const [information, setInformation] = useState([]);
  const [render, setRender] = React.useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts =
    information && information.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber + 1);
  };
  const reRender = () => {
    setRender(!render);
  };

  useEffect(() => {
    const noteList = () => {
      SendGet(idContainer).then((data) => {
        setInformation(data.informations);
      });
    };
    setRender(render);
    noteList();
  }, [idContainer, render, addItem]);

  return (
    <Box sx={{ width: '80%', margin: 'auto' }}>
      {information && (
        <>
          <Box>
            {currentPosts.map((item) => (
              <Item data={item} reRender={reRender} key={item.id} />
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
