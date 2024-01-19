import { Smartphone } from "lucide-react";

const PhoneForm = () => {
  return (
    <form className="w-full max-w-md mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <Smartphone className="stroke-blue-500" size={20} />
        </div>
        <input
          type="number"
          className="block w-full p-4 ps-10 text-sm rounded-md border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Phone number here..."
          required
        />
        <button
          type="submit"
          className="text-white absolute top-1/2 right-2 -translate-y-1/2 rounded-md text-sm px-4 py-2 bg-blue-500 hover:bg-blue-700 focus:ring-blue-800"
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default PhoneForm;
