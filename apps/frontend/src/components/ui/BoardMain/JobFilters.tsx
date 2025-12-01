import { Card, CardContent } from "../card";
import { Label } from "../label";
import { RadioGroup, RadioGroupItem } from "../radio-group";
import { Slider } from "../slider";

export default function JobFilters() {
  return (
    <aside className="w-full md:w-[350px]">
      <Card className=" md:sticky top-24 border-slate-200 shadow-lg">
        <CardContent className="px-6 py-2 md:p-6 flex flex-row md:flex-col justify-between">
          <h3 className="font-bold text-lg mb-6 text-slate-800">Filters</h3>

          <div className="mb-8">
            <h4 className="font-semibold mb-4 text-slate-700">Job Type</h4>
            <RadioGroup defaultValue="full-time">
              <div className="flex items-center space-x-2 mb-3">
                <RadioGroupItem value="full-time" id="full-time" />
                <Label htmlFor="full-time" className="cursor-pointer text-slate-600">
                  Full-time
                </Label>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <RadioGroupItem value="part-time" id="part-time" />
                <Label htmlFor="part-time" className="cursor-pointer text-slate-600">
                  Part-time
                </Label>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <RadioGroupItem value="contract" id="contract" />
                <Label htmlFor="contract" className="cursor-pointer text-slate-600">
                  Contract
                </Label>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <RadioGroupItem value="freelance" id="freelance" />
                <Label htmlFor="freelance" className="cursor-pointer text-slate-600">
                  Freelance
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="internship" id="internship" />
                <Label htmlFor="internship" className="cursor-pointer text-slate-600">
                  Internship
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="mb-8">
            <h4 className="font-semibold mb-4 text-slate-700">Salary Range</h4>
            <Slider defaultValue={[100]} max={200} step={10} className="mb-3" />
            <div className="flex justify-between text-sm text-slate-600">
              <span>€0</span>
              <span>€200k+</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-slate-700">Work Mode</h4>
            <RadioGroup defaultValue="remote">
              <div className="flex items-center space-x-2 mb-3">
                <RadioGroupItem value="remote" id="remote" />
                <Label htmlFor="remote" className="cursor-pointer text-slate-600">
                  Remote
                </Label>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <RadioGroupItem value="onsite" id="onsite" />
                <Label htmlFor="onsite" className="cursor-pointer text-slate-600">
                  On-site
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hybrid" id="hybrid" />
                <Label htmlFor="hybrid" className="cursor-pointer text-slate-600">
                  Hybrid
                </Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
