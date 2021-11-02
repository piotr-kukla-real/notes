import { Dialog } from '@material-ui/core';
import { useRoutes } from 'components/Routes';
import { closeDialog } from 'utils/functions';
import styles from './style.module.scss';

const RouteDialog: React.FC<Props> = ({ children, path }) => {
  const { pathname } = useRoutes()!;

  const open = pathname === path;

  return (
    <Dialog className={styles.dialog} open={open} onClose={closeDialog}>
      {children}
    </Dialog>
  );
};

interface Props {
  path: string;
}

export default RouteDialog;
