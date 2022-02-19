import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
import { GetInformation } from '../services/information/Get';

const ListContext = createContext();
function ListProvider({ children }) {
  const [idRootContainer] = useState('EC4C47D9-609C-4979-AB55-8336699F5A34');
  const [idContainer, setIdContainer] = useState(idRootContainer);
  const [nameContainer, setNameContainer] = useState('Root');

  const selectContainer = (id) => {
    setIdContainer(id);
  };
  const selectContainerName = (name) => {
    setNameContainer(name);
  };
  const [encryptionSelected, setEncryptionSelected] = useState('Binary');

  const selectEncryption = () => {};

  const dataContainer = {
    idRootContainer,
    idContainer,
    selectContainer,
    selectContainerName,
    nameContainer,
    encryptionSelected,
  };
  return (
    <ListContext.Provider value={dataContainer}>
      {children}
    </ListContext.Provider>
  );
}

export { ListProvider };
export default ListContext;
