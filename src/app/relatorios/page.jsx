"use client";
import { useEffect, useState } from "react";

export default function Relatorios() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("pedidos")) || [];
    setPedidos(dados);
  }, []);

  const totalVendido = pedidos.reduce((acc, p) => acc + (p.total || 0), 0);
  const totalPedidos = pedidos.length;
  const ticketMedio = totalPedidos > 0 ? totalVendido / totalPedidos : 0;

  const pagamentos = {};
  pedidos.forEach((p) => {
    pagamentos[p.pagamento] = (pagamentos[p.pagamento] || 0) + 1;
  });

  const contagemProdutos = {};
  pedidos.forEach((p) => {
    p.itens?.forEach((item) => {
      const nomeProd = item.name || item.nome;
      contagemProdutos[nomeProd] = (contagemProdutos[nomeProd] || 0) + 1;
    });
  });


  const topProdutos = Object.entries(contagemProdutos)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  return (
    <div className="p-8 bg-[#fcfcfc] min-h-screen text-black font-sans">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold">Relatórios</h1>
          <p className="text-gray-400 text-sm">Análise de vendas e desempenho</p>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-bold text-gray-500 uppercase mb-1">Período</span>
          <select className="bg-gray-100 border-none rounded-lg text-sm p-2 outline-none">
            <option>Este Mês</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm relative text-left">
          <span className="absolute top-6 right-6 text-gray-400 text-xs">$</span>
          <p className="text-gray-600 text-[13px] font-semibold mb-4">Total de Vendas</p>
          <h2 className="text-2xl font-bold">R$ {totalVendido.toFixed(2).replace('.', ',')}</h2>
          <p className="text-gray-400 text-[11px] mt-1">Vendas do mês</p>
        </div>

        <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm relative text-left">
          <span className="absolute top-6 right-6 text-gray-400 text-xs">💳</span>
          <p className="text-gray-600 text-[13px] font-semibold mb-4">Pedidos</p>
          <h2 className="text-2xl font-bold">{totalPedidos}</h2>
          <p className="text-gray-400 text-[11px] mt-1">Pedidos no período</p>
        </div>

        <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm relative text-left">
          <span className="absolute top-6 right-6 text-gray-400 text-xs">📈</span>
          <p className="text-gray-600 text-[13px] font-semibold mb-4">Ticket Médio</p>
          <h2 className="text-2xl font-bold">R$ {ticketMedio.toFixed(2).replace('.', ',')}</h2>
          <p className="text-gray-400 text-[11px] mt-1">Valor médio por pedido</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
          <h3 className="text-[15px] font-bold text-left">Formas de Pagamento</h3>
          <p className="text-gray-400 text-[12px] mb-8 text-left">Distribuição por método de pagamento</p>
          {Object.keys(pagamentos).length === 0 ? (
            <p className="text-gray-400 text-sm py-10">Nenhum pedido registrado</p>
          ) : (
            <div className="space-y-4">
              {Object.entries(pagamentos).map(([tipo, qtd]) => (
                <div key={tipo} className="flex justify-between items-center pb-2 border-b border-gray-50 uppercase text-[12px] font-semibold">
                  <span className="text-gray-600">{tipo}</span>
                  <span>{qtd}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
          <h3 className="text-[15px] font-bold text-left">Vendas por Dia</h3>
          <p className="text-gray-400 text-[12px] mb-8 text-left">Evolução diária das vendas</p>
          <p className="text-gray-400 text-sm py-10">Nenhuma venda no período selecionado</p>
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm w-full">
        <div className="text-left">
          <h3 className="text-[15px] font-bold">Produtos Mais Vendidos</h3>
          <p className="text-gray-400 text-[12px] mb-8">Top 10 produtos por quantidade vendida</p>
        </div>

        {topProdutos.length === 0 ? (
          <div className="flex items-center justify-center py-20">
            <p className="text-gray-400 text-sm italic font-medium">Nenhuma venda no período selecionado</p>
          </div>
        ) : (
          <div className="space-y-4">
            {topProdutos.map(([nome, qtd], index) => (
              <div key={nome} className="flex justify-between items-center pb-3 border-b border-gray-50 last:border-0">
                <div className="flex items-center gap-4">
                  <span className="text-gray-300 font-bold text-sm">#{index + 1}</span>
                  <span className="text-sm font-semibold text-gray-700">{nome}</span>
                </div>
                <span className="text-sm font-bold bg-gray-50 px-3 py-1 rounded-full">{qtd} un.</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}