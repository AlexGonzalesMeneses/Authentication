import React from 'react';
import { createContext, useState } from 'react';

const ListContext = createContext();
function ListProvider({ children }) {
  const [idRootContainer] = useState('EC4C47D9-609C-4979-AB55-8336699F5A34');
  const [idContainer, setIdContainer] = useState(idRootContainer);

  const selectContainer = (id) => {
    setIdContainer(id);
  };

  const dataContainer = { idRootContainer, idContainer, selectContainer };
  return (
    <ListContext.Provider value={dataContainer}>
      {children}
    </ListContext.Provider>
  );
}

export { ListProvider };
export default ListContext;
