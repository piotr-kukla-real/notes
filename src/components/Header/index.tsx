import { Container, Typography } from '@material-ui/core';
import { EventNote } from '@material-ui/icons';
import Search from 'components/Search';
import styles from './style.module.scss';

const Header: React.FC = () => (
  <Container className={styles.container} maxWidth="xl">
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <EventNote fontSize="large" />
        <Typography className={styles.title} variant="h1">
          Notes
        </Typography>
      </div>
      <Search />
    </header>
  </Container>
);

export default Header;
