import AddNoteForm from 'components/AddNoteForm';
import DialogTopBar from 'components/DialogTopBar';

const AddNoteContent: React.FC = () => (
  <section>
    <DialogTopBar header="Add note" />
    <AddNoteForm />
  </section>
);

export default AddNoteContent;
