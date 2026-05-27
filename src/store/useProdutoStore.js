import { create } from 'zustand';

export const useProdutoStore = create((set, get) => ({
  insumos: [
    { id: 1, nome: "Pão de Hambúrguer", unidade: "un", quantidade: 50, minimo: 10 },
    { id: 2, nome: "Carne Blend 180g", unidade: "un", quantidade: 30, minimo: 5 },
    { id: 3, nome: "Queijo Cheddar", unidade: "fatia", quantidade: 120, minimo: 20 },
    { id: 4, nome: "Tomate", unidade: "fatia", quantidade: 100, minimo: 10 },
    { id: 5, nome: "Alface", unidade: "fatia", quantidade: 90, minimo: 5 },
    { id: 6, nome: "Cebola", unidade: "fatia", quantidade: 120, minimo: 20 },
    { id: 7, nome: "Frango", unidade: "gramas", quantidade: 20, minimo: 5 },
    { id: 8, nome: "Ovos", unidade: "un", quantidade: 20, minimo: 5 },
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
    },
    {
      id: 102,
      nome: "X salada",
      price: 24.90,
      insumosUtilizados: [
        { insumoId: 1, quantidadeNecessaria: 1 },
        { insumoId: 2, quantidadeNecessaria: 1 },
        { insumoId: 4, quantidadeNecessaria: 2 }
      ]
    },
     {
      id: 103,
      nome: "X Egg",
      price: 27.90,
      insumosUtilizados: [
        { insumoId: 1, quantidadeNecessaria: 1 },
        { insumoId: 2, quantidadeNecessaria: 1 },
        { insumoId: 4, quantidadeNecessaria: 2 },
        { insumoId: 8, quantidadeNecessaria: 1 }
      ]
    }
  ],

  subtrairInsumosDoPedido: (pedido) => {
    const { insumos } = get();
    const necessidades = {};

    pedido.forEach((itemDoPedido) => {
      if (!itemDoPedido.insumosUtilizados) return;

      itemDoPedido.insumosUtilizados.forEach((insumoUsado) => {
        const totalGasto = insumoUsado.quantidadeNecessaria * itemDoPedido.quantidade;

        if (necessidades[insumoUsado.insumoId]) {
          necessidades[insumoUsado.insumoId] += totalGasto;
        } else {
          necessidades[insumoUsado.insumoId] = totalGasto;
        }
      });
    });

    for (const insumoId in necessidades) {
      const estoqueAtual = insumos.find(i => i.id === Number(insumoId));
      const quantidadeNecessaria = necessidades[insumoId];

      if (!estoqueAtual || estoqueAtual.quantidade < quantidadeNecessaria) {
        return {
          sucesso: false,
          motivo: `Estoque insuficiente de: ${estoqueAtual ? estoqueAtual.nome : "Insumo desconhecido"}. (Necessário: ${quantidadeNecessaria}, Disponível: ${estoqueAtual ? estoqueAtual.quantidade : 0})`
        };
      }
    }

    set((state) => {
      const novosInsumos = state.insumos.map((insumoEstoque) => {
        const gasto = necessidades[insumoEstoque.id] || 0;
        return {
          ...insumoEstoque,
          quantidade: insumoEstoque.quantidade - gasto
        };
      });

      return { insumos: novosInsumos };
    });

    return { sucesso: true };
  },

  setInsumos: (novosInsumos) => set({ insumos: novosInsumos }),
  alterarQuantidadeInsumo: (id, valor) => set((state) => ({
    insumos: state.insumos.map(item => item.id === id ? { ...item, quantidade: Math.max(0, item.quantidade + valor) } : item)
  })),
  adicionarInsumo: (novoInsumo) => set((state) => ({ insumos: [...state.insumos, novoInsumo] })),
  removerInsumo: (id) => set((state) => ({ insumos: state.insumos.filter(item => item.id !== id) })),
  
  editarInsumo: (id, dadosAtualizados) => set((state) => ({
    insumos: state.insumos.map(item => item.id === id ? { ...item, ...dadosAtualizados } : item)
  })),

  setProdutos: (novosProdutos) => set({ produtos: novosProdutos }),
  adicionarProduto: (novoProduto) => set((state) => ({ produtos: [...state.produtos, novoProduto] })),
  removerProduto: (id) => set((state) => ({ produtos: state.produtos.filter(item => item.id !== id) })),
  
  editarProduto: (id, dadosAtualizados) => set((state) => ({
    produtos: state.produtos.map(item => item.id === id ? { ...item, ...dadosAtualizados } : item)
  }))
}));