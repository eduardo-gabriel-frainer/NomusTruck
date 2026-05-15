"use client";

import { Pencil, Trash2 } from "lucide-react";

function formatPrice(value) {
  return `R$ ${value?.toFixed(2) ?? "0.00"}`;
}

export function ProductSection({ produtos, insumos, onExcluirProduto }) {
  if (produtos.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-[#fafafa]">
        <p className="text-sm text-gray-400">Nenhum produto cadastrado</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {produtos.map((produto) => (
        <div
          key={produto.id}
          className="flex items-center justify-between rounded-xl border border-gray-100 p-4 hover:bg-gray-50 transition-colors"
        >
          <div className="flex-1">
            <h3 className="text-base font-bold text-[#111827]">{produto.nome}</h3>
            <p className="mt-1 text-sm text-gray-500">{produto.description}</p>

            <div className="mt-2 flex flex-wrap gap-2">
              {produto.insumosUtilizados?.map((ins, idx) => {
                const original = insumos.find((item) => item.id === ins.insumoId);

                return (
                  <span
                    key={idx}
                    className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800"
                  >
                    {original
                      ? `${original.nome} (${ins.quantidadeNecessaria}${original.unidade})`
                      : "Insumo removido"}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="mr-6 flex items-center gap-8">
            <div className="min-w-[80px] text-right">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                Preço de Venda
              </p>
              <p className="text-base font-bold text-emerald-600">{formatPrice(produto.price)}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100"
            >
              <Pencil size={18} />
            </button>

            <button
              type="button"
              onClick={() => onExcluirProduto(produto.id)}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#d31c3e] text-white hover:bg-red-700"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
