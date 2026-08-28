import React,{useEffect,useState} from "react";
import {Overview} from "./pages/Overview";
import {Access} from "./pages/Access";
import {PatientRegister} from "./pages/PatientRegister";
import {PatientPortal} from "./pages/PatientPortal";
import {ProfessionalRegister} from "./pages/ProfessionalRegister";
import {ProfessionalPortal} from "./pages/ProfessionalPortal";
import {SwapShift} from "./pages/SwapShift";
import {Absence} from "./pages/Absence";
import {Schedule} from "./pages/Schedule";
import {Management} from "./pages/Management";
const routes={"/":Overview,"/acesso":Access,"/paciente/cadastro":PatientRegister,"/paciente":PatientPortal,"/profissional/cadastro":ProfessionalRegister,"/profissional":ProfessionalPortal,"/profissional/troca":SwapShift,"/profissional/falta":Absence,"/profissional/escala":Schedule,"/gestao":Management};
export function App(){const [path,setPath]=useState(window.location.hash.slice(1)||"/");useEffect(()=>{const fn=()=>setPath(window.location.hash.slice(1)||"/");window.addEventListener("hashchange",fn);return()=>window.removeEventListener("hashchange",fn)},[]);const navigate=p=>{window.location.hash=p};const Component=routes[path]||Overview;return <div className="root"><Component navigate={navigate}/><div className="route-menu"><span>EscalaMed</span><select value={path} onChange={e=>navigate(e.target.value)}>{Object.keys(routes).map(p=><option key={p} value={p}>{p==="/"?"Visão geral":p}</option>)}</select></div></div>}
