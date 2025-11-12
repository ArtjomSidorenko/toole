"use client";
import OfferDescription from "@/components/ui/Offer/OfferDescription";
import OfferHeader from "@/components/ui/Offer/OfferHeader";
import OfferInfoSidebar from "@/components/ui/Offer/OfferInfoSidebar"
export default function OfferPage() {
  return (
    <main className="max-w-7xl mx-auto">
        <OfferHeader/>
        <div className="flex flex-col md:flex-row mt-[48px] gap-[41px]">
            <OfferDescription/>
            <OfferInfoSidebar/>
        </div>
    </main>
  )
}