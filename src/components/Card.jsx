export default function CardMenu({ name, description, price }) {
    return (
        <div className="bg-white border border-gray-300 rounded-xl w-full p-3 flex flex-col justify-between">

            <h2 className="font-bold text-sm text-black">
                {name}
            </h2>

            <p className="text-xs text-gray-600 mt-1">
                {description}
            </p>

            <p className="font-bold text-lg mt-2 text-black">
                R$ {price.toFixed(2)}
            </p>

        </div>
    )
}