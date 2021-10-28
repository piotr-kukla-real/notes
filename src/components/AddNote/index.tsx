import { Dialog } from '@material-ui/core';
import { useRoutes } from 'components/Routes';
import { closeDialog } from 'utils/functions';

const AddNote: React.FC = () => {
  const { pathname } = useRoutes()!;

  const open = pathname === '/add-note';

  return <Dialog open={open} onClose={closeDialog} />;
};

export default AddNote;
