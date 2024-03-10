export default function BusinessForm() {
    return (
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        </label>
        <div className="mt-1 flex gap-5 justify-center">
          <input
            type="email"
            name="email"
            id="email"
            className="block px-4 lg:w-2/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="seyibrian@gmail.com"
          />
          <button className="lg:w-44 w-30 px-2 text-sm h-10 bg-homeblue rounded-lg text-white hover:text-homeblue hover:bg-green-500">Request a Demo</button>
        </div>
      </div>
    )
  }
  