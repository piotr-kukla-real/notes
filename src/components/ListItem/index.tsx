import { ButtonBase, Card, Grid, Typography } from '@material-ui/core';
import type { Note } from 'components/Notes';
import { useRoutes } from 'components/Routes';
import styles from './style.module.scss';

const ListItem: React.FC<Props> = ({ item }) => {
  const { title, note, id, date } = item;

  const { pushState } = useRoutes()!;

  const showNote = () => pushState('/note', id);

  return (
    <Grid className={styles.gridItem} component="li" item>
      <ButtonBase className={styles.buttonBase} onClick={showNote}>
        <Card className={styles.card} variant="outlined">
          <Typography className={styles.title} variant="h3" noWrap>
            {title}
          </Typography>
          <Typography className={styles.note}>{note}</Typography>
          <Typography
            className={styles.date}
            variant="body2"
            align="right"
            noWrap
            color="textSecondary"
          >
            {date}
          </Typography>
        </Card>
      </ButtonBase>
    </Grid>
  );
};

interface Props {
  item: Note;
}

export default ListItem;
