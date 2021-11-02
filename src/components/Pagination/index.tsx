import { useMediaQuery } from '@material-ui/core';
import { Pagination as MuiPagination } from '@material-ui/lab';
import { useNotes } from 'components/Notes';
import styles from './style.module.scss';

const Pagination: React.FC = () => {
  const { info, changePage } = useNotes()!;

  const onChange = (e: React.ChangeEvent<unknown>, page: number) => {
    changePage(page);
    if (page !== info.currentPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isMobile = useMediaQuery('(max-width: 480px)', { noSsr: true });

  const size = isMobile ? 'small' : 'medium';

  const check = info.maxPage === 1;

  const classNames = `${styles.pagination} ${check ? 'hidden' : ''}`;

  return (
    <MuiPagination
      className={classNames}
      count={info.maxPage}
      onChange={onChange}
      page={info.currentPage}
      size={size}
      color="secondary"
      variant="outlined"
    />
  );
};

export default Pagination;
