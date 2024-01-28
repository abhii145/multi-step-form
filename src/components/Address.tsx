import { useFormContext } from "react-hook-form";

const Address: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="address"
        >
          Address <span className="text-red-400">*</span>
        </label>
        <input
          {...register("address")}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.address && (
          <span className="text-red-500">Please Enter Your Complete Address</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2">City <span className="text-red-400">*</span></label>
        <input
          {...register("city")}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.city && (
          <span className="text-red-500">Please Enter Your City</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2">State <span className="text-red-400">*</span></label>
        <input
          {...register("state")}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.state && (
          <span className="text-red-500">Please Enter Your State</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2">Country <span className="text-red-400">*</span></label>
        <input
          {...register("country")}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.country && (
          <span className="text-red-500">Please Enter Your Country</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2">Zip Code <span className="text-red-400">*</span></label>
        <input
          {...register("zipCode")}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.zipCode && (
          <span className="text-red-500">Please Enter Correct  Zip Code</span>
        )}
      </div>
    </div>
  );
};

export default Address;
