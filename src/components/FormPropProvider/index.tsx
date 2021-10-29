import { useNotes } from 'components/Notes';
import type { Action } from 'components/Notes/reducer';
import { useNotify } from 'components/Notification';
import type { Context as SetNotify } from 'components/Notification';

const FormPropProvider: React.FC<Props> = ({ form: Form }) => {
  const { dispatch } = useNotes()!;
  const setNotify = useNotify()!;

  return <Form dispatch={dispatch} setNotify={setNotify} />;
};

export interface Props {
  form: React.ComponentType<FormProps>;
}

export interface FormProps {
  dispatch: React.Dispatch<Action>;
  setNotify: SetNotify;
}

export default FormPropProvider;
