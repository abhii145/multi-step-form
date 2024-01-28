import { useFormContext } from "react-hook-form";

const PersonalDetails: React.FC = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const occupation = watch("occupation");

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name <span className="text-red-400">*</span>
        </label>
        <input
          {...register("name")}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.name && (
          <span className="text-red-500">Please Enter Your Name</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2">Email <span className="text-red-500">*</span></label>
        <input
          {...register("email")}
          type="email"
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.email && (
          <span className="text-red-500">Please enter a valid email address</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2">Aadhar ID <span className="text-red-500">*</span></label>
        <input
          {...register("aadharId")}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.aadharId && (
          <span className="text-red-500">Please Enter 5 Digit Aadhar ID</span>
        )}
      </div>

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
        <div>
        {errors.occupation && (
          <span className="text-red-500">Please Select Your Occupation</span>
        )}
        </div>
       
      </div>

      <div className="mb-4">
        <label className="block mb-2">Bank <span className="text-red-400">*</span></label>
        <select
          {...register("bank")}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="X Bank">X Bank</option>
          <option value="Y Bank">Y Bank</option>
          <option value="Z Bank">Z Bank</option>
        </select>
        {errors.bank && (
          <span className="text-red-500">Please Choose Your Bank</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2">Bank Account No <span className="text-red-400">*</span></label>
        <input
          {...register("bankAccount")}
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.bankAccount && (
          <span className="text-red-500">Please Enter Your Bank Ac No</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-2">Confirm Bank Account No <span className="text-red-400">*</span></label>
        <input
          {...register("confirmBankAccount")}
          type="password"
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.confirmBankAccount && (
          <span className="text-red-500">
           Bank account does not match
          </span>
        )}
      </div>

      {occupation === "salaried" && (
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="salary"
          >
            Salary:
          </label>
          <input
            {...register("salary", {
              required: true,
            })}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.salary && (
            <span className="text-red-500">Please Enter Your Salary</span>
          )}
        </div>
      )}

      {occupation === "businessman" && (
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="gstNo"
          >
            GST No:
          </label>
          <input
            {...register("gstNo")}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.gstNo && (
            <span className="text-red-500">Please Enter Your GST NO</span>
          )}
        </div>
      )}
    </div>
  );
};

export default PersonalDetails;
