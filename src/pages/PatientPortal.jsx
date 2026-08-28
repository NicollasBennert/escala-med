import React,{useState} from "react";
import {PortalLayout,Heading,Tag,Button,Stats,Card,IconHospital,Banner} from "../components";
const nav=["Visão geral","Instituições","Meus alertas","Notificações","Privacidade"];
const user={initials:"CP",name:"Curt Persuhn",subtitle:"Paciente"};
export function PatientPortal({navigate}){
 const [active,setActive]=useState("Visão geral"); const [notice,setNotice]=useState("");
 const go=(x)=>{setActive(x);if(x!=="Visão geral")setNotice(x+" selecionado.");};
 const onNav=(x)=>{setActive(x);if(x==="Visão geral")navigate("/paciente");else setNotice(x+" selecionado.");};
 return <PortalLayout role="UBS AG Centro" user={user} items={nav} active={active} onNav={onNav}>
  <Heading title={active==="Visão geral"?"Bom dia, Curt":active} subtitle={active==="Visão geral"?"Veja a situação da rede antes de sair de casa.":"Consulte e gerencie as informações do seu perfil."} action={active==="Visão geral"?"Gerenciar alertas":"Voltar para visão geral"} onAction={()=>setActive(active==="Visão geral"?"Meus alertas":"Visão geral")}/>
  {active==="Visão geral"&&<>
   <section className="unit-card"><div className="unit-id"><IconHospital/><div><Tag tone="positive">Sua unidade de referência</Tag><h3>Ambulatório Geral Heinz Schrader — AG Centro</h3><p>Atenção Primária • Rua República Argentina, 207</p></div></div><div className="unit-metrics"><div><small>Demanda atual</small><Tag tone="warning">Moderada</Tag></div><div><small>Disponíveis</small><b>6 profissionais</b></div><div><small>Espera estimada</small><b className="warning-text">≈ 35 min</b></div><Button variant="neutral" onClick={()=>go("Instituições")}>Ver detalhes</Button></div></section>
   <Stats items={[{value:"8",label:"Instituições vinculadas"},{value:"3",label:"Com baixa demanda"},{value:"2",label:"Alertas ativos"},{value:"1",label:"Unidade de referência"}]}/>
   <section className="nearby"><div className="section-heading"><div><h2>Instituições perto de você</h2><p>Dados atualizados há 2 minutos</p></div><Button variant="subtle" size="small" onClick={()=>go("Instituições")}>Ver todas</Button></div><div className="three-cards">
    <Card title="UBS Jardim América" body={<>Baixa demanda<br/>12 profissionais disponíveis • espera ≈ 18 min</>}><Button onClick={()=>go("Instituições")}>Tenho interesse</Button></Card>
    <Card title="Hospital Santa Isabel" body={<>Demanda moderada<br/>9 profissionais disponíveis • espera ≈ 42 min</>}><Button variant="neutral" onClick={()=>go("Meus alertas")}>Avisar quando baixar</Button></Card>
    <Card title="Hospital Santa Catarina" body={<>Demanda alta<br/>7 profissionais disponíveis • espera ≈ 1h20</>}><Button variant="neutral" onClick={()=>go("Meus alertas")}>Criar alerta</Button></Card>
   </div></section>
  </>}
  {active!=="Visão geral"&&<section className="panel"><h2>{active}</h2><Banner title="Área funcionando">Esta seção está ativa no protótipo. Use os botões da página para voltar ou selecionar outra área.</Banner>{active==="Instituições"&&<div className="three-cards"><Card title="AG Centro" body="Unidade de referência • demanda moderada"><Button onClick={()=>setNotice("Unidade selecionada.")}>Selecionar</Button></Card><Card title="UBS Jardim América" body="Baixa demanda • espera ≈ 18 min"><Button onClick={()=>setNotice("Alerta configurado para esta unidade.")}>Criar alerta</Button></Card><Card title="Hospital Santa Isabel" body="Demanda moderada • espera ≈ 42 min"><Button onClick={()=>setNotice("Detalhes da instituição abertos.")}>Ver detalhes</Button></Card></div>}{(active==="Meus alertas"||active==="Notificações")&&<Button onClick={()=>setNotice("Nenhuma nova notificação.")}>Atualizar</Button>}{active==="Privacidade"&&<p className="muted-text">Seus dados são utilizados apenas para as finalidades apresentadas no protótipo.</p>}</section>}
  {notice&&<div className="toast" onClick={()=>setNotice("")}>{notice}</div>}
 </PortalLayout>
}
