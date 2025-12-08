"use client";

import CompanyCard from "./CompanyCard";

export interface Company {
  id: string;
  name: string;
  initial: string;
  industry: string;
  rating: number;
  location: string;
  employeeRange: string;
  openPositions: number;
  bgColor: string;
}

const topCompanies: Company[] = [
  {
    id: "1",
    name: "TechCorp Inc.",
    initial: "T",
    industry: "Technology",
    rating: 4.5,
    location: "San Francisco",
    employeeRange: "5,000+",
    openPositions: 24,
    bgColor: "bg-blue-100"
  },
  {
    id: "2",
    name: "DesignStudio",
    initial: "D",
    industry: "Design & Creative",
    rating: 4.8,
    location: "Remote",
    employeeRange: "500-1000",
    openPositions: 12,
    bgColor: "bg-purple-100"
  },
  {
    id: "3",
    name: "DataFlow Systems",
    initial: "D",
    industry: "Software",
    rating: 4.3,
    location: "New York",
    employeeRange: "1,000-5,000",
    openPositions: 18,
    bgColor: "bg-green-100"
  },
  {
    id: "4",
    name: "CloudNet Solutions",
    initial: "C",
    industry: "Cloud Computing",
    rating: 4.6,
    location: "Austin",
    employeeRange: "500-1000",
    openPositions: 15,
    bgColor: "bg-orange-100"
  },
  {
    id: "5",
    name: "MacDoodels",
    initial: "M",
    industry: "Fast Food & Dining",
    rating: 3.9,
    location: "Chicago",
    employeeRange: "10,000+",
    openPositions: 42,
    bgColor: "bg-yellow-100"
  },
  {
    id: "6",
    name: "StarBocks Coffee",
    initial: "S",
    industry: "Coffee & Beverages",
    rating: 4.2,
    location: "Seattle",
    employeeRange: "5,000+",
    openPositions: 28,
    bgColor: "bg-emerald-100"
  },
  {
    id: "7",
    name: "Microhard",
    initial: "M",
    industry: "Software & Cloud",
    rating: 4.7,
    location: "Redmond",
    employeeRange: "10,000+",
    openPositions: 156,
    bgColor: "bg-cyan-100"
  },
  {
    id: "8",
    name: "Pear Inc.",
    initial: "P",
    industry: "Consumer Electronics",
    rating: 4.9,
    location: "Cupertino",
    employeeRange: "10,000+",
    openPositions: 89,
    bgColor: "bg-slate-100"
  }
];

export default function TopCompanies() {
  return (
    <div className="space-y-12">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topCompanies.map(company => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </div>
    </div>
  );
}
