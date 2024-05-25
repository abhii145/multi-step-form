import React from "react";
import { useFormContext } from "react-hook-form";
import InputField from "./InputField";
// import { validateDateOfBirth } from "../utils/actions";

const PersonalDetails: React.FC = () => {
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext();
  const occupation = watch("occupation");

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg">
      <InputField
        label="Name"
        name="name"
        errorMessage="Please Enter Your Name"
      />
      <InputField
        label="Email"
        name="email"
        type="email"
        errorMessage="Please enter a valid email address"
      />
      <InputField
        label="Date of Birth"
        name="dateOfBirth"
        type="date"
        errorMessage="Date of birth cannot be today or in the future."
      />
      <InputField
        label="Aadhar ID"
        name="aadharId"
        errorMessage="Please Enter 5 Digit Aadhar ID"
      />

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Occupation <span className="text-red-400">*</span>
        </label>
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            value="salaried"
            {...register("occupation")}
            className="form-radio h-4 w-4 text-gray-600"
          />
          <span className="ml-2 text-gray-700">Salaried</span>
        </label>
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            value="student"
            {...register("occupation")}
            className="form-radio h-4 w-4 text-gray-600"
          />
          <span className="ml-2 text-gray-700">Student</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="businessman"
            {...register("occupation")}
            className="form-radio h-4 w-4 text-gray-600"
          />
          <span className="ml-2 text-gray-700">Businessman</span>
        </label>
        {errors.occupation && (
          <span className="text-red-500">Please Select Your Occupation</span>
        )}
      </div>

      <InputField
        label="Bank"
        name="bank"
        type="select"
        selectOptions={[
          { value: "X Bank", label: "X Bank" },
          { value: "Y Bank", label: "Y Bank" },
          { value: "Z Bank", label: "Z Bank" },
        ]}
        errorMessage="Please Choose Your Bank"
      />
      <InputField
        label="Bank Account No"
        name="bankAccount"
        type="text"
        errorMessage="Please Enter Your Bank Ac No"
      />
      <InputField
        label="Confirm Bank Account No"
        name="confirmBankAccount"
        type="password"
        errorMessage="Bank account does not match"
      />

      {occupation === "salaried" && (
        <InputField
          label="Salary"
          name="salary"
          errorMessage="Please Enter Your Salary"
        />
      )}

      {occupation === "businessman" && (
        <InputField
          label="GST No"
          name="gstNo"
          errorMessage="Please Enter Your GST NO"
        />
      )}
    </div>
  );
};

export default PersonalDetails;
