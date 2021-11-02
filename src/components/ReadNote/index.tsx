import ReadNoteContent from 'components/ReadNoteContent';
import RouteDialog from 'components/RouteDialog';

const ReadNote: React.FC = () => {
  return (
    <RouteDialog path="/note">
      <ReadNoteContent />
    </RouteDialog>
  );
};

export default ReadNote;
