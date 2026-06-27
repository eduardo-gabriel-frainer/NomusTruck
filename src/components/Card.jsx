
'use-client'
export default function CardMenu({ name, description, price, subPrice, icone: Icone }) {

    const preco = price.toFixed(2)
    const precoString = String(preco).replace('.', ',')
    return (
        <div className="bg-white border border-gray-300 rounded-xl w-full p-6 flex flex-col justify-between">

            <div className="flex gap-6">
                <h2 className="font-bold text-sm text-black">
                    {name}
                </h2>

                {Icone && (
                    <Icone size={20}></Icone>
                )}
            </div>

            <p className="text-xs text-gray-600 mt-1">
                {description}
            </p>

            <p className="font-bold text-lg mt-2 text-black">
                R$ {precoString}
            </p>

            <p className="text-sm">
                {subPrice}
            </p>

        </div>
    )
}