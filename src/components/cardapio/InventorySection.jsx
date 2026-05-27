"use client";

import { Minus, Plus, Pencil, Trash2 } from "lucide-react";

export function InventorySection({ insumos, onAlterarQuantidade, onRemoverInsumo, onEditarInsumo }) {
  if (insumos.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-[#fafafa]">
        <p className="text-sm text-gray-400">Nenhum insumo cadastrado</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {insumos.map((insumo) => (
        <div
          key={insumo.id}
          className="flex items-center justify-between rounded-xl border border-gray-100 p-4 hover:bg-gray-50 transition-colors"
        >
          <div className="flex-1">
            <h3 className="text-base font-bold text-[#111827]">{insumo.nome}</h3>
            <p className="text-xs text-gray-400">Unidade: {insumo.unidade}</p>
          </div>

          <div className="mr-6 flex items-center gap-8">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onAlterarQuantidade(insumo.id, -1)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100"
              >
                <Minus size={16} />
              </button>

              <div className="min-w-[70px] text-center">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                  Estoque Atual
                </p>
                <p className="text-base font-bold text-black">
                  {insumo.quantidade} {insumo.unidade}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onAlterarQuantidade(insumo.id, 1)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                <Plus size={16} />
              </button>
            </div>

            <div className="min-w-[60px] text-center">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                Mínimo
              </p>
              <p className="text-base font-bold text-black">
                {insumo.minimo} {insumo.unidade}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onEditarInsumo(insumo)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 dynamic-edit-btn"
            >
              <Pencil size={18} />
            </button>

            <button
              type="button"
              onClick={() => onRemoverInsumo(insumo.id)}
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