import Image from "next/image";
import CardMenu from "./components/Card";

export default function Home() {
  return (
    <div>
      <CardMenu name={"Coca cola"} price={15.90}></CardMenu>
      <CardMenu name={"Pão"} price={12.90}></CardMenu>
    </div>
  );
}
