"use client";

import { FaHome, FaListAlt, FaShoppingCart, FaChartBar, FaClock } from "react-icons/fa";

export default function Sidebar({ currentPage, onNavigate }) {
  const menuItems = [
    { id: "inicio", label: "Início", icon: <FaHome />, disabled: false },
    { id: "cardapio", label: "Cardápio", icon: <FaListAlt />, disabled: false },
    { id: "novo-pedido", label: "Novo Pedido", icon: <FaShoppingCart />, disabled: false },
    { id: "fila-pedidos", label: "Fila de Pedidos", icon: <FaClock />, disabled: true },
    { id: "relatorios", label: "Relatórios", icon: <FaChartBar />, disabled: true },
    { id: "historico", label: "Histórico", icon: <FaClock />, disabled: true },
  ];

  return (
    <nav className="w-64 bg-white border-r border-gray-300 h-screen p-6 flex flex-col">
      <div className="mb-10 flex items-center space-x-2 font-bold text-lg">
        <div className="w-6 h-6 border rounded flex items-center justify-center">🛒</div>
        <span>Sistema de Vendas</span>
      </div>

      <ul className="flex flex-col gap-3">
        {menuItems.map(({ id, label, icon, disabled }) => {
          const isActive = currentPage === id;
          return (
            <li
              key={id}
              className={`
                flex items-center gap-3 cursor-pointer rounded-md px-4 py-2
                ${isActive ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"}
                ${disabled ? "opacity-40 cursor-not-allowed" : ""}
              `}
              onClick={() => !disabled && onNavigate(id)}
              aria-disabled={disabled}
            >
              <span className="text-base">{icon}</span>
              <span className="text-sm font-medium">{label}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}