const Stepper = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="flex justify-center mb-8 mt-10">
      <div className="flex space-x-4 items-center">
        <div className={currentStep >= 0 ? 'text-green-600 font-semibold' : 'text-gray-400 font-normal'}>
          Personal Details
        </div>
        <div className={`flex-grow ${currentStep >= 1 ? 'border-green-600' : 'border-gray-300'} border-t h-0`} style={{width: '100px'}} />
        <div className={currentStep >= 1 ? 'text-green-600 font-semibold' : 'text-gray-400 font-normal'}>
          Address
        </div>
        <div className={`flex-grow ${currentStep >= 2 ? 'border-green-600' : 'border-gray-300'} border-t h-0`} style={{width: '100px'}} />
        <div className={currentStep >= 2 ? 'text-green-600 font-semibold' : 'text-gray-400 font-normal'}>
          Confirmation
        </div>
      </div>
    </div>
  );
};

export default Stepper;
