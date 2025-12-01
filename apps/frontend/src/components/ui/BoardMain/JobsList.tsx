import {
  BookmarkIcon,
  MapPinIcon,
  ClockIcon,
  CurrencyDollarIcon
} from "@heroicons/react/24/outline";
import { Card, CardContent } from "../card";
import { Button } from "../button";
import { Badge } from "../badge";
import Link from "next/link";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  postedDays: number;
  salaryRange: string;
  jobType: string;
  workMode: string;
  companyInitial: string;
  bgColor: string;
}

const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    postedDays: 2,
    salaryRange: "$120k - $180k",
    jobType: "Full-time",
    workMode: "On-site",
    companyInitial: "T",
    bgColor: "bg-blue-100"
  },
  {
    id: "2",
    title: "Product Designer",
    company: "DesignStudio",
    location: "Remote",
    postedDays: 7,
    salaryRange: "$90k - $140k",
    jobType: "Full-time",
    workMode: "Remote",
    companyInitial: "D",
    bgColor: "bg-purple-100"
  },
  {
    id: "3",
    title: "Backend Engineer",
    company: "DataFlow Systems",
    location: "New York, NY",
    postedDays: 3,
    salaryRange: "$130k - $190k",
    jobType: "Full-time",
    workMode: "Remote",
    companyInitial: "D",
    bgColor: "bg-green-100"
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "CloudNet Solutions",
    location: "Austin, TX",
    postedDays: 5,
    salaryRange: "$110k - $160k",
    jobType: "Full-time",
    workMode: "Hybrid",
    companyInitial: "C",
    bgColor: "bg-orange-100"
  }
];

export default function JobsList() {
  return (
    <div className="lg:col-span-3 space-y-4 w-full">
      {jobs.map(job => (
        <Link key={job.id} href={`/offer/${job.id}`} className="block">
          <Card className="hover:shadow-xl transition-all duration-300 border-slate-200 cursor-pointer">
            <CardContent className="px-6">
              <div className="flex items-start gap-4">
                <div
                  className={`${job.bgColor} rounded-xl w-14 h-14 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-2xl font-bold text-slate-700">{job.companyInitial}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-slate-600 font-medium">{job.company}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="flex-shrink-0 hover:bg-blue-50"
                      onClick={e => e.preventDefault()}
                    >
                      <BookmarkIcon className="w-5 h-5 text-slate-400" />
                    </Button>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <MapPinIcon className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon className="w-4 h-4" />
                      <span>{job.postedDays} days ago</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CurrencyDollarIcon className="w-4 h-4" />
                      <span>{job.salaryRange}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-700 hover:bg-blue-200 font-medium"
                    >
                      {job.jobType}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-slate-300 text-slate-700 hover:bg-slate-100"
                    >
                      {job.workMode}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
