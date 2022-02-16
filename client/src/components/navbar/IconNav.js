import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { Modal } from '@mui/material';
import MainModal from '../modal/MainModal';
import { Box } from '@mui/system';
import CrudModal from '../modal/CrudModal';

function IconNav({ element, title, navClick }) {
  const [openMainModal, setOpenMainModal] = React.useState(false);
  const iconStyle = {
    fontSize: '30px',
    color: 'secondary.light',
    cursor: 'pointer',
    '&:hover': {
      bgcolor: 'primary.contrastText',
      transform: 'scale(1.5)',
      borderRadius: '12px',
    },
  };
  return (
    <Tooltip
      title={title}
      enterDelay={500}
      leaveDelay={200}
      onClick={() => navClick(title)}
    >
      <IconButton>{element}</IconButton>
    </Tooltip>
  );
}

export default IconNav;
