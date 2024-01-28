import { useFormContext } from 'react-hook-form';



// const translations: { [key: string]: string } = {
//   english:
//     "I confirm that the information provided is in English and I understand that any",
//   hindi: "मैं नियम और शर्तों से सहमत हूँ।",
// };


const FinalStep: React.FC = () => {
   const { register, formState: { errors } } = useFormContext();
  // const [selectedLanguage, setSelectedLanguage] = useState<string>("english");
  // const [isChecked, setIsChecked] = useState<boolean>(false);

  // const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedLanguage(e.target.value);
  // };



  return (
    // <div className="flex items-center justify-center h-screen:50% bg-gray-100">
    //   <div className="bg-white p-8 rounded-lg shadow-lg">
    //     <form >
    //       <label className="inline-flex items-center mb-4">
    //         <Controller
    //           control={control}
    //           name="consent"
    //           render={({ field }) => (
    //             <input
    //               type="checkbox"
    //               className="form-checkbox h-5 w-5 text-blue-500"
    //               onChange={(e) => {
    //                 field.onChange(e.target.checked);
    //                 setIsChecked(e.target.checked);
    //               }}
    //             />
    //           )}
    //         />
    //         <span className="ml-2 text-gray-700 w-80">
    //           {translations[selectedLanguage]}
    //         </span>
    //       </label>
    //       {errors?.consent && (
    //         <span className="text-red-500">This field is required</span>
    //       )}
    //       <select
    //         className="border border-gray-300 p-2 mb-4 rounded"
    //         value={selectedLanguage}
    //         onChange={handleLanguageChange}
    //       >
    //         <option value="english">English</option>
    //         <option value="hindi">Hindi</option>
    //       </select>
    //       <div className="mb-4"></div> {/* Added space here */}
          
    //     </form>
    //   </div>
    // </div>

    <div className="mb-4">
    <input type="checkbox" {...register('agree')} className="mr-2" />
    <label htmlFor="agree">I agree to terms and conditions</label>
    {errors.agree && <span className="text-red-500">This field is required</span>}
    
    <input type="text" {...register('additionalInfo')} placeholder="Additional Info" className="border border-gray-400 p-2" />
    {errors.additionalInfo && <span className="text-red-500">This field is required</span>}
  </div>


  );
};

export default FinalStep;
