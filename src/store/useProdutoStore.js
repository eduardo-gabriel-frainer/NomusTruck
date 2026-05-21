import { create } from 'zustand';

export const useProdutoStore = create((set, get) => ({
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
  setProdutos: (novosProdutos) => set({ produtos: novosProdutos }),
  adicionarProduto: (novoProduto) => set((state) => ({ produtos: [...state.produtos, novoProduto] })),
  removerProduto: (id) => set((state) => ({ produtos: state.produtos.filter(item => item.id !== id) }))
}));