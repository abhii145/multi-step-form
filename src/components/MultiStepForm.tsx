import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import PersonalDetails from './PersonalDetails';
import Address from './Address';
import FinalStep from './FinalStep';
import Stepper from './Stepper';
import { PersonalDetailsProps } from '../utils';


const schemas = [
  z
  .object({
    name: z.string().nonempty(),
    email: z.string().email(),
    aadharId: z.coerce.number().min(5),
    occupation: z.enum(["salaried", "student", "businessman"]),
    bank: z.enum(["X Bank", "Y Bank", "Z Bank"]),
    bankAccount: z.coerce.number().min(5),
    confirmBankAccount: z.coerce.number().min(5),
    salary: z.coerce.number().optional(),
    gstNo: z.coerce.number().optional(),
  })
  .refine((data) => data.bankAccount === data.confirmBankAccount, {
    path: ["confirmBankAccount"],
    message: "Bank account does not match",
  })
  .refine(
    (data) => {
      if (data.occupation === "salaried") {
        return typeof data.salary === "number";
      }
      return true;
    },
    {
      message: "Salary is required for salaried employees",
      path: ["salary"],
    }
  )
  .refine(
    (data) => {
      if (data.occupation === "businessman") {
        return typeof data.gstNo === "number";
      }
      return true;
    },
    {
      message: "Gst is required for salaried employees",
      path: ["gstNo"],
    }
  ),
  z.object({
    address: z.string().min(5).max(100),
  city: z.string().min(2).max(50),
  state: z.string().min(2).max(50),
  country: z.string().min(2).max(50),
  zipCode: z.string().regex(/^\d{6}$/),
  }),
  z.object({
    agree: z.boolean().refine(value => value === true, {
      message: 'Please agree to terms and conditions',
      path: ['agree'],
    }),
    additionalInfo: z.string().optional(),
  }),
];


const MultiStepForm = () => {
  const [step, setStep] = useState(0); 
  const [formData, setFormData] = useState({});

  const methods = useForm({
    resolver: zodResolver(schemas[step]), // Use schema based on current step
    mode: 'onBlur',
  });

  const { reset } = methods

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const onSubmit = (data:PersonalDetailsProps) => {
    setFormData({ ...formData, ...data }); 
    if (step < schemas.length - 1) {
      nextStep();
    } else {
      console.log('Form submitted:', { ...formData, ...data }); 
      reset();
      setStep(0)
    }
  };


  return (
    <FormProvider {...methods}>

<Stepper currentStep={step}/>

      <form onSubmit={methods.handleSubmit(onSubmit)} className="max-w-md mx-auto">
        {step < schemas.length && (
          <>
            {step === 0 && <PersonalDetails />}
            {step === 1 && <Address />}
            {step === 2 && <FinalStep />}
          </>
        )}
        
        <div className="flex justify-between mt-4">
          {step > 0 && (
            <button type="button" onClick={prevStep} className="bg-gray-400 text-white px-4 py-2 rounded">
              Previous
            </button>
          )}
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            {step === schemas.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </form>
    </FormProvider>
  )
}

export default MultiStepForm