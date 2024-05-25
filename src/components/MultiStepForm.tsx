import { useState } from "react";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PersonalDetails from "./PersonalDetails";
import Address from "./Address";
import FinalStep from "./FinalStep";
import Stepper from "./Stepper";
import { schemas } from "../utils/Schema"; 

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const methods = useForm({
    resolver: zodResolver(schemas[step]),
    mode: "onBlur",
  });

  const { reset } = methods;

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setFormData({ ...formData, ...data });
    if (step < schemas.length - 1) {
      nextStep();
    } else {
      console.log("Form submitted:", { ...formData, ...data });
      reset();
      setStep(0);
    }
  };

  return (
    <FormProvider {...methods}>
      <Stepper currentStep={step} />

      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="max-w-md mx-auto"
      >
        {step < schemas.length && (
          <>
            {step === 0 && <PersonalDetails />}
            {step === 1 && <Address />}
            {step === 2 && <FinalStep />}
          </>
        )}

        <div className="flex justify-between mt-4">
          {step > 0 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Previous
            </button>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {step === schemas.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default MultiStepForm;
