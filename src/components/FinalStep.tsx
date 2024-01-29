import { useFormContext } from 'react-hook-form';



const FinalStep: React.FC = () => {
   const { register, formState: { errors } } = useFormContext();
  



  return (
    

    <div className="mb-4">
    <input type="checkbox" {...register('agree')} className="mr-2" />
    <label htmlFor="agree">I agree to terms and conditions <span className="text-red-400">*</span></label>
    {errors.agree && <span className="text-red-500">Please Confirm</span>}
    
    <input type="text" {...register('additionalInfo')} placeholder="Additional Info" className="border border-gray-400 p-2" />
    {errors.additionalInfo && <span className="text-red-500">This field is required</span>}
  </div>


  );
};

export default FinalStep;
