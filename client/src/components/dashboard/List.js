import React from 'react';
import { Box } from '@mui/system';
import Item from '../list/Item';

function List() {
  const namelist = 'Key1';
  const item = {
    description:
      'asdhfjsdalfhsdilfhasdljfhfssdf shdksdjfkabfkjsdfksd hfksjdfh kdjsh fksd fkasj dsfdskfjaksj gksdgfksdgfkjsd gfagfkja gkdsf ksdgf kaj fdsfk dgfk as doashafdasdkjflaskdfjhsadlfkjhasdfjklsafjdlasflsdfjalfjkdh'
  };
  return (
    <Box sx={{ width: '80%', padding: '30px 0', margin: 'auto' }}>
      <Box> 
        <Item name={item.description} type='creditCard' isFavorite='true'/>
      </Box>
    </Box>
  );
}

export default List;
