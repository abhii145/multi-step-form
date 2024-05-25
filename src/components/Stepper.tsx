const Stepper = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="flex justify-center mb-8 mt-10">
      <div className="flex space-x-4 items-center">
        <div
          className={
            currentStep === 0
              ? "font-semibold rounded-lg px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 shadow-md text-white"
              : currentStep > 0
              ? "font-semibold rounded-lg px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 shadow-md text-white"
              : "font-normal rounded-lg px-4 py-2 bg-gray-200"
          }
        >
          Personal Details
        </div>
        <div
          className={`flex-grow ${
            currentStep >= 1 ? "border-green-600" : "border-gray-300"
          } transition-all duration-500`}
          style={{ width: "100px" }}
        >
          <div
            className={
              currentStep >= 1
                ? "bg-gradient-to-r from-green-400 to-green-600 h-1 transition-all duration-500"
                : "bg-gray-300 h-1"
            }
          ></div>
        </div>
        <div
          className={
            currentStep === 1
              ? "font-semibold rounded-lg px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 shadow-md text-white"
              : currentStep > 1
              ? "font-semibold rounded-lg px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 shadow-md text-white"
              : "font-normal rounded-lg px-4 py-2 bg-gray-200"
          }
        >
          Address
        </div>
        <div
          className={`flex-grow ${
            currentStep >= 2 ? "border-green-600" : "border-gray-300"
          } transition-all duration-500`}
          style={{ width: "100px" }}
        >
          <div
            className={
              currentStep >= 2
                ? "bg-gradient-to-r from-green-400 to-green-600 h-1 transition-all duration-500"
                : "bg-gray-300 h-1"
            }
          ></div>
        </div>
        <div
          className={
            currentStep === 2
              ? "font-semibold rounded-lg px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 shadow-md text-white"
              : currentStep > 2
              ? "font-semibold rounded-lg px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 shadow-md text-white"
              : "font-normal rounded-lg px-4 py-2 bg-gray-200"
          }
        >
          Confirmation
        </div>
      </div>
    </div>
  );
};

export default Stepper;
