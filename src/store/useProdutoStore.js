import { create } from 'zustand';

export const useProdutoStore = create((set) => ({
  // Estado inicial de Insumos
  insumos: [
    { id: 1, nome: "Pão de Hambúrguer", unidade: "un", quantidade: 50, minimo: 10 },
    { id: 2, nome: "Carne Blend 180g", unidade: "un", quantidade: 30, minimo: 5 },
    { id: 3, nome: "Queijo Cheddar", unidade: "fatia", quantidade: 120, minimo: 20 }
  ],

  produtos: [
    {
      id: 101,
      nome: "Cheese Burger Tradicional",
      price: 28.90,
      insumosUtilizados: [
        { insumoId: 1, quantidadeNecessaria: 1 },
        { insumoId: 2, quantidadeNecessaria: 1 },
        { insumoId: 3, quantidadeNecessaria: 2 }
      ]
    }
  ],

  // Ações para atualizar os Insumos
  setInsumos: (novosInsumos) => set({ insumos: novosInsumos }),
  
  alterarQuantidadeInsumo: (id, valor) => set((state) => ({
    insumos: state.insumos.map(item =>
      item.id === id ? { ...item, quantidade: Math.max(0, item.quantidade + valor) } : item
    )
  })),

  adicionarInsumo: (novoInsumo) => set((state) => ({
    insumos: [...state.insumos, novoInsumo]
  })),

  removerInsumo: (id) => set((state) => ({
    insumos: state.insumos.filter(item => item.id !== id)
  })),

  // Ações para atualizar os Produtos
  setProdutos: (novosProdutos) => set({ produtos: novosProdutos }),
  
  adicionarProduto: (novoProduto) => set((state) => ({
    produtos: [...state.produtos, novoProduto]
  })),
  
  removerProduto: (id) => set((state) => ({
    produtos: state.produtos.filter(item => item.id !== id)
  }))
}));