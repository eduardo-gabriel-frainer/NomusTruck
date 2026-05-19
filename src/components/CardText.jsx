import { ShoppingCart } from 'lucide-react';
import { Package } from 'lucide-react';
import { TrendingUp } from 'lucide-react';

export default function CardText({ titulo, descricao, acoes, botoes }) {
    return (
        <div className="border border-gray-300 p-6 rounded-2xl w-full">
            <p className="font-bold">{titulo}</p>
            <p>{descricao}</p>
            <p className="mt-5 text-sm">{acoes}</p>

            {botoes && (
                <div className="flex gap-5">
                    <button className="flex gap-2 bg-black text-white py-2 px-3 rounded-lg text-sm hover:bg-gray-800">
                        <ShoppingCart size={20}></ShoppingCart>
                        Novo pedido
                    </button>
                    <button className="flex gap-2 border border-gray-300 py-2 px-3 rounded-lg text-sm">
                        <Package size={20}></Package>
                        Gerenciar Produtos
                    </button>
                    <button className="flex gap-2 border border-gray-300 py-2 px-3 rounded-lg text-sm">
                        <TrendingUp size={20}></TrendingUp>
                        Ver Relatórios
                        </button>
                </div>
            )}
        </div>
    )
}