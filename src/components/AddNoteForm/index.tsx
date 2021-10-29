import { Button, TextField } from '@material-ui/core';
import { titleMaxLength, noteMaxLength } from 'utils/settings';
import styles from 'utils/formStyles.module.scss';
import useForm from 'utils/useForm';
import type { FormProps } from 'components/FormPropProvider';
import { useEffect, useRef } from 'react';

const initialValues = {
  title: '',
  note: '',
};

const handleInitValues = () => {
  const check = localStorage.getItem('add-note');
  if (check) {
    const values: typeof initialValues = JSON.parse(check);
    const { title, note } = values;

    if (title.length > titleMaxLength) {
      values.title = title.slice(0, titleMaxLength);
    } else if (note.length > noteMaxLength) {
      values.note = note.slice(0, noteMaxLength);
    }

    return values;
  }
  localStorage.setItem('add-note', JSON.stringify(initialValues));
  return initialValues;
};

const AddNoteForm: React.FC<FormProps> = ({ setNotify, dispatch }) => {
  const { values, handleChange, handleValues } = useForm(handleInitValues);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, note } = values;

    if (!title || !note) {
      setNotify({
        message: 'You need to fill every field!',
        color: 'error',
        icon: 'error',
      });
      return;
    }

    dispatch({
      type: 'ADD',
      payload: { title, note },
    });

    setNotify({ message: 'Note added' });
    handleValues(initialValues);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      (e.target as any).form[2].focus();
    }
  };

  const noteHelperText = `${values.note.length}/${noteMaxLength}`;

  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    localStorage.setItem('add-note', JSON.stringify(values));
  }, [values]);

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <TextField
        className={styles.formControl}
        label="title"
        name="title"
        inputProps={{ maxLength: titleMaxLength }}
        value={values.title}
        onChange={handleChange}
        onKeyDown={onKeyDown}
      />
      <TextField
        className={styles.formControl}
        label="note"
        name="note"
        inputProps={{ maxLength: noteMaxLength }}
        multiline
        rows="8"
        value={values.note}
        onChange={handleChange}
        helperText={noteHelperText}
      />
      <Button className={styles.submitBtn} type="submit">
        Add
      </Button>
    </form>
  );
};

export default AddNoteForm;
