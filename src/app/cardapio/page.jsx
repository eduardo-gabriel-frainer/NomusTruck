"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";

import { useProdutoStore } from "../../store/useProdutoStore";
import { TabSwitcher } from "../../components/cardapio/TabSwitcher";
import { InventorySection } from "../../components/cardapio/InventorySection";
import { ProductSection } from "../../components/cardapio/ProductSection";
import { CardapioModal } from "../../components/cardapio/CardapioModal";

export default function Home() {
  const [abaAtiva, setAbaAtiva] = useState("insumos");
  const [abrirModal, setAbrirModal] = useState(false);

  const {
    insumos,
    produtos,
    adicionarProduto,
    removerProduto,
    adicionarInsumo,
    removerInsumo,
    alterarQuantidadeInsumo
  } = useProdutoStore();

  const [nomeInsumo, setNomeInsumo] = useState("");
  const [unidadeMedida, setUnidadeMedida] = useState("");
  const [quantidadeEstoque, setQuantidadeEstoque] = useState("");
  const [estoqueMinimo, setEstoqueMinimo] = useState("");

  const [nomeProduto, setNomeProduto] = useState("");
  const [precoProduto, setPrecoProduto] = useState("");
  const [descricaoProduto, setDescricaoProduto] = useState("");
  const [insumosDoNovoProduto, setInsumosDoNovoProduto] = useState([]);
  
  const [tipoProduto, setTipoProduto] = useState("PRODUZIDO");
  const [quantidadeEstoqueProduto, setQuantidadeEstoqueProduto] = useState("");

  const [mostrarToast, setMostrarToast] = useState(false);
  const [mensagemToast, setMensagemToast] = useState("");

  function abrirModalDeCadastro() {
    limparCamposInsumo();
    limparCamposProduto();
    setAbrirModal(true);
  }

  function limparCamposInsumo() {
    setNomeInsumo("");
    setUnidadeMedida("");
    setQuantidadeEstoque("");
    setEstoqueMinimo("");
  }

  function limparCamposProduto() {
    setNomeProduto("");
    setPrecoProduto("");
    setDescricaoProduto("");
    setInsumosDoNovoProduto([]);
    setTipoProduto("PRODUZIDO");
    setQuantidadeEstoqueProduto("");
  }

  function dispararToast(mensagem) {
    setMensagemToast(mensagem);
    setMostrarToast(true);
    setTimeout(() => {
      setMostrarToast(false);
    }, 3000);
  }

  function cadastrarInsumo() {
    if (!nomeInsumo || !unidadeMedida || !quantidadeEstoque || !estoqueMinimo) {
      alert("Preencha todos os campos do insumo");
      return;
    }

    adicionarInsumo({
      id: Date.now(),
      nome: nomeInsumo,
      unidade: unidadeMedida,
      quantidade: Number(quantidadeEstoque),
      minimo: Number(estoqueMinimo)
    });

    limparCamposInsumo();
    setAbrirModal(false);
    
    dispararToast("Insumo cadastrado com sucesso!");
  }

  function cadastrarProduto() {
    if (!nomeProduto || !precoProduto) {
      alert("Preencha o nome e o preço do produto");
      return;
    }
    if (tipoProduto === "REVENDA" && !quantidadeEstoqueProduto) {
      alert("Preencha a quantidade em estoque para produtos de revenda");
      return;
    }

    adicionarProduto({
      id: Date.now(),
      nome: nomeProduto,
      description: descricaoProduto,
      price: Number(precoProduto),
      tipo: tipoProduto, 
      estoque: tipoProduto === "REVENDA" ? Number(quantidadeEstoqueProduto) : 0, 
      insumosUtilizados: tipoProduto === "PRODUZIDO" ? insumosDoNovoProduto.filter((ins) => ins.insumoId !== "") : []
    });

    limparCamposProduto();
    setAbrirModal(false);

    dispararToast("Produto cadastrado com sucesso!");
  }

  function removerInsumoConfirmado(id) {
    if (confirm("Tem certeza que deseja excluir este insumo?")) {
      removerInsumo(id);
    }
  }

  function excluirProduto(id) {
    if (confirm("Tem certeza que deseja excluir este produto?")) {
      removerProduto(id);
    }
  }

  function adicionarLinhaDeInsumoNoProduto() {
    const primeiroInsumoDisponivel = insumos[0]?.id || "";

    setInsumosDoNovoProduto((current) => [
      ...current,
      {
        insumoId: primeiroInsumoDisponivel,
        quantidadeNecessaria: 1
      }
    ]);
  }

  function atualizarLinhaDeInsumo(index, campo, valor) {
    setInsumosDoNovoProduto((current) => {
      const novo = [...current];
      novo[index] = {
        ...novo[index],
        [campo]: campo === "insumoId" ? valor : Number(valor)
      };
      return novo;
    });
  }

  function removerLinhaDeInsumo(index) {
    setInsumosDoNovoProduto((current) => current.filter((_, i) => i !== index));
  }

  return (
    <main className="min-h-screen bg-[#f8f9fa] p-6 font-sans relative">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#111827]">Produtos</h1>
        <p className="mt-1 text-sm text-gray-500">Gerencie produtos e insumos do food truck</p>
      </div>

      <div className="mb-8 flex items-center justify-between">
        <TabSwitcher abaAtiva={abaAtiva} onChange={setAbaAtiva} />

        <button
          type="button"
          onClick={abrirModalDeCadastro}
          className="flex items-center gap-2 rounded-xl bg-[#05051a] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          <Plus size={18} />
          {abaAtiva === "produtos" ? "Novo Produto" : "Novo Insumo"}
        </button>
      </div>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-[#111827]">
            {abaAtiva === "produtos" ? "Produtos Cadastrados" : "Insumos Cadastrados"} (
            {abaAtiva === "produtos" ? produtos.length : insumos.length})
          </h2>
          <p className="text-sm text-gray-500">
            {abaAtiva === "produtos"
              ? "Produtos disponíveis no cardápio"
              : "Insumos disponíveis no estoque"}
          </p>
        </div>

        {abaAtiva === "insumos" ? (
          <InventorySection
            insumos={insumos}
            onAlterarQuantidade={alterarQuantidadeInsumo}
            onRemoverInsumo={removerInsumoConfirmado}
          />
        ) : (
          <ProductSection
            produtos={produtos}
            insumos={insumos}
            onExcluirProduto={excluirProduto}
          />
        )}
      </section>

      {abrirModal && (
        <CardapioModal
          abaAtiva={abaAtiva}
          insumos={insumos}
          insumosDoNovoProduto={insumosDoNovoProduto}
          nomeInsumo={nomeInsumo}
          unidadeMedida={unidadeMedida}
          quantidadeEstoque={quantidadeEstoque}
          estoqueMinimo={estoqueMinimo}
          nomeProduto={nomeProduto}
          precoProduto={precoProduto}
          descricaoProduto={descricaoProduto}
          onClose={() => setAbrirModal(false)}
          onChangeNomeInsumo={setNomeInsumo}
          onChangeUnidadeMedida={setUnidadeMedida}
          onChangeQuantidadeEstoque={setQuantidadeEstoque}
          onChangeEstoqueMinimo={setEstoqueMinimo}
          onSaveInsumo={cadastrarInsumo}
          onChangeNomeProduto={setNomeProduto}
          onChangePrecoProduto={setPrecoProduto}
          onChangeDescricaoProduto={setDescricaoProduto}
          onAddInsumoLine={adicionarLinhaDeInsumoNoProduto}
          onUpdateInsumoLine={atualizarLinhaDeInsumo}
          onRemoveInsumoLine={removerLinhaDeInsumo}
          onSaveProduto={cadastrarProduto}
          tipoProduto={tipoProduto}
          onChangeTipoProduto={setTipoProduto}
          quantidadeEstoqueProduto={quantidadeEstoqueProduto}
          onChangeQuantidadeEstoqueProduto={setQuantidadeEstoqueProduto}
        />
      )}

      {mostrarToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4 bg-emerald-50 border border-emerald-200 rounded-2xl px-5 py-4 min-w-[280px] shadow-xl animate-fade-in transition-all">
          <FaCheckCircle className="text-emerald-600 flex-shrink-0" size={22} />
          <div>
            <p className="text-base font-semibold text-emerald-900 leading-tight">Sucesso!</p>
            <p className="text-sm text-emerald-700/80 mt-0.5">{mensagemToast}</p>
          </div>
        </div>
      )}
    </main>
  );
}