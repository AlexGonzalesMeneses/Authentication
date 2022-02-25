import React, { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/system';
import Item from '../list/Item';
import Pagination from '../helpers/Pagination';
import { SendGet } from '@pathSendGet';
import ListContext from '@pathListContext';

function List() {
  const { addItem, idContainer, filterSelected } = useContext(ListContext);
  const [information, setInformation] = useState([]);
  const [render, setRender] = React.useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  let listfilter = [];
  if (filterSelected == 'All') {
    listfilter = information && information;
  } else if (filterSelected == 'Notes') {
    listfilter =
      information &&
      information.filter(function (el) {
        return el.informationType == 'Note';
      });
  } else if (filterSelected == 'Credentials') {
    listfilter =
      information &&
      information.filter(function (el) {
        return el.informationType == 'Credential';
      });
  } else if (filterSelected == 'Keys') {
    listfilter =
      information &&
      information.filter(function (el) {
        return el.informationType == 'Key';
      });
  } else if (filterSelected == 'CreditCards') {
    listfilter =
      information &&
      information.filter(function (el) {
        return el.informationType == 'CreditCard';
      });
  } else if (filterSelected == 'Contacts') {
    listfilter =
      information &&
      information.filter(function (el) {
        return el.informationType == 'Contact';
      });
  } else if (filterSelected == 'Favorites') {
    listfilter =
      information &&
      information.filter(function (el) {
        return el.favorite == true;
      });
  }

  const currentPosts = listfilter
    .sort(SortArrayName)
    .sort(SortArrayFavorite)
    .slice(indexOfFirstPost, indexOfLastPost);

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
    console.log('hola');
    setRender(render);
    noteList();
  }, [idContainer, render, addItem, filterSelected]);

  function SortArrayName(x, y) {
    if (x.name < y.name) {
      return -1;
    }
    if (x.name > y.name) {
      return 1;
    }
    return 0;
  }
  function SortArrayFavorite(x, y) {
    if (x.favorite > y.favorite) {
      return -1;
    }
    if (x.favorite < y.favorite) {
      return 1;
    }
    return 0;
  }
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
