
export default function Relatorios() {
  return (
    <div className="p-8 bg-[#f8f9fa] min-h-screen text-black font-sans">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold">Relatórios</h1>
          <p className="text-gray-400 text-sm">
            Análise de vendas e desempenho
          </p>
        </div>

        <div className="flex flex-col items-end">
          <span className="text-[10px] font-bold text-gray-500 uppercase mb-1">
            Período
          </span>

          <select className="bg-gray-100 border-none rounded-lg text-sm p-2 outline-none">
            <option>Este Mês</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm relative text-left">
          <span className="absolute top-6 right-6 text-gray-400 text-xs">
            $
          </span>

          <p className="text-gray-600 text-[13px] font-semibold mb-4">
            Total de Vendas
          </p>

          <h2 className="text-2xl font-bold">R$ 7.500,00</h2>

          <p className="text-gray-400 text-[11px] mt-1">
            Vendas do mês
          </p>
        </div>

        <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm relative text-left">
          <span className="absolute top-6 right-6 text-gray-400 text-xs">
            💳
          </span>

          <p className="text-gray-600 text-[13px] font-semibold mb-4">
            Pedidos
          </p>

          <h2 className="text-2xl font-bold">134</h2>

          <p className="text-gray-400 text-[11px] mt-1">
            Pedidos no período
          </p>
        </div>

        <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm relative text-left">
          <span className="absolute top-6 right-6 text-gray-400 text-xs">
            📈
          </span>

          <p className="text-gray-600 text-[13px] font-semibold mb-4">
            Ticket Médio
          </p>

          <h2 className="text-2xl font-bold">R$ 29,90</h2>

          <p className="text-gray-400 text-[11px] mt-1">
            Valor médio por pedido
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
          <h3 className="text-[15px] font-bold text-left">
            Formas de Pagamento
          </h3>

          <p className="text-gray-400 text-[12px] mb-8 text-left">
            Distribuição por método de pagamento
          </p>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between items-center mb-2 uppercase text-[12px] font-semibold">
                <span className="text-gray-600 flex items-center gap-2">
                  <span>💳</span>
                  Cartão de Crédito
                </span>

                <span className="text-gray-800">
                  R$ 4.320,00 • 58%
                </span>
              </div>

              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <div className="bg-black h-full rounded-full w-[58%]"></div>
              </div>

              <p className="text-[11px] text-gray-400 mt-1 text-left">
                73 pedidos aprovados
              </p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2 uppercase text-[12px] font-semibold">
                <span className="text-gray-600 flex items-center gap-2">
                  <span>📱</span>
                  PIX
                </span>

                <span className="text-gray-800">
                  R$ 2.140,00 • 29%
                </span>
              </div>

              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <div className="bg-gray-700 h-full rounded-full w-[29%]"></div>
              </div>

              <p className="text-[11px] text-gray-400 mt-1 text-left">
                41 pagamentos instantâneos
              </p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2 uppercase text-[12px] font-semibold">
                <span className="text-gray-600 flex items-center gap-2">
                  <span>💵</span>
                  Dinheiro
                </span>

                <span className="text-gray-800">
                  R$ 690,00 • 9%
                </span>
              </div>

              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <div className="bg-gray-500 h-full rounded-full w-[9%]"></div>
              </div>

              <p className="text-[11px] text-gray-400 mt-1 text-left">
                14 pagamentos presenciais
              </p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2 uppercase text-[12px] font-semibold">
                <span className="text-gray-600 flex items-center gap-2">
                  <span>🏦</span>
                  Débito
                </span>

                <span className="text-gray-800">
                  R$ 350,00 • 4%
                </span>
              </div>

              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <div className="bg-gray-400 h-full rounded-full w-[4%]"></div>
              </div>

              <p className="text-[11px] text-gray-400 mt-1 text-left">
                6 transações concluídas
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div className="text-left">
              <h3 className="text-[15px] font-bold">
                Vendas por Dia
              </h3>

              <p className="text-gray-400 text-[12px]">
                Evolução diária das vendas
              </p>
            </div>

            <div className="text-right">
              <p className="text-[11px] text-gray-400 uppercase">
                Crescimento
              </p>

              <span className="text-sm font-bold text-black">
                +18%
              </span>
            </div>
          </div>

          <div className="flex items-end justify-between gap-3 h-52">
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="bg-gray-200 hover:bg-black transition-all rounded-md w-full h-16"></div>
              <span className="text-[11px] text-gray-400">Seg</span>
            </div>

            <div className="flex flex-col items-center gap-2 w-full">
              <div className="bg-gray-300 hover:bg-black transition-all rounded-md w-full h-24"></div>
              <span className="text-[11px] text-gray-400">Ter</span>
            </div>

            <div className="flex flex-col items-center gap-2 w-full">
              <div className="bg-gray-400 hover:bg-black transition-all rounded-md w-full h-32"></div>
              <span className="text-[11px] text-gray-400">Qua</span>
            </div>

            <div className="flex flex-col items-center gap-2 w-full">
              <div className="bg-black rounded-md w-full h-44"></div>
              <span className="text-[11px] text-gray-500 font-semibold">Qui</span>
            </div>

            <div className="flex flex-col items-center gap-2 w-full">
              <div className="bg-gray-500 hover:bg-black transition-all rounded-md w-full h-36"></div>
              <span className="text-[11px] text-gray-400">Sex</span>
            </div>

            <div className="flex flex-col items-center gap-2 w-full">
              <div className="bg-gray-300 hover:bg-black transition-all rounded-md w-full h-28"></div>
              <span className="text-[11px] text-gray-400">Sáb</span>
            </div>

            <div className="flex flex-col items-center gap-2 w-full">
              <div className="bg-gray-200 hover:bg-black transition-all rounded-md w-full h-20"></div>
              <span className="text-[11px] text-gray-400">Dom</span>
            </div>
          </div>

          <div className="flex justify-between mt-6 pt-4 border-t border-gray-100">
            <div>
              <p className="text-[11px] text-gray-400 uppercase">
                Melhor dia
              </p>

              <h4 className="text-sm font-bold mt-1">
                Quinta-feira
              </h4>
            </div>

            <div className="text-right">
              <p className="text-[11px] text-gray-400 uppercase">
                Total semanal
              </p>

              <h4 className="text-sm font-bold mt-1">
                R$ 12.480
              </h4>
            </div>
          </div>
        </div>


      </div>

      <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm w-full">
        <div className="text-left">
          <h3 className="text-[15px] font-bold">
            Produtos Mais Vendidos
          </h3>

          <p className="text-gray-400 text-[12px] mb-8">
            Top 10 produtos por quantidade vendida
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-gray-50 last:border-0">
            <div className="flex items-center gap-4">
              <span className="text-gray-300 font-bold text-sm">
                01
              </span>

              <span className="text-sm font-semibold text-gray-700">
                X-Dog Especial
              </span>
            </div>

            <span className="text-sm font-bold bg-gray-50 px-3 py-1 rounded-full">
              23 un.
            </span>
          </div>

          <div className="flex justify-between items-center pb-3 border-b border-gray-50 last:border-0">
            <div className="flex items-center gap-4">
              <span className="text-gray-300 font-bold text-sm">
                02
              </span>

              <span className="text-sm font-semibold text-gray-700">
                Combo Burger
              </span>
            </div>

            <span className="text-sm font-bold bg-gray-50 px-3 py-1 rounded-full">
              18 un.
            </span>
          </div>

          <div className="flex justify-between items-center pb-3 border-b border-gray-50 last:border-0">
            <div className="flex items-center gap-4">
              <span className="text-gray-300 font-bold text-sm">
                03
              </span>

              <span className="text-sm font-semibold text-gray-700">
                Refrigerante Lata
              </span>
            </div>

            <span className="text-sm font-bold bg-gray-50 px-3 py-1 rounded-full">
              15 un.
            </span>
          </div>

          <div className="flex justify-between items-center pb-3 border-b border-gray-50 last:border-0">
            <div className="flex items-center gap-4">
              <span className="text-gray-300 font-bold text-sm">
                04
              </span>

              <span className="text-sm font-semibold text-gray-700">
                Batata Suprema
              </span>
            </div>

            <span className="text-sm font-bold bg-gray-50 px-3 py-1 rounded-full">
              12 un.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
