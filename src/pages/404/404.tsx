import { Button, Result } from "antd";
import Header from "../../components/Header";
import { TbZoomQuestion } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <main>
      <Header offset={150} />
      <Result
        icon={<TbZoomQuestion size={200} />}
        title="Não encontrado"
        subTitle="Opa, esta página não existe!"
        extra={<Button type="primary" onClick={() => navigate("/")}>Voltar ao Início</Button>}
      />
    </main>
  );
}
