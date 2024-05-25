import { SubmitHandler } from 'react-hook-form';

export interface PersonalDetailsProps {
  name: string;
  email: string;
  aadharId: number;
  occupation: "salaried" | "student" | "businessman";
  bank: "X Bank" | "Y Bank" | "Z Bank";
  bankAccount: number;
  confirmBankAccount: number;
  salary: number;
  gstNo: number;
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface Address {
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface FinalStepData {
  isChecked: boolean;
  selectedLanguage: "english" | "hindi";
}


export interface StepsProps  {
  onSubmit: SubmitHandler<{ field1: string; field2: string }>;
  initialValues: { field1: string; field2: string };
}