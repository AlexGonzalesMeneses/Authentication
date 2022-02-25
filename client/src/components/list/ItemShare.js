import React from 'react';
import ReplyIcon from '@mui/icons-material/Reply';
import Tooltip from '@mui/material/Tooltip';
import { Box, IconButton, Modal } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import MainModal from '../modal/MainModal';
import ItemsIcons from './ItemsIcons';

function ItemShare({ data }) {
  const [openMainModal, setOpenMainModal] = React.useState(false);
  const [action, setAction] = React.useState('Show');
  const handleOpenMainModal = () => {
    setAction('Show');
    setOpenMainModal(true);
  };
  const handleCloseMainModal = () => {
    setOpenMainModal(false);
  };
  return (
    <Box
      sx={{
        bgcolor: 'quaternary.light',
        '&:hover': {
          bgcolor: 'primary.main',
        },
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: '30px',
        mb: '30px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          borderRadius: '12px',
          border: '1px solid tertiary.contrastText',
          padding: '0 30px',
        }}
        onClick={handleOpenMainModal}
      >
        <Box
          sx={{
            flex: '0 0 75%',
            pt: '25px',
            pb: '25px',
          }}
        >
          {data.name}
        </Box>
        <Box
          sx={{
            flex: '0 0 15%',
            flex: '0 0 15%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <ItemsIcons informationType={data.type} />
          <Tooltip
            title={data.user}
            enterDelay={500}
            leaveDelay={200}
            placement="right"
          >
            <IconButton>
              <ReplyIcon />
              <GroupIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Modal open={openMainModal} onClose={handleCloseMainModal}>
        <Box>
          <MainModal
            data={data}
            idItem={data.id}
            action={action}
            closeModal={handleCloseMainModal}
            typeSelect={data.type}
          />
        </Box>
      </Modal>
    </Box>
  );
}

export default ItemShare;
