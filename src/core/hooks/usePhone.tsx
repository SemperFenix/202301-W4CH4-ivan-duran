import { useState } from "react";

export type UsePhoneStructure = ReturnType<typeof usePhone>;

export function usePhone() {
  const initialState = "";
  const [phone, setPhone] = useState(initialState);

  const updateNumber = (number: string) => {
    setPhone(phone + number);
  };
  const deleteNumber = () => {
    setPhone("");
  };

  return { phone, updateNumber, deleteNumber };
}
