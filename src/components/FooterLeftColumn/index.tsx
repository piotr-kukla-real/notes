import { Typography } from '@material-ui/core';
import { EventNote } from '@material-ui/icons';
import styles from './style.module.scss';

const FooterLeftColumn: React.FC = () => (
  <section>
    <div className={styles.pageName}>
      <EventNote fontSize="small" />
      <Typography>Notes</Typography>
    </div>
    <Typography className={styles.authorName}>
      Piotr Kukla, {new Date().getFullYear()}
    </Typography>
    <Typography>piotr.kukla19@gmail.com</Typography>
  </section>
);

export default FooterLeftColumn;
