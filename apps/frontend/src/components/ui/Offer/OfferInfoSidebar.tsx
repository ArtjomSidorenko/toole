
import { InfoItem } from "./InfoItem";
import jobInfo from "../../../data/offer.json"
export default function OfferInfoSidebar(){
    return(
        <aside className="bg-white py-[16px] pl-[28px] flex-1 rounded-[12px] shadow-sm">
            <h2 className="text-main-black text-[16px] font-bold mb-[8px]">Info</h2>
            <ul className="space-y-4">
                { jobInfo.info.map((element, i) => (
                    <InfoItem key={i} {...element}/>
                ))}
            </ul>
        </aside>
    )
}