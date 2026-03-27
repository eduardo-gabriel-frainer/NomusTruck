export default function CardMenu({ name, description, price }) {
    return (
        <div className="bg-white border border-black rounded-xl w-56 p-3">

            <h2 className="font-bold text-sm">
                {name}
            </h2>

            <p className="text-xs text-gray-600 mt-1">
                {description}
            </p>

            <p className="font-bold text-lg mt-2">
                {price}
            </p>

        </div>
    )
}