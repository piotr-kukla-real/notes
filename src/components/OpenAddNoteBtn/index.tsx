import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { useRoutes } from 'components/Routes';
import styles from './style.module.scss';

const OpenAddNoteBtn: React.FC = () => {
  const { pushState } = useRoutes()!;

  const onClick = () => pushState('/add-note');

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Fab
          className={styles.btn}
          onClick={onClick}
          color="secondary"
          size="medium"
        >
          <Add />
        </Fab>
      </div>
    </div>
  );
};

export default OpenAddNoteBtn;
