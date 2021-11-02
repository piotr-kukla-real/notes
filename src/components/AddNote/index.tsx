import AddNoteContent from 'components/AddNoteContent';
import RouteDialog from 'components/RouteDialog';

const AddNote: React.FC = () => {
  return (
    <RouteDialog path="/add-note">
      <AddNoteContent />
    </RouteDialog>
  );
};

export default AddNote;
