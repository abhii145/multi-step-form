import React from "react";
import InputField from "./InputField";

const Address: React.FC = () => {
  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg">
      <InputField
        label="Address"
        name="address"
        errorMessage="Please Enter Your Complete Address"
      />
      <InputField
        label="Country"
        name="country"
        errorMessage="Please Enter Your Country"
      />
      <InputField
        label="State"
        name="state"
        errorMessage="Please Enter Your State"
      />
      <InputField
        label="City"
        name="city"
        errorMessage="Please Enter Your City"
      />
      <InputField
        label="Zip Code"
        name="zipCode"
        errorMessage="Please Enter Correct Zip Code"
      />
    </div>
  );
};

export default Address;
