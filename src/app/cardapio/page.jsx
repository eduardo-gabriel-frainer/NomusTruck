"use client";

import { useState } from "react";
import { Plus, X, Save } from "lucide-react";

export default function Home() {
  const [abaAtiva, setAbaAtiva] = useState("produtos");
  const [abrirModal, setAbrirModal] = useState(false);

  return (
    <main className="min-h-screen bg-[#f6f6f7] p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#111827]">Cardápio</h1>

        <p className="mt-1 text-sm text-gray-500">
          Gerencie produtos e insumos do food truck
        </p>
      </div>

      {/* TOGGLE */}
      <div className="flex items-center justify-between">
        <div className="flex w-[360px] rounded-2xl bg-[#e5e5ea] p-1">
          <button
            onClick={() => setAbaAtiva("produtos")}
            className={`flex-1 rounded-2xl py-2 text-sm font-semibold transition-all duration-200 ${
              abaAtiva === "produtos"
                ? "bg-white text-black shadow-sm"
                : "text-gray-600"
            }`}
          >
            Produtos
          </button>

          <button
            onClick={() => setAbaAtiva("insumos")}
            className={`flex-1 rounded-2xl py-2 text-sm font-semibold transition-all duration-200 ${
              abaAtiva === "insumos"
                ? "bg-white text-black shadow-sm"
                : "text-gray-600"
            }`}
          >
            Insumos
          </button>
        </div>

        {/* BOTÃO */}
        <button
          onClick={() => setAbrirModal(true)}
          className="flex items-center gap-2 rounded-xl bg-[#05051a] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          <Plus size={18} />
          {abaAtiva === "produtos" ? "Novo Produto" : "Novo Insumo"}
        </button>
      </div>

      {/* LISTAGEM */}
      <section className="mt-12 rounded-2xl border border-gray-200 bg-white p-6">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-[#111827]">
            {abaAtiva === "produtos"
              ? "Produtos Cadastrados"
              : "Insumos Cadastrados"}{" "}
            (0)
          </h2>

          <p className="text-sm text-gray-500">
            {abaAtiva === "produtos"
              ? "Produtos disponíveis no cardápio"
              : "Insumos disponíveis no estoque"}
          </p>
        </div>

        <div className="flex h-[400px] items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-[#fafafa]">
          <p className="text-sm text-gray-400">
            Nenhum {abaAtiva === "produtos" ? "produto" : "insumo"} cadastrado
          </p>
        </div>
      </section>

      {/* MODAL */}
      {abrirModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
          <div className="w-full max-w-[640px] rounded-2xl bg-white p-7 shadow-2xl">
            {/* HEADER */}
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h2 className="text-3xl font-bold text-[#111827]">
                  {abaAtiva === "produtos"
                    ? "Novo Produto"
                    : "Novo Insumo"}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {abaAtiva === "produtos"
                    ? "Cadastre um novo produto no cardápio"
                    : "Cadastre um novo insumo no estoque"}
                </p>
              </div>

              <button
                onClick={() => setAbrirModal(false)}
                className="text-gray-500 transition hover:text-black"
              >
                <X size={24} />
              </button>
            </div>

            {/* FORM */}
            <div className="space-y-5">
              {/* NOME */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#111827]">
                  {abaAtiva === "produtos"
                    ? "Nome do Produto *"
                    : "Nome do Insumo *"}
                </label>

                <input
                  type="text"
                  placeholder={
                    abaAtiva === "produtos"
                      ? "Ex: X-Burger Artesanal"
                      : "Ex: Pão de Hambúrguer"
                  }
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#05051a]"
                />
              </div>

              {/* UNIDADE */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#111827]">
                  Unidade de Medida *
                </label>

                <input
                  type="text"
                  placeholder="Ex: un, kg, ml, fatia, folha"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#05051a]"
                />
              </div>

              {/* CAMPOS DUPLOS */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#111827]">
                    Quantidade em Estoque
                  </label>

                  <input
                    type="number"
                    placeholder="0"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#05051a]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#111827]">
                    Estoque Mínimo
                  </label>

                  <input
                    type="number"
                    placeholder="0"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#05051a]"
                  />
                </div>
              </div>

              {/* BOTÕES */}
              <div className="flex items-center gap-4 pt-2">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#05051a] py-3 text-sm font-semibold text-white transition hover:opacity-90">
                  <Save size={18} />
                  Cadastrar
                </button>

                <button
                  onClick={() => setAbrirModal(false)}
                  className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-[#111827] transition hover:bg-gray-100"
                >
                  <X size={18} />
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}