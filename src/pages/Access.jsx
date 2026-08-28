import React from "react";
import {Header, Tag, Card, Banner, Button} from "../components";

export function Access({navigate}){
  return <div className="access">
    <Header role="landing" tag={null} action="Entrar" onAction={()=>navigate("/paciente")}/>
    <div className="access-body">
      <Tag tone="positive">Acesso seguro e personalizado</Tag>
      <h1>Como você quer acessar o EscalaMed?</h1>
      <p className="lead">Escolha seu perfil para entrar no fluxo correto. Seus dados e permissões serão protegidos de acordo com a LGPD.</p>
      <div className="profile-cards">
        <Card title="Sou paciente" body={<>Consulte as instituições vinculadas, compare demanda, profissionais disponíveis e tempo estimado.<br/><br/>Receba um aviso por e-mail quando a demanda estiver baixa.</>}>
          <Button onClick={()=>navigate("/paciente/cadastro")}>Continuar como paciente</Button>
        </Card>
        <Card title="Sou médico ou profissional de saúde" body="Consulte sua escala por instituição e setor. Solicite trocas, justifique faltas e acompanhe alertas de jornada com apoio da IA.">
          <Button onClick={()=>navigate("/profissional/cadastro")}>Continuar como profissional</Button>
        </Card>
      </div>
      <Banner title="Dados protegidos desde o primeiro acesso">O sistema aplica acesso por perfil, visão restrita por setor e registro oficial das solicitações.</Banner>
    </div>
  </div>
}
