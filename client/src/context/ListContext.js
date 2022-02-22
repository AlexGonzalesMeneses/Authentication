import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
import { GetInformation } from '../services/information/Get';

const ListContext = createContext();
function ListProvider({ children }) {
  const [idRootContainer] = useState('f287438b-d035-4b76-8184-bd13f3ae55a0');
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

  const [addItem, setAddItem] = useState(true);

  const addItemselected = () => {
    setAddItem(!addItem);
  };

  const dataContainer = {
    idRootContainer,
    idContainer,
    selectContainer,
    selectContainerName,
    nameContainer,
    encryptionSelected,
    selectEncryption,
    addItem,
    addItemselected,
  };
  return (
    <ListContext.Provider value={dataContainer}>
      {children}
    </ListContext.Provider>
  );
}

export { ListProvider };
export default ListContext;
