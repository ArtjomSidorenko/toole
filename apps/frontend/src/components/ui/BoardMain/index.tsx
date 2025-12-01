"use client";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tabs";
import JobsList from "./JobsList";
import JobFilters from "./JobFilters";
import TopCompanies from "./TopCompanies";

export default function BoardMain() {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <Tabs defaultValue="featured">
        <TabsList className="bg-white rounded-3xl w-fit">
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="topCompanies">Top Companies</TabsTrigger>
          <TabsTrigger value="browseJobs">Browse</TabsTrigger>
        </TabsList>
        <TabsContent value="featured">
          <div className="mb-8 bg-gradient-to-r rounded-2xl p-6 border border-blue-200 bg-light-blue">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500 rounded-full p-2">
                <ArrowTrendingUpIcon className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Featured Job Listings</h2>
            </div>
          </div>
          <div className="flex gap-8 flex-col md:flex-row">
            <JobFilters />
            <JobsList />
          </div>
        </TabsContent>
        <TabsContent value="topCompanies">
          <TopCompanies />
        </TabsContent>
        <TabsContent value="browseJobs">
          <div className="flex gap-8 flex-col md:flex-row">
            <JobFilters />
            <JobsList />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
