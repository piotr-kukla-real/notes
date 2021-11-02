import { Grid } from '@material-ui/core';
import MappedNotes from 'components/MappedNotes';
import styles from './style.module.scss';

const NotesList: React.FC = () => (
  <section>
    <Grid
      className={styles.gridContainer}
      component="ul"
      container
      justifyContent="center"
    >
      <MappedNotes />
    </Grid>
  </section>
);

export default NotesList;
