import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { personalDetailsSchema } from "./Schema";

type FormValues = z.infer<typeof personalDetailsSchema>;

const PersonalDetails: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(personalDetailsSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 100));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const occupation = watch("occupation");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name:
        </label>
        <input
          {...register("name")}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input
          {...register("email")}
          type="email"
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2">Aadhar ID</label>
        <input
          {...register("aadharId")}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.aadharId && (
          <span className="text-red-500">{errors.aadharId.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Occupation:
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
          <span className="text-red-500">{errors.occupation.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2">Bank</label>
        <select
          {...register("bank")}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="X Bank">X Bank</option>
          <option value="Y Bank">Y Bank</option>
          <option value="Z Bank">Z Bank</option>
        </select>
        {errors.bank && (
          <span className="text-red-500">{errors.bank.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2">Bank Account No</label>
        <input
          {...register("bankAccount")}
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.bankAccount && (
          <span className="text-red-500">{errors.bankAccount.message}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-2">Confirm Bank Account No</label>
        <input
          {...register("confirmBankAccount")}
          type="password"
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.confirmBankAccount && (
          <span className="text-red-500">
            {errors.confirmBankAccount.message}
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
              required: "Salary is required for salaried employees",
            })}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.salary && (
            <span className="text-red-500">{errors.salary.message}</span>
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
            <span className="text-red-500">{errors.gstNo.message}</span>
          )}
        </div>
      )}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        disabled={isSubmitting}
      >
        {isSubmitting ? "....lOADING" : "Submit"}
      </button>
    </form>
  );
};

export default PersonalDetails;
