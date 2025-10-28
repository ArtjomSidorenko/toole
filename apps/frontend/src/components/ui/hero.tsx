import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon, MapPinIcon, BriefcaseIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="pt-[110px] flex flex-col items-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-[40px] text-primary-blue font-bold leading-[40px]">There’s a job for everyone!</h1>
        <p className="mt-[6px] text-[18px] text-gray-500 leading-[26px] font-normal">Connect with top companies and talented professionals. Your next career opportunity.</p>
      </div>
      <div className="mt-[20px] shadow-blue bg-white rounded-2xl shadow-md flex flex-col items-center w-full max-w-3xl pb-[44px]">
        <div className="flex flex-col px-[46px] pt-[44px] sm:flex-row w-full gap-[20px]">
          <div className="relative flex-2">
            <BriefcaseIcon className="absolute left-[10px] top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Job title, keywords or company"
              className="w-full rounded-full border border-gray-300 pl-[36px] pr-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            />
          </div>
          <div className="relative flex-1">
            <MapPinIcon className="absolute left-[10px] top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"/>
            <input
            type="text"
            placeholder="Location"
            className="flex-1 rounded-full border border-gray-300 pl-[36px] pr-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          />
          </div>
        </div>
          
          <Button variant="search" size='none' className="relative pl-[34px] pr-[22px] w-full sm:w-auto mt-[17px]">
            <MagnifyingGlassIcon className="absolute left-[10px] top-1/2 -translate-y-1/2 h-5 w-5 text-white" />
            Search Jobs
          </Button>
      </div>
    </section>
  )
}