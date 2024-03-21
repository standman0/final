"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function BusinessForm() {
  const [email, setEmail] = useState("");
  const searchParams = useSearchParams()
 
  const search = searchParams.get('formsubmit');
  const router = useRouter()

  useEffect(() => {
    if(search) {
      toast.success("Your Demo Request Was Successful, Thank you")
      router.push("/business", {})
    }
  }, [])
  
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      ></label>
      <Toaster position="top-right" />
      <div>
      <form action="https://formsubmit.co/larry@mycircle.africa" method="POST" className="mt-1 flex gap-5 justify-center">
        <input type="hidden" name="name"  value={`Demo request from Circle business by ${email}`}/>
        <input type="hidden" name="_next" value="https://mycircle.africa/business?formsubmit=true"></input>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block px-4 lg:w-2/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="example@email.com"
        />
        <button
          className="lg:w-44 w-30 px-2 text-sm h-10 bg-homeblue rounded-lg text-white hover:text-homeblue hover:bg-green-500"
          type="submit"
        >
          Request a Demo
        </button>
        </form>
      </div>
    </div>
  );
}
