'use client'

import { useState } from "react";
import CardMenu from "@/components/Card";

export default function Pedido() {
  const produtos = [
    { id: 1, name: "X-Bacon", description: "Hamburguer, bacon crocante, queijo", price: 15.9 },
    { id: 2, name: "X-Salada", description: "Hamburguer, alface, tomate, queijo", price: 14.9 },
    { id: 3, name: "X-Tudo", description: "Hamburguer, bacon, ovo, queijo, salada", price: 18.9 },
    { id: 4, name: "Batata Frita", description: "Porção média crocante", price: 10.0 },
    { id: 5, name: "Refrigerante", description: "Lata 350ml gelada", price: 6.0 },
    { id: 6, name: "Suco Natural", description: "Laranja ou maracujá", price: 8.5 },
  ];

  // Estado do pedido
  const [pedido, setPedido] = useState([]);

  // Função para adicionar item ao pedido
  const adicionarAoPedido = (produto) => {
    setPedido([...pedido, produto]);
  };

  // Função para remover item do pedido
  const removerDoPedido = (indexParaRemover) => {
    setPedido(pedido.filter((_, index) => index !== indexParaRemover));
  };

  // Calcula total
  const total = pedido.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-1 text-black">Novo Pedido 🍔</h1>
      <p className="text-gray-500 mb-6">Selecione os produtos do cardápio</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* CARDÁPIO */}
        <div className="md:col-span-2 border border-gray-300 rounded-xl p-4 bg-white">
          <h2 className="text-lg font-semibold mb-1 text-black">Cardápio</h2>
          <p className="text-sm text-gray-500 mb-4">
            Toque nos produtos para adicionar ao pedido
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {produtos.map((item) => (
              <div key={item.id} onClick={() => adicionarAoPedido(item)}>
                <CardMenu
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>

        {/* RESUMO DO PEDIDO */}
        <div className="border border-gray-300 rounded-xl p-4 h-fit bg-white">
          <h2 className="text-lg font-semibold mb-4 text-black">Resumo do Pedido</h2>

          {pedido.length === 0 ? (
            <p className="text-sm text-gray-500 text-center mb-4">Nenhum item adicionado</p>
          ) : (
            <ul className="mb-4">
              {pedido.map((item, index) => (
                <li key={index} className="flex justify-between items-center text-sm mb-2">
                  <div>
                    <span>{item.name}</span> - <span>R$ {item.price.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => removerDoPedido(index)}
                    className="bg-red-500 hover:bg-red-700 text-white text-xs px-2 py-1 rounded"
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>
          )}

          <hr className="mb-4" />

          <label className="text-sm font-medium">Nome do Cliente (opcional)</label>
          <input
            type="text"
            placeholder="Ex: João Silva"
            className="w-full border border-gray-300 rounded-md p-2 mt-1 mb-4 text-sm bg-white text-black"
          />

          <label className="text-sm font-medium">Forma de Pagamento</label>
          <select className="w-full border border-gray-300 rounded-md p-2 mt-1 mb-4 text-sm bg-white text-black">
            <option>Dinheiro</option>
            <option>Cartão</option>
            <option>Pix</option>
          </select>

          <div className="flex justify-between text-sm mb-1">
            <span>Itens</span>
            <span>{pedido.length}</span>
          </div>

          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>

          <button className="w-full bg-gray-400 hover:bg-gray-600 text-white py-2 rounded-lg transition-colors duration-200">
            Finalizar Pedido
          </button>
        </div>
      </div>
    </div>
  );
}