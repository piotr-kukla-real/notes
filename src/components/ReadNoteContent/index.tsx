import { Typography } from '@material-ui/core';
import DialogTopBar from 'components/DialogTopBar';
import NoteRemoved from 'components/NoteRemoved';
import { useNotes } from 'components/Notes';
import { useMemo } from 'react';
import styles from './style.module.scss';

const ReadNoteContent: React.FC = () => {
  const { findNote } = useNotes()!;

  const checkNote = useMemo(() => {
    const { state } = window.history;
    return findNote(state);
  }, [findNote]);

  if (!checkNote) {
    return <NoteRemoved />;
  }

  const { title, note, date } = checkNote;

  return (
    <section>
      <DialogTopBar header="Note" />
      <div className={styles.noteWrapper}>
        <Typography variant="h3">{title}</Typography>
        <Typography className={styles.note}>{note}</Typography>
        <Typography
          className={styles.date}
          variant="body2"
          color="textSecondary"
        >
          {date}
        </Typography>
      </div>
    </section>
  );
};

export default ReadNoteContent;
