"use client";

import { FaHome, FaListAlt, FaShoppingCart, FaChartBar, FaClock } from "react-icons/fa";
import Link from "next/link"; 

export default function Sidebar({ currentPage }) {
  const menuItems = [
    { id: "inicio", label: "Início", icon: <FaHome />, href: "/", disabled: false },
    { id: "cardapio", label: "Cardápio", icon: <FaListAlt />, href: "/cardapio", disabled: false },
    { id: "novo-pedido", label: "Novo Pedido", icon: <FaShoppingCart />, href: "/pedido", disabled: false },
    { id: "fila-pedidos", label: "Fila de Pedidos", icon: <FaClock />, href: "/fila", disabled: false },
    { id: "relatorios", label: "Relatórios", icon: <FaChartBar />, href: "/relatorios", disabled: false },
    { id: "historico", label: "Histórico", icon: <FaClock />, href: "#", disabled: true },
  ];

  return (
    <nav className="w-64 bg-white border-r border-gray-300 h-screen p-6 flex flex-col">
      <ul className="flex flex-col gap-3">
        {menuItems.map(({ id, label, icon, href, disabled }) => {
          const isActive = currentPage === id;
          return (
            <li key={id}>
              <Link
                href={disabled ? "#" : href}
                className={`
                  flex items-center gap-3 rounded-md px-4 py-2
                  ${isActive ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"}
                  ${disabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}
                  transition-colors duration-200
                `}
                aria-disabled={disabled}
              >
                <span className="text-base">{icon}</span>
                <span className="text-sm font-medium">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}