export default function Form() {
    return (
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        </label>
        <div className="mt-1 flex gap-5 justify-center">
          <input
            type="email"
            name="email"
            id="email"
            className="block w-2/4  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="seyibrian@gmail.com"
          />
          <button className="w-44 h-10 bg-blue-800 rounded-xl">Request a Demo</button>
        </div>
      </div>
    )
  }
  