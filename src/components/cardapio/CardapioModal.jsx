"use client";

import { Plus, Save, X } from "lucide-react";

export function CardapioModal({
    abaAtiva,
    idSendoEditado,
    insumos,
    insumosDoNovoProduto,
    nomeInsumo,
    unidadeMedida,
    quantidadeEstoque,
    estoqueMinimo,
    nomeProduto,
    precoProduto,
    descricaoProduto,
    quantidadeEstoqueProduto,
    onClose,
    onChangeNomeInsumo,
    onChangeUnidadeMedida,
    onChangeQuantidadeEstoque,
    onChangeEstoqueMinimo,
    onSaveInsumo,
    onChangeNomeProduto,
    onChangePrecoProduto,
    onChangeDescricaoProduto,
    onChangeQuantidadeEstoqueProduto,
    onAddInsumoLine,
    onUpdateInsumoLine,
    onRemoveInsumoLine,
    onSaveProduto,
    tipoProduto = "PRODUZIDO",
    onChangeTipoProduto
}) {

    const handleTipoChange = (valor) => {
        if (onChangeTipoProduto) onChangeTipoProduto(valor);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
            <div className="max-h-[85vh] w-full max-w-[550px] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
                <div className="mb-5 flex items-start justify-between">
                    <h2 className="text-xl font-bold text-[#111827]">
                        {abaAtiva === "produtos" 
                            ? (idSendoEditado ? "Editar Produto" : "Novo Produto") 
                            : (idSendoEditado ? "Editar Insumo" : "Novo Insumo")}
                    </h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-black">
                        <X size={20} />
                    </button>
                </div>

                {abaAtiva === "insumos" ? (
                    <div className="space-y-4">
                        <div>
                            <label className="text-xs font-bold uppercase text-gray-600">Nome do Insumo</label>
                            <input
                                placeholder="Ex: Alface"
                                value={nomeInsumo}
                                onChange={(e) => onChangeNomeInsumo(e.target.value)}
                                className="mt-1 w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-black"
                            />
                        </div>

                        <div>
                            <label className="text-xs font-bold uppercase text-gray-600">Unidade de Medida</label>
                            <input
                                placeholder="Ex: kg, un, fatia"
                                value={unidadeMedida}
                                onChange={(e) => onChangeUnidadeMedida(e.target.value)}
                                className="mt-1 w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-black"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-xs font-bold uppercase text-gray-600">Estoque Inicial</label>
                                <input
                                    type="number"
                                    min="0"
                                    placeholder="0"
                                    value={quantidadeEstoque}
                                    onChange={(e) => onChangeQuantidadeEstoque(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (["-", "+", "e", "E"].includes(e.key)) {
                                            e.preventDefault();
                                        }
                                    }}
                                    className="mt-1 w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-black"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-bold uppercase text-gray-600">Mínimo Crítico</label>
                                <input
                                    type="number"
                                    min="0"
                                    placeholder="0"
                                    value={estoqueMinimo}
                                    onKeyDown={(e) => {
                                        if (["-", "+", "e", "E"].includes(e.key)) {
                                            e.preventDefault();
                                        }
                                    }}
                                    onChange={(e) => onChangeEstoqueMinimo(e.target.value)}
                                    className="mt-1 w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-black"
                                />
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={onSaveInsumo}
                            className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#05051a] py-3 font-semibold text-white"
                        >
                            <Save size={18} />
                            Salvar Insumo
                        </button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div>
                            <label className="text-xs font-bold uppercase text-gray-600">Nome do Produto</label>
                            <input
                                placeholder="Ex: Burger Bacon Duplo"
                                value={nomeProduto}
                                onChange={(e) => onChangeNomeProduto(e.target.value)}
                                className="mt-1 w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-black"
                            />
                        </div>

                        <div>
                            <label className="text-xs font-bold uppercase text-gray-600">Descrição</label>
                            <textarea
                                placeholder="Descrição do produto"
                                value={descricaoProduto}
                                onChange={(e) => onChangeDescricaoProduto(e.target.value)}
                                className="mt-1 h-[90px] w-full resize-none rounded-xl border border-gray-300 p-3 outline-none focus:border-black"
                            />
                        </div>

                        <div>
                            <label className="text-xs font-bold uppercase text-gray-600">Preço de Venda (R$)</label>
                            <input
                                type="number"
                                step="0.01"
                                placeholder="0.00"
                                value={precoProduto}
                                onChange={(e) => onChangePrecoProduto(e.target.value)}
                                className="mt-1 w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-black"
                            />
                        </div>

                        <div>
                            <label className="text-xs font-bold uppercase text-gray-600">Tipo de Produto *</label>
                            <select
                                value={tipoProduto}
                                onChange={(e) => handleTipoChange(e.target.value)}
                                className="mt-1 w-full rounded-xl border border-gray-300 bg-white p-3 text-sm outline-none focus:border-black"
                            >
                                <option value="REVENDA">REVENDA (estoque próprio)</option>
                                <option value="PRODUZIDO">PRODUZIDO (usa insumos)</option>
                            </select>
                        </div>

                        {tipoProduto === "REVENDA" ? (
                            <div>
                                <label className="text-xs font-bold uppercase text-gray-600">Quantidade em Estoque *</label>
                                <input
                                    type="number"
                                    min="0"
                                    placeholder="0"
                                    value={quantidadeEstoqueProduto}
                                    onChange={(e) => onChangeQuantidadeEstoqueProduto(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (["-", "+", "e", "E"].includes(e.key)) {
                                            e.preventDefault();
                                        }
                                    }}
                                    className="mt-1 w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-black"
                                />
                            </div>
                        ) : (
                            <div className="border-t border-gray-100 pt-4">
                                <div className="mb-2 flex items-center justify-between">
                                    <label className="text-xs font-bold uppercase text-gray-600">
                                        Insumos Necessários / Receita
                                    </label>
                                    <button
                                        type="button"
                                        onClick={onAddInsumoLine}
                                        className="flex items-center gap-1 text-xs font-bold"
                                    >
                                        <Plus size={14} />
                                        Adicionar Insumo
                                    </button>
                                </div>

                                {insumosDoNovoProduto.length === 0 ? (
                                    <p className="rounded-lg bg-gray-50 p-3 text-center text-xs italic text-gray-400">
                                        Nenhum insumo atrelado a este produto ainda.
                                    </p>
                                ) : (
                                    <div className="max-h-[180px] space-y-2 overflow-y-auto pr-1">
                                        {insumosDoNovoProduto.map((item, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <select
                                                    value={item.insumoId}
                                                    onChange={(e) => onUpdateInsumoLine(index, "insumoId", e.target.value)}
                                                    className="flex-1 rounded-xl border border-gray-300 bg-white p-2 text-sm outline-none focus:border-black"
                                                >
                                                    <option value="" disabled>
                                                        Selecione um insumo...
                                                    </option>
                                                    {insumos.map((ins) => (
                                                        <option key={ins.id} value={ins.id}>
                                                            {ins.nome} ({ins.unidade})
                                                        </option>
                                                    ))}
                                                </select>

                                                <input
                                                    type="number"
                                                    placeholder="Qtd"
                                                    min="1"
                                                    value={item.quantidadeNecessaria}
                                                    onChange={(e) => onUpdateInsumoLine(index, "quantidadeNecessaria", e.target.value)}
                                                    className="w-20 rounded-xl border border-gray-300 p-2 text-center text-sm outline-none focus:border-black"
                                                />

                                                <button
                                                    type="button"
                                                    onClick={() => onRemoveInsumoLine(index)}
                                                    className="p-1 text-gray-400 hover:text-red-500"
                                                >
                                                    <X size={18} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        <button
                            type="button"
                            onClick={onSaveProduto}
                            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#05051a] py-3 font-semibold text-white"
                        >
                            <Save size={18} />
                            Salvar Produto
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}