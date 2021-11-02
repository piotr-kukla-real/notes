import { useNotes } from 'components/Notes';
import ListItem from 'components/ListItem';

const MappedNotes: React.FC = () => {
  const { notes } = useNotes()!;

  return (
    <>
      {notes.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default MappedNotes;
