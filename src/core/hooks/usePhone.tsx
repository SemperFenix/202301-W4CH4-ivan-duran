import { useState } from "react";
import { PhoneModel } from "../models/phone";

export type UsePhoneStructure = ReturnType<typeof usePhone>;

export function usePhone() {
  const initialState = {
    number: "",
    isCallable: false,
    isCalling: false,
  } as PhoneModel;
  const [phone, setPhone] = useState(initialState);

  const updateNumber = (number: string) => {
    phone.number += number;
    setPhone(phone);
  };
  const deleteNumber = () => {
    phone.number = "" as string;
    setPhone(phone);
  };

  return { phone, updateNumber, deleteNumber };
}
