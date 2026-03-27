import CardMenu from "@/components/Card";

export default function Pedido() {

  const produtos = [
    { id: 1, name: "X-Bacon", description: "Hamburguer, bacon crocante, queijo", price: 15.9 },
    { id: 2, name: "X-Salada", description: "Hamburguer, alface, tomate, queijo", price: 14.9 },
    { id: 3, name: "X-Tudo", description: "Hamburguer, bacon, ovo, queijo, salada", price: 18.9 },
    { id: 4, name: "Batata Frita", description: "Porção média crocante", price: 10.0 },
    { id: 5, name: "Refrigerante", description: "Lata 350ml gelada", price: 6.0 },
    { id: 6, name: "Suco Natural", description: "Laranja ou maracujá", price: 8.5 },
  ];

  return (
    <div className="p-6 bg-white text-black">
      {/* Título */}
      <h1 className="text-2xl font-bold mb-1">Novo Pedido 🍔</h1>
      <p className="text-gray-500 mb-6">Selecione os produtos do cardápio</p>

      {/* Layout principal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* CARDÁPIO */}
        <div className="md:col-span-2 border rounded-xl p-4">
          <h2 className="text-lg font-semibold mb-1">Cardápio</h2>
          <p className="text-sm text-gray-500 mb-4">
            Toque nos produtos para adicionar ao pedido
          </p>

          {/* GRID DE PRODUTOS */}
          <div className="grid grid-cols-2 gap-4">
            {produtos.map((item) => (
              <CardMenu
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        </div>

        {/* RESUMO DO PEDIDO */}
        <div className="border rounded-xl p-4 h-fit">
          <h2 className="text-lg font-semibold mb-4">Resumo do Pedido</h2>

          <p className="text-sm text-gray-500 text-center mb-4">
            Nenhum item adicionado
          </p>

          <hr className="mb-4" />

          {/* Nome */}
          <label className="text-sm font-medium">Nome do Cliente (opcional)</label>
          <input
            type="text"
            placeholder="Ex: João Silva"
            className="w-full border rounded-md p-2 mt-1 mb-4 text-sm"
          />

          {/* Pagamento */}
          <label className="text-sm font-medium">Forma de Pagamento</label>
          <select className="w-full border rounded-md p-2 mt-1 mb-4 text-sm">
            <option>Dinheiro</option>
            <option>Cartão</option>
            <option>Pix</option>
          </select>

          {/* Total */}
          <div className="flex justify-between text-sm mb-1">
            <span>Itens</span>
            <span>0</span>
          </div>

          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total</span>
            <span>R$ 0,00</span>
          </div>

          {/* Botão */}
          <button className="w-full bg-gray-400 text-white py-2 rounded-lg">
            Finalizar Pedido
          </button>
        </div>

      </div>
    </div>
  );
}