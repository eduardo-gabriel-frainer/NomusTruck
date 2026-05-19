
'use-client'
export default function CardMenu({ name, description, price, subPrice, icone }) {
    return (
        <div className="bg-white border border-gray-300 rounded-xl w-full p-6 flex flex-col justify-between">

            <div>
                <h2 className="font-bold text-sm text-black">
                    {name}
                </h2>

            </div>

            <p className="text-xs text-gray-600 mt-1">
                {description}
            </p>

            <p className="font-bold text-lg mt-2 text-black">
                R$ {price?.toFixed(2)}
            </p>

            <p className="text-sm">
                {subPrice}
            </p>

        </div>
    )
}