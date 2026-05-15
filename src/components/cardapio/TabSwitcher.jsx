"use client";

export function TabSwitcher({ abaAtiva, onChange }) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div className="flex w-[280px] rounded-2xl bg-[#e5e5ea] p-1">
        <button
          type="button"
          onClick={() => onChange("produtos")}
          className={`flex-1 rounded-2xl py-2 text-sm font-semibold transition-all ${
            abaAtiva === "produtos"
              ? "bg-white text-black shadow-sm"
              : "text-gray-600"
          }`}
        >
          Produtos
        </button>

        <button
          type="button"
          onClick={() => onChange("insumos")}
          className={`flex-1 rounded-2xl py-2 text-sm font-semibold transition-all ${
            abaAtiva === "insumos"
              ? "bg-white text-black shadow-sm"
              : "text-gray-600"
          }`}
        >
          Insumos
        </button>
      </div>
    </div>
  );
}
