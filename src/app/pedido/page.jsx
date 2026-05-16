'use client'

import { useState } from "react";
import CardMenu from "../../components/Card";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa"; // Adicionei ícones de + e - para melhorar a UX

import { useProdutoStore } from "../../store/useProdutoStore";

export default function Pedido() {
  const { produtos } = useProdutoStore();
  const [pedido, setPedido] = useState([]);

  // Adiciona ou incrementa a quantidade do item
  const adicionarAoPedido = (produto) => {
    const itemExistente = pedido.find((item) => item.id === produto.id);

    if (itemExistente) {
      setPedido(
        pedido.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )
      );
    } else {
      setPedido([...pedido, { ...produto, quantidade: 1 }]);
    }
  };

  // Decrementa a quantidade ou remove se chegar a 0
  const diminuirQuantidade = (id) => {
    const itemExistente = pedido.find((item) => item.id === id);

    if (itemExistente.quantidade === 1) {
      removerDoPedido(id);
    } else {
      setPedido(
        pedido.map((item) =>
          item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
        )
      );
    }
  };

  // Remove o item completamente do carrinho, independente da quantidade
  const removerDoPedido = (id) => {
    setPedido(pedido.filter((item) => item.id !== id));
  };

  // Agora o cálculo leva em consideração a quantidade de cada item
  const total = pedido.reduce((acc, item) => acc + item.price * item.quantidade, 0);
  
  // Total de itens físicos no carrinho (soma das quantidades)
  const totalItens = pedido.reduce((acc, item) => acc + item.quantidade, 0);

  return (
    <div className="min-h-screen p-5 bg-[#f8f9fa]">
      <h1 className="text-4xl font-bold text-black mb-1">
        Novo Pedido
      </h1>

      <p className="text-gray-500 mb-8">
        Selecione os produtos do cardápio
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-6 items-start">

        {/* CARDÁPIO */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-black mb-1">
            Cardápio
          </h2>

          <p className="text-sm text-gray-500 mb-6">
            Toque nos produtos para adicionar ao pedido
          </p>

          {produtos.length === 0 ? (
            <div className="flex h-60 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-[#fafafa]">
              <p className="text-sm text-gray-400">
                Nenhum produto cadastrado no cardápio
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {produtos.map((item) => (
                <div
                  key={item.id}
                  onClick={() => adicionarAoPedido(item)}
                  className="cursor-pointer transition hover:scale-[1.01]"
                >
                  <CardMenu
                    name={item.nome}
                    description={
                      item.insumosUtilizados?.length > 0
                        ? `${item.insumosUtilizados.length} insumo(s) utilizados`
                        : "Sem descrição"
                    }
                    price={item.price}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RESUMO */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm sticky top-5">
          <h2 className="text-xl font-semibold text-black mb-5">
            Resumo do Pedido
          </h2>

          {pedido.length === 0 ? (
            <p className="text-sm text-gray-400 text-center mb-6">
              Nenhum item adicionado
            </p>
          ) : (
            <div className="space-y-3 mb-5 max-h-[350px] overflow-y-auto pr-1">
              {pedido.map((item) => (
                <div
                  key={item.id} // Mudamos de index para o id do produto, que é mais seguro
                  className="border border-gray-200 rounded-xl p-3 flex items-center justify-between"
                >
                  <div>
                    <p className="font-semibold text-sm text-black">
                      {item.nome}
                    </p>

                    {/* Exibe o contador aqui (Ex: 3x R$ 15.00) */}
                    <p className="text-xs text-gray-500">
                      {item.quantidade}x R$ {item?.price?.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Exibe o preço total acumulado desse item */}
                    <span className="font-bold text-black text-sm">
                      R$ {(item?.price * item.quantidade).toFixed(2)}
                    </span>

                    {/* Controles de quantidade (+ / - / lixeira) */}
                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                      <button
                        onClick={() => diminuirQuantidade(item.id)}
                        className="px-2 py-1 text-xs text-gray-600 hover:bg-gray-200 transition"
                        title="Diminuir"
                      >
                        <FaMinus size={10} />
                      </button>
                      
                      <button
                        onClick={() => adicionarAoPedido(item)}
                        className="px-2 py-1 text-xs text-gray-600 hover:bg-gray-200 border-l border-r border-gray-200 transition"
                        title="Aumentar"
                      >
                        <FaPlus size={10} />
                      </button>

                      <button
                        onClick={() => removerDoPedido(item.id)}
                        className="px-2 py-1 text-xs text-red-500 hover:bg-red-50 transition"
                        title="Remover tudo"
                      >
                        <FaTrashAlt size={10} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* INPUT */}
          <div className="mb-4">
            <label className="text-sm font-medium text-black block mb-2">
              Nome do Cliente (opcional)
            </label>

            <input
              type="text"
              placeholder="Ex: João Silva"
              className="w-full bg-gray-100 border border-gray-100 rounded-xl p-3 text-sm outline-none focus:border-gray-300"
            />
          </div>

          {/* SELECT */}
          <div className="mb-5">
            <label className="text-sm font-medium text-black block mb-2">
              Forma de Pagamento
            </label>

            <select className="w-full bg-gray-100 border border-gray-100 rounded-xl p-3 text-sm outline-none focus:border-gray-300 text-black">
              <option>💵 Dinheiro</option>
              <option>💳 Cartão</option>
              <option>📱 Pix</option>
            </select>
          </div>

          {/* TOTAL */}
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Itens</span>
            <span>{totalItens}</span>
          </div>

          <div className="flex justify-between items-center mb-6">
            <span className="text-2xl font-bold text-black">
              Total
            </span>

            <span className="text-3xl font-bold text-black">
              R$ {total.toFixed(2)}
            </span>
          </div>

          {/* BOTÃO */}
          <button
            disabled={pedido.length === 0}
            className="w-full bg-black hover:bg-neutral-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold transition"
          >
            Finalizar Pedido
          </button>
        </div>
      </div>
    </div>
  );
}