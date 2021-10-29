import { useState } from 'react';

const useForm = <T extends InitValues>(initValues: T | (() => T)) => {
  const [values, setValues] = useState(initValues);

  const handleChange: HandleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleValues = (newValues: Partial<T>) =>
    setValues((prev) => ({ ...prev, ...newValues }));

  return { values, handleChange, handleValues };
};

interface InitValues {
  [key: string]: string;
}

interface HandleChange {
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
}

export default useForm;
