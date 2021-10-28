import { Dialog } from '@material-ui/core';
import { useRoutes } from 'components/Routes';
import { closeDialog } from 'utils/functions';
import AddNoteContent from 'components/AddNoteContent';

const AddNote: React.FC = () => {
  const { pathname } = useRoutes()!;

  const open = pathname === '/add-note';

  return (
    <Dialog className="dialog" open={open} onClose={closeDialog}>
      <AddNoteContent />
    </Dialog>
  );
};

export default AddNote;
