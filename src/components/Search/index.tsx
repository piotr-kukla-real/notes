import { TextField } from '@material-ui/core';
import { useNotes } from 'components/Notes';
import { DebounceInput } from 'react-debounce-input';
import styles from './style.module.scss';

const Search: React.FC = () => {
  const { searchNotes } = useNotes()!;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    searchNotes(e.target.value);

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
