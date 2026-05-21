import { create } from 'zustand';

let contadorValue = 0

function contador(){
  contadorValue++;
  return contadorValue
}

export const usePedidoStore = create((set) => ({
  pedidosFila: [],

  adicionarPedidoA_Fila: (novoPedido) => set((state) => ({
    pedidosFila: [...state.pedidosFila, { ...novoPedido, id: contador(), status: "AGUARDANDO" }]
  })),

  alterarStatusPedido: (id, novoStatus) => set((state) => ({
    pedidosFila: state.pedidosFila.map(p => p.id === id ? { ...p, status: novoStatus } : p)
  })),

  removerDaFila: (id) => set((state) => ({
    pedidosFila: state.pedidosFila.filter(p => p.id !== id)
  }))
}));