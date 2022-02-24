import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import KeyIcon from '@mui/icons-material/Key';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PhoneIcon from '@mui/icons-material/Phone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const iconStyle = {
  fontSize: '30px',
  color: 'secondary.light',
  cursor: 'pointer',
  '&:hover': {
    bgcolor: 'primary.contrastText',
    transform: 'scale(1.5)',
    borderRadius: '12px',
  },
};
export const iconsNavBar = [
  {
    id: 1,
    title: 'All',
    element: <FormatListBulletedIcon title="All" sx={{ ...iconStyle }} />,
  },
  {
    id: 2,
    title: 'Notes',
    element: <LibraryBooksIcon title="Notes" sx={{ ...iconStyle }} />,
  },
  {
    id: 3,
    title: 'Credentials',
    element: <AccountBoxIcon title="Credentials" sx={{ ...iconStyle }} />,
  },
  {
    id: 4,
    title: 'Keys',
    element: <KeyIcon title="Keys" sx={{ ...iconStyle }} />,
  },
  {
    id: 5,
    title: 'CreditCards',
    element: <CreditCardIcon title="CreditCards" sx={{ ...iconStyle }} />,
  },
  {
    id: 6,
    title: 'Contacts',
    element: <PhoneIcon title="Contacts" sx={{ ...iconStyle }} />,
  },
  {
    id: 7,
    title: 'Favorites',
    element: <StarIcon title="Favorites" sx={{ ...iconStyle }} />,
  },
  {
    id: 8,
    title: 'Add',
    element: (
      <AddCircleOutlineIcon
        title="Add"
        sx={{
          ...iconStyle,
          fontSize: '50px',
        }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      />
    ),
  },
];
export const iconsShareNavmar = [
  {
    id: 1,
    title: 'All',
    element: <FormatListBulletedIcon title="All" sx={{ ...iconStyle }} />,
  },
  {
    id: 2,
    title: 'Notes',
    element: <LibraryBooksIcon title="Notes" sx={{ ...iconStyle }} />,
  },
  {
    id: 3,
    title: 'Credentials',
    element: <AccountBoxIcon title="Credentials" sx={{ ...iconStyle }} />,
  },
  {
    id: 4,
    title: 'Keys',
    element: <KeyIcon title="Keys" sx={{ ...iconStyle }} />,
  },
  {
    id: 5,
    title: 'CreditCards',
    element: <CreditCardIcon title="CreditCards" sx={{ ...iconStyle }} />,
  },
  {
    id: 6,
    title: 'Contacts',
    element: <PhoneIcon title="Contacts" sx={{ ...iconStyle }} />,
  },
];
