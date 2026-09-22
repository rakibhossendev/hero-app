export default function HeroBanner() {
    const stats = [
        { label: "Total Downloads", value: "29.6M", change: "21% more than last month" },
        { label: "Total Reviews", value: "906K", change: "46% more than last month" },
        { label: "Active Apps", value: "132+", change: "31 more will Launch" },
    ];

    return (
        <div className="py-8 mt-0 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Trusted by Millions, Built for You
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300"
                        >
                            <p className="text-purple-100 text-sm font-medium uppercase tracking-wide mb-2">
                                {stat.label}
                            </p>

                            <p className="text-4xl md:text-5xl font-extrabold text-white mb-3">
                                {stat.value}
                            </p>

                            <div className="inline-flex items-center gap-1 bg-green-400/20 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    className="w-3 h-3 fill-current"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L11 6.414V16a1 1 0 11-2 0V6.414L6.707 8.707a1 1 0 01-1.414-1.414l4-4A1 1 0 0110 3z"
                                        clipRule="evenodd"
                                    />
                                </svg>

                                {stat.change}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}