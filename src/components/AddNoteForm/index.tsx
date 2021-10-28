import { Button, TextField } from '@material-ui/core';
import { titleMaxLength, noteMaxLength } from 'utils/settings';
import styles from 'utils/formStyles.module.scss';

const AddNoteForm: React.FC = () => {
  return (
    <form className={styles.form}>
      <TextField
        className={styles.formControl}
        label="title"
        name="title"
        inputProps={{ maxLength: titleMaxLength }}
      />
      <TextField
        className={styles.formControl}
        label="note"
        name="note"
        inputProps={{ maxLength: noteMaxLength }}
        multiline
        rows="8"
      />
      <Button className={styles.submitBtn} type="submit">
        Add
      </Button>
    </form>
  );
};

export default AddNoteForm;
