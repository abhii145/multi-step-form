import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { addressSchema } from './Schema'; // Assuming you have defined addressSchema similar to personalDetailsSchema

type FormValues = z.infer<typeof addressSchema>;

const Address: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(addressSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 100));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
          Address:
        </label>
        <input
          {...register('address')}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.address && <span className="text-red-500">{errors.address.message}</span>}
      </div>

      <div className="mb-4">
        <label className="block mb-2">City:</label>
        <input
          {...register('city')}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.city && <span className="text-red-500">{errors.city.message}</span>}
      </div>

      <div className="mb-4">
        <label className="block mb-2">State:</label>
        <input
          {...register('state')}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.state && <span className="text-red-500">{errors.state.message}</span>}
      </div>

      <div className="mb-4">
        <label className="block mb-2">Country:</label>
        <input
          {...register('country')}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.country && <span className="text-red-500">{errors.country.message}</span>}
      </div>

      <div className="mb-4">
        <label className="block mb-2">Zip Code:</label>
        <input
          {...register('zipCode')}
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.zipCode && <span className="text-red-500">{errors.zipCode.message}</span>}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        disabled={isSubmitting}
      >
        {isSubmitting ? '....lOADING' : 'Submit'}
      </button>
    </form>
  );
};

export default Address;
