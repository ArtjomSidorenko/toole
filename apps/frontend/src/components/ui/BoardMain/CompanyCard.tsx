import { MapPinIcon, UsersIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { Company } from "./TopCompanies";

export default function CompanyCard({ company }: { company: Company }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group">
      <div className="flex flex-col items-center mb-4">
        <div
          className={`${company.bgColor} rounded-3xl w-20 h-20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
        >
          <span className="text-3xl font-bold text-blue-600">{company.initial}</span>
        </div>
        <h3 className="text-lg font-bold text-slate-800 text-center">{company.name}</h3>
        <p className="text-sm text-slate-500 text-center">{company.industry}</p>
      </div>

      <div className="flex items-center justify-center gap-1 mb-4">
        <StarIcon className="w-5 h-5 text-yellow-400" />
        <span className="font-semibold text-slate-700">{company.rating}</span>
        <span className="text-sm text-slate-500">rating</span>
      </div>

      <div className="space-y-2 mb-6">
        <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
          <MapPinIcon className="w-4 h-4" />
          <span>{company.location}</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
          <UsersIcon className="w-4 h-4" />
          <span>{company.employeeRange} employees</span>
        </div>
      </div>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200">
        {company.openPositions} Open Positions
      </button>
    </div>
  );
}
