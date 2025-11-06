import jobInfo from "../../../data/offer.json"
export default function OfferDescription(){
    return(
        <section className="px-[25px] flex flex-col bg-white rounded-[12px] py-[16px] shadow-sm flex-3 gap-[36px]">
            <div>
                <h2 className="text-main-black text-[16px] font-bold mb-[8px]">Job Description</h2>
                <p className="text-body">
                    {jobInfo.description.job}
                </p>
            </div>
            <div>
                <h2 className="text-main-black text-[16px] font-bold mb-[8px]">About The Role</h2>
                <ul className="list-disc pl-6 space-y-2 text-body">
                    {
                        jobInfo.description.role.map((role, i) => (
                            <li key={i}>{role}</li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}