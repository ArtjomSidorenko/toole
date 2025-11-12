import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import logo from "../../../../public/logo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SelectLanguage from "./SelectLanguage";

import { Bars3Icon } from "@heroicons/react/24/outline";

export default function HeaderMobile() {
  return (
    <>
      <div className="flex items-center gap-2">
        <Image width={75} height={75} src={logo} alt="logo" />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            <Bars3Icon className="h-5 w-5 text-gray-700" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-72" align="end">
          <DropdownMenuItem asChild>
            <Button variant="ghost" className="w-full justify-start">
              Build Your CV
            </Button>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Button variant="ghost" className="w-full justify-start">
              Post a Job
            </Button>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <Button variant="lightBlue" className="w-full justify-start">
              Login
            </Button>
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <div className="px-2 py-1.5">
            <SelectLanguage />
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
