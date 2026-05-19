import CardText from "../components/CardText";
import Card from "../components/Card";
import { DollarSign } from 'lucide-react';

export default function Home() {
  return (
    <div className="px-4 md:pr-20 lg:pr-80">
      <h1 className="font-black text-2xl">Bem-vindo, Sr. Elpidio!</h1>
      <h3>Resumo das vendas do food truck</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-10">
        <Card name="Total de Vendas" price={0} subPrice={"Acumulado total"} icone={DollarSign} />

        <Card name="Pedidos" price={0} subPrice={"Total de pedidos realizados"} />

        <Card name="Produtos ativos" price={0} subPrice={"Produtos disponíveis"} />

        <Card name="Estoque baixo" price={0} subPrice={"Produtos com estoque < 10"} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
        <CardText
          titulo={"Formas de Pagamento"}
          descricao={"Métodos mais utilizados"}
          acoes={"Nenhum pedido realizado"}
        />

        <CardText
          titulo={"Formas de Pagamento"}
          descricao={"Métodos mais utilizados"}
          acoes={"Nenhum pedido realizado"}
        />
      </div>

      <div className="pt-5">
        <CardText
          titulo={"Formas de Pagamento"}
          descricao={"Métodos mais utilizados"}
          botoes
        />
      </div>
    </div>
  );
}