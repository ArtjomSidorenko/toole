type StatContainerProps = {
    value: string;
    label: string;
    className?: string;
}

export default function StatContainer({value, label, className}: StatContainerProps) {
    return (
        <div className={`w-[160px] h-[120px] bg-white flex flex-col justify-center items-center rounded-2xl ${className}`}>
            <h1 className="text-primary-blue font-bold text-[32px]">{value}</h1>
            <p className="capitalize text-gray-700">{label}</p>
        </div>
    )
}