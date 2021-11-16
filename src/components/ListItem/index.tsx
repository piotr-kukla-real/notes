import { ButtonBase, Grid, Typography } from '@material-ui/core';
import ListItemMenu, {
  Props as ListItemMenuProps,
} from 'components/ListItemMenu';
import type { Note } from 'components/Notes';
import { useRoutes } from 'components/Routes';
import { useState } from 'react';
import styles from './style.module.scss';

const ListItem: React.FC<Props> = ({ item }) => {
  const [state, setState] = useState<ListItemMenuProps['state']>(undefined);

  const onContextMenu = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    setState({
      left: e.clientX - 2,
      top: e.clientY - 2,
    });
  };

  const handleClose = () => setState(undefined);

  const { title, note, id, date } = item;

  const { pushState } = useRoutes()!;

  const onClick = () => {
    pushState('/note', id);
  };

  return (
    <Grid className={styles.gridItem} component="li" item>
      <div className={styles.itemWrapper}>
        <ButtonBase
          className={styles.cardButton}
          onClick={onClick}
          onContextMenu={onContextMenu}
        >
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
        </ButtonBase>
        <ListItemMenu id={id} state={state} handleClose={handleClose} />
      </div>
    </Grid>
  );
};

export interface Props {
  item: Note;
}

export default ListItem;
