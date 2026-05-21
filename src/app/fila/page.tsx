'use client'

import { usePedidoStore } from "../../store/usePedidoStore";
import { FaClock, FaChalkboardTeacher, FaCheckCircle } from "react-icons/fa";

export default function FilaPedidos() {
  const { pedidosFila, alterarStatusPedido } = usePedidoStore();

  const aguardando = pedidosFila.filter(p => p.status === "AGUARDANDO");
  const preparando = pedidosFila.filter(p => p.status === "PREPARANDO");
  const prontos = pedidosFila.filter(p => p.status === "PRONTO");

  const colunas = [
    {
      titulo: "Aguardando",
      corTexto: "text-amber-500",
      border: "border border-amber-300",
      background: "bg-amber-50",
      idColor: "bg-amber-500",
      icone: <FaClock className="text-amber-500" size={16} />,
      lista: aguardando,
      mensagemVazia: "Nenhum pedido aguardando",
      proximoStatus: "PREPARANDO",
      textoBotao: "Começar a Preparar"
    },
    {
      titulo: "Preparando",
      corTexto: "text-blue-500",
      border: "border border-blue-300",
      background: "bg-blue-50",
      idColor: "bg-blue-500",
      icone: <FaChalkboardTeacher className="text-blue-500" size={16} />,
      lista: preparando,
      mensagemVazia: "Nenhum pedido em preparo",
      proximoStatus: "PRONTO",
      textoBotao: "Pronto para Entrega"
    },
    {
      titulo: "Prontos",
      corTexto: "text-emerald-500",
      border: "border border-emerald-300",
      background: "bg-emerald-50",
      idColor: "bg-emerald-500",
      icone: <FaCheckCircle className="text-emerald-500" size={16} />,
      lista: prontos,
      mensagemVazia: "Nenhum pedido pronto",
      proximoStatus: "FINALIZADO",
      textoBotao: "Entregar Pedido"
    }
  ];

  return (
    <div className="min-h-screen p-8 bg-[#f8f9fa]">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-1">
          Fila de Pedidos
        </h1>
        <p className="text-sm text-gray-500">
          Acompanhe e gerencie os pedidos em tempo real
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {colunas.map((col, idx) => (
          <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              {col.icone}
              <span className="font-semibold text-sm text-gray-700">{col.titulo}</span>
            </div>
            <p className="text-4xl font-bold text-black">{col.lista.length}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {colunas.map((col, idx) => (
          <div key={idx} className="flex flex-col gap-4">

            <div className="flex items-center gap-2 px-1">
              {col.icone}
              <h2 className="font-bold text-black">
                {col.titulo} ({col.lista.length})
              </h2>
            </div>

            {col.lista.length === 0 ? (
              <div className="flex h-32 items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white p-4">
                <p className="text-sm text-gray-400 font-medium">
                  {col.mensagemVazia}
                </p>
              </div>
            ) : (
              <div className={`flex flex-col gap-3 rounded-2xl`}>
                {col.lista.map((pedido) => (
                  <div
                    key={pedido.id}
                    className={`${col.background} ${col.border} rounded-2xl p-5 shadow-sm transition`}
                  >
                    <div className={`flex mb-2 `}>
                      <div className={`text-white mr-2 rounded-full px-2 ${col.idColor}`}>
                        {pedido.id}
                      </div>
                      {pedido.cliente || "Cliente Balcão"}
                    </div>

                    <div className="text-x mb-4 space-y-1">
                      {pedido.itens?.map((item, i) => (
                        <p key={i}>{item.quantidade}x {item.nome}</p>
                      ))}
                    </div>

                    <hr className="mt-2 border-gray-700" />

                    <div className="flex justify-between items-center mt-2">
                      <span>Total</span>
                      <span className="text-lg font-semibold">
                        R$ {pedido.total?.toFixed(2)}
                      </span>

                    </div>

                    <button
                      onClick={() => alterarStatusPedido(pedido.id, col.proximoStatus)}
                      className={`w-full py-3 mt-3 px-4 rounded-md text-xs font-semibold transition text-white bg-black hover:opacity-80`}
                    >
                      {col.textoBotao}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}