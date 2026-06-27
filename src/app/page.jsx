
import CardText from "../components/CardText";
import Card from "../components/Card";

import {
  DollarSign,
  ShoppingCart,
  Package,
  AlertTriangle,
  TrendingUp,
  CreditCard
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] px-4 md:px-8 lg:px-10 py-8">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

        <div>
          <h1 className="font-bold text-3xl text-black mt-2">
            Bem-vindo, Sr. Elpidio
          </h1>

          <p className="text-gray-500 mt-2 text-sm">
            Aqui está um resumo completo do desempenho do seu food truck hoje.
          </p>
        </div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        <Card
          name="Total de Vendas"
          price={12480}
          subPrice="Acumulado total"
          icone={DollarSign}
        />

        <Card
          name="Pedidos"
          price={184}
          subPrice="Pedidos realizados hoje"
          icone={ShoppingCart}
        />

        <Card
          name="Produtos Ativos"
          price={32}
          subPrice="Produtos disponíveis"
          icone={Package}
        />

        <Card
          name="Estoque Baixo"
          price={6}
          subPrice="Produtos com estoque < 10"
          icone={AlertTriangle}
        />
      </div>

      {/* GRID PRINCIPAL */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-6">

        {/* FORMAS DE PAGAMENTO */}
        <div className="xl:col-span-2 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-bold text-lg text-black">
                Formas de Pagamento
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Métodos mais utilizados pelos clientes
              </p>
            </div>

            <div className="bg-gray-100 p-3 rounded-xl">
              <CreditCard size={18} />
            </div>
          </div>

          <div className="space-y-6">

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold">
                  Cartão de Crédito
                </span>

                <span className="text-sm text-gray-500">
                  58%
                </span>
              </div>

              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-black h-2 rounded-full w-[58%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold">
                  PIX
                </span>

                <span className="text-sm text-gray-500">
                  29%
                </span>
              </div>

              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-gray-700 h-2 rounded-full w-[29%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold">
                  Dinheiro
                </span>

                <span className="text-sm text-gray-500">
                  9%
                </span>
              </div>

              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-gray-500 h-2 rounded-full w-[9%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold">
                  Débito
                </span>

                <span className="text-sm text-gray-500">
                  4%
                </span>
              </div>

              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-gray-400 h-2 rounded-full w-[4%]"></div>
              </div>
            </div>

          </div>
        </div>

        {/* RESUMO RÁPIDO */}
        <div className="bg-gray-800 text-white rounded-2xl p-6 shadow-sm flex flex-col justify-between">

          <div>
            <span className="text-xs uppercase">
              Performance
            </span>

            <h2 className="text-2xl font-bold mt-3">
              Excelente desempenho
            </h2>

            <p className="text-sm mt-3 leading-relaxed">
              Seu food truck apresentou crescimento constante durante a semana,
              com aumento nas vendas via PIX e cartão.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">

            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-xs text-gray-500">
                Ticket Médio
              </p>

              <h3 className="font-bold text-xl mt-2">
                R$ 32
              </h3>
            </div>

            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-xs text-gray-500">
                Clientes
              </p>

              <h3 className="font-bold text-xl mt-2">
                148
              </h3>
            </div>

          </div>
        </div>
      </div>

      {/* PRODUTOS */}
      <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-bold text-lg">
              Produtos Mais Vendidos
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Ranking dos produtos com maior saída
            </p>
          </div>

          <button className="text-sm font-semibold bg-black text-white px-4 py-2 rounded-xl hover:opacity-90 transition-all">
            Ver relatório
          </button>
        </div>

        <div className="space-y-4">

          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div className="flex items-center gap-4">
              <span className="text-gray-500 font-bold">
                01
              </span>

              <div>
                <h3 className="font-semibold text-sm">
                  X-Burger Especial
                </h3>

                <p className="text-xs text-gray-500">
                  Maior volume de vendas
                </p>
              </div>
            </div>

            <span className="bg-gray-100 px-4 py-2 rounded-xl text-sm font-bold">
              43 un.
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div className="flex items-center gap-4">
              <span className="text-gray-500 font-bold">
                02
              </span>

              <div>
                <h3 className="font-semibold text-sm">
                  Combo Duplo
                </h3>

                <p className="text-xs text-gray-500">
                  Produto em alta
                </p>
              </div>
            </div>

            <span className="bg-gray-100 px-4 py-2 rounded-xl text-sm font-bold">
              37 un.
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-gray-500 font-bold">
                03
              </span>

              <div>
                <h3 className="font-semibold text-sm">
                  Refrigerante Lata
                </h3>

                <p className="text-xs text-gray-500">
                  Alta recorrência
                </p>
              </div>
            </div>

            <span className="bg-gray-100 px-4 py-2 rounded-xl text-sm font-bold">
              29 un.
            </span>
          </div>

        </div>
      </div>

    </div>
  );
}