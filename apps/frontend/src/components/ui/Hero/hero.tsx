import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { MagnifyingGlassIcon, MapPinIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import { InputGroupIcon } from "@/components/ui/input-group"
import StatContainer from "@/components/ui/Hero/StatContainer";

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
            <InputGroupIcon as={BriefcaseIcon} />
            <Input className="sm:placeholder:text-[16px] placeholder:text-[14px]" placeholder="Job title, keywords or company" />
          </div>
          <div className="relative flex-1">
            <InputGroupIcon as={MapPinIcon} />
            <Input className="sm:placeholder:text-[16px] placeholder:text-[14px]" placeholder="Location" />
          </div>
        </div>
          <Button variant="search" size='none' className="relative mt-[17px]">
            <InputGroupIcon as={MagnifyingGlassIcon} className="text-white"/>
            Search Jobs
          </Button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-[35px] mt-4 place-items-center">
        <StatContainer value="50k+" label="active jobs"/>
        <StatContainer value="10k+" label="companies" />
        <StatContainer value="1M+" label="professionals" className="col-span-2 sm:col-span-1 justify-self-center"/>
      </div>

    </section>
  )
}