import { IconButton, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { closeDialog } from 'utils/functions';
import styles from './style.module.scss';

const DialogTopBar: React.FC<Props> = ({ header }) => {
  return (
    <div className={styles.dialogTopBar}>
      <Typography className={styles.dialogHeader} variant="h3" noWrap>
        {header}
      </Typography>
      <IconButton className={styles.btn} onClick={closeDialog}>
        <Close />
      </IconButton>
    </div>
  );
};

interface Props {
  header: string;
}

export default DialogTopBar;
