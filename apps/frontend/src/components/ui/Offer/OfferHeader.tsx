import jobInfo from "../../../data/offer.json"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { BriefcaseIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button"
export default function OfferHeader(){
    return( 
        <div className="flex flex-col gap-[24px] sm:flex-row justify-between items-center">
            <div className="flex items-center gap-[21px]">
                <Image src={jobInfo.logo} alt="Company Logo" width={100} height={100}/>
                <div className="flex flex-col gap-[14px]">
                    <h1 className="text-[20px] font-medium">{jobInfo.title}</h1>
                    <div className="flex gap-4 text-gray-500">
                        <div className="flex items-center gap-[3px]">
                            <BriefcaseIcon className="w-5 h-5" />
                            <span>{jobInfo.company}</span>
                        </div>
                        <div className="flex items-center gap-[2px]">
                            <MapPinIcon className="h-5 w-5" />
                            <span>{jobInfo.location}</span>
                        </div>
                    </div>
                    <div className="flex w-full gap-2">
                        {
                            jobInfo.badges.map((badge, i) => (
                                <Badge key={i} size="helper" variant={badge.type as  "fullTimeOffer" | "onSiteOffer"}>
                                    {badge.label}
                                </Badge>
                            ))
                        }

                    </div>
                </div>

            </div>
            <Button variant="primaryBlue" className="">Apply now</Button>
        </div>
    )
}