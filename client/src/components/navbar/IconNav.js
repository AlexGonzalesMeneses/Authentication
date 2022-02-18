import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

function IconNav({ element, title, navClick }) {
  return (
    <Tooltip
      title={title}
      enterDelay={500}
      leaveDelay={200}
      onClick={(e) => navClick(e, title)}
    >
      <IconButton>{element}</IconButton>
    </Tooltip>
  );
}

export default IconNav;
