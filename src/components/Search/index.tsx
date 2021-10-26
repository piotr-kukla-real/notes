import { TextField } from '@material-ui/core';
import { DebounceInput } from 'react-debounce-input';
import styles from './style.module.scss';

const Search: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => null;

  return (
    <DebounceInput
      className={styles.search}
      type="search"
      label="search"
      element={TextField}
      onChange={onChange}
      debounceTimeout={150}
    />
  );
};

export default Search;
