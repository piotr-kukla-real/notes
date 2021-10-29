import AddNoteForm from 'components/AddNoteForm';
import DialogTopBar from 'components/DialogTopBar';
import FormPropProvider from 'components/FormPropProvider';

const AddNoteContent: React.FC = () => (
  <section>
    <DialogTopBar header="Add note" />
    <FormPropProvider form={AddNoteForm} />
  </section>
);

export default AddNoteContent;
