import React from 'react'

function Suggest({ info }) {

    if (!info) return null;

    const suggestions = [
        { icon: '/umbrella.svg', title: 'Umbrella', subtitle: 'Optional' },
        { icon: '/clothing.svg', title: 'Clothing', subtitle: 'More Layered' },
        { icon: '/driving.svg', title: 'Driving', subtitle: 'Enjoy Driving' },
        { icon: '/sunscreen.svg', title: 'Sunscreen', subtitle: 'Apply' },
    ];

    return (
        <div className="h-full flex flex-col justify-between">

            {/* Header */}
            <div className="flex justify-between items-center border-b border-gray-600 pb-2 mb-3">

                <div>
                    <p className="font-bold text-lg">
                        Suggestions
                    </p>
                    <p className="text-sm text-blue-400">
                        {info.city}, {info.country}
                    </p>
                </div>

                <div className="text-right">
                    <p className="text-sm text-gray-400">
                        Today
                    </p>
                    <p className="font-bold text-lg">
                        {new Date().toLocaleDateString()}
                    </p>
                </div>

            </div>

            {/* Suggestions Grid */}
            <div className="grid grid-cols-2 gap-3 flex-1">

                {suggestions.map(({ icon, title, subtitle }, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-center"
                    >
                        <img src={icon} alt={title} className="h-10 mb-2" />

                        <p className="font-semibold text-sm">
                            {title}
                        </p>

                        <p className="text-xs text-blue-300 mt-1">
                            {subtitle}
                        </p>
                    </div>
                ))}

            </div>

        </div>
    );
}

export default Suggest;