import React from "react";
import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  consent: z.boolean(),
});

const translations: { [key: string]: string } = {
  english:
    "I confirm that the information provided is in English and I understand that any",
  hindi: "मैं नियम और शर्तों से सहमत हूँ।",
};

type FormData = {
  consent: boolean;
};

const FinalStep: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [selectedLanguage, setSelectedLanguage] = useState<string>("english");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="inline-flex items-center mb-4">
            <Controller
              control={control}
              name="consent"
              render={({ field }) => (
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-500"
                  onChange={(e) => {
                    field.onChange(e.target.checked);
                    setIsChecked(e.target.checked);
                  }}
                />
              )}
            />
            <span className="ml-2 text-gray-700 w-80">
              {translations[selectedLanguage]}
            </span>
          </label>
          {errors?.consent && (
            <span className="text-red-500">This field is required</span>
          )}
          <select
            className="border border-gray-300 p-2 mb-4 rounded"
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </select>
          <div className="mb-4"></div> {/* Added space here */}
          <button
            type="submit"
            className={`py-2 px-4 rounded ${
              !isChecked || !!errors?.consent
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-blue-500 text-white cursor-pointer"
            }`}
            disabled={!isChecked || !!errors?.consent}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FinalStep;
