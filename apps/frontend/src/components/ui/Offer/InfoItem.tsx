import {
    CalendarDaysIcon,
    ClockIcon,
    MapPinIcon,
    BanknotesIcon,
    BriefcaseIcon,
    InformationCircleIcon,
} from "@heroicons/react/24/outline";

const icons = {
    calendar: CalendarDaysIcon,
    clock: ClockIcon,
    map: MapPinIcon,
    money: BanknotesIcon,
    briefcase: BriefcaseIcon,
    info: InformationCircleIcon
};


interface InfoItemProps {
    icon: string;
    label: string;
    value: string;
};

export function InfoItem({icon, label, value}: InfoItemProps){
    const Icon = icons[icon as keyof typeof icons] || InformationCircleIcon;
    return (
        <li>
            <div className="flex items-start gap-3">
                <Icon className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                        <p className="text-gray-500">{label}</p>
                        <p className="font-medium text-gray-900">{value}</p>
                    </div>
            </div>
        </li>
    )
}