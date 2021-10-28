import { useState } from 'react';

const useForm = <T extends InitValues>(initValues: T) => {
  const [values, setValues] = useState(() => initValues);
  const handleChange: HandleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const reset = () => setValues(initValues);

  return { values, handleChange, reset };
};

interface InitValues {
  [key: string]: string;
}

interface HandleChange {
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
}

export default useForm;
