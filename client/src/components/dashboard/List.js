import React from 'react';
import { Box } from '@mui/system';
import Item from '../list/Item';

const items = [
{
  id:1,
  name: 'asdhfjsdalfhsdilfhasdljfhfssdf shdksdjfkabfkjsdfksd hfksjdfh kdjsh fksd fkasj dsfdskfjaksj gksdgfksdgfkjsd gfagfkja gkdsf ksdgf kaj fdsfk dgfk as doashafdasdkjflaskdfjhsadlfkjhasdfjklsafjdlasflsdfjalfjkdh',
  type: 'creditCard',
  isFavorite: 'true',
},{
  id:2,
  name: 'key 1',
  type: 'key',
  isFavorite: 'false',
},
{
  id:3,
  name: 'Lionel Messi',
  type: 'contact',
  isFavorite: 'true',
}];
function List() {
  const namelist = 'Key1';

  const item = {
    name: 'asdhfjsdalfhsdilfhasdljfhfssdf shdksdjfkabfkjsdfksd hfksjdfh kdjsh fksd fkasj dsfdskfjaksj gksdgfksdgfkjsd gfagfkja gkdsf ksdgf kaj fdsfk dgfk as doashafdasdkjflaskdfjhsadlfkjhasdfjklsafjdlasflsdfjalfjkdh',
    type: 'creditCard',
    isFavorite: 'true',
  }
  return (
    <Box sx={{ width: '80%', padding: '30px 0', margin: 'auto' }}>
      <Box> 
        {items.map(item => <Item data={item} key={item.id} />)}
        
      </Box>
    </Box>
  );
}

export default List;
