import { MenuItem } from '@material-ui/core';
import { useRoutes } from 'components/Routes';
import { useNotify } from 'components/Notification';
import { useNotes } from 'components/Notes';
import { forwardRef } from 'react';

const MenuItems: React.FC<Props> = forwardRef(function MenuItems({ id }, ref) {
  const { pushState } = useRoutes()!;
  const { dispatch } = useNotes()!;
  const setNotify = useNotify()!;

  const showNote = () => pushState('note', id);

  const editNote = () => pushState('edit-note', id);

  const removeNote = () => {
    dispatch({ type: 'REMOVE', payload: id });
    setNotify({ message: 'Note removed', icon: 'trash' });
  };

  return (
    <>
      <MenuItem onClick={showNote}>Show</MenuItem>
      <MenuItem onClick={editNote}>Edit</MenuItem>
      <MenuItem onClick={removeNote}>Remove</MenuItem>
    </>
  );
});

interface Props {
  id: number;
}

export default MenuItems;
