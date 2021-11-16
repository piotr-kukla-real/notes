import { Menu } from '@material-ui/core';
import MenuItems from 'components/MenuItems';

import styles from './style.module.scss';

const ListItemMenu: React.FC<Props> = ({ id, state, handleClose }) => {
  const onContextMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    handleClose(e);
  };

  return (
    <Menu
      open={!!state}
      anchorReference="anchorPosition"
      anchorPosition={state}
      className={styles.menu}
      onClose={handleClose}
      onContextMenu={onContextMenu}
      MenuListProps={{ onClick: handleClose }}
      disablePortal
    >
      <MenuItems id={id} />
    </Menu>
  );
};

export interface Props {
  id: number;
  state:
    | {
        left: number;
        top: number;
      }
    | undefined;
  handleClose: (
    e: React.BaseSyntheticEvent,
    reason?: 'backdropClick' | 'escapeKeyDown',
  ) => void;
}

export default ListItemMenu;
