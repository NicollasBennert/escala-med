import React, { useEffect, useState } from "react";

export function Logo(){
  return <div className="logo-mark" aria-label="EscalaMed logo">✚</div>;
}

export function Header({ role="", tag=null, action=null, onAction }){
  return <header className="header">
    <button className="brand brand-button" onClick={()=>window.location.hash="/"} aria-label="Ir para início">
      <Logo/><b>EscalaMed</b>
      {tag && <Tag>{tag}</Tag>}
    </button>
    <div className="header-actions">
      {role && role !== "landing" && <span className="header-role">{role}</span>}
      {action && <Button size="small" variant="neutral" onClick={onAction}>{action}</Button>}
    </div>
  </header>
}

export function Button({children,onClick,type="button",variant="primary",size="normal",disabled=false}){
  return <button type={type} disabled={disabled} className={`btn ${variant} ${size}`} onClick={onClick}>{children}</button>
}

export function Tag({children,tone="neutral"}){ return <span className={`tag ${tone}`}>{children}</span> }

export function Banner({title,children,icon}){
  return <div className="banner">
    {icon && <span className="banner-icon">{icon === "bell" ? "🔔" : "✦"}</span>}
    <div><b>{title}</b>{children && <p>{children}</p>}</div>
  </div>
}

export function Card({title,body,children}){
  return <article className="card">
    <div className="info-icon">i</div>
    <h3>{title}</h3>
    <p>{body}</p>
    {children}
  </article>
}

export function Stats({items}){
  return <div className="stats-grid">{items.map((item,i)=><div className="stat-card" key={i}>
    <span className="stat-icon">✦</span><strong>{item.value}</strong><span>{item.label}</span>
  </div>)}</div>
}

export function Field({label,placeholder,type="text",value,onChange,inputMode,maxLength,required=false}){
  return <label className="field"><span>{label}{required && " *"}</span>
    <input type={type} placeholder={placeholder} value={value ?? ""} inputMode={inputMode} maxLength={maxLength} required={required}
      onChange={e=>onChange?.(e.target.value)} />
  </label>
}

export function SelectField({label,options,value,onChange}){
  return <label className="field"><span>{label}</span>
    <select value={value ?? options[0]} onChange={e=>onChange?.(e.target.value)}>{options.map(o=><option key={o}>{o}</option>)}</select>
  </label>
}

export function CheckField({children,checked,onChange}){
  return <label className="check"><input type="checkbox" checked={checked ?? false} onChange={e=>onChange?.(e.target.checked)}/><span>{children}</span></label>
}

export function Heading({title,subtitle,action,onAction}){
  return <div className="page-heading"><div><h1>{title}</h1><p>{subtitle}</p></div>{action && <Button onClick={onAction}>{action}</Button>}</div>
}

export function IconHospital(){ return <div className="hospital-icon" aria-hidden="true"><span>✚</span></div> }

export function PortalLayout({role,user,items,active,onNav,children}){
  const [notice,setNotice]=useState("");
  useEffect(()=>{ if(!notice) return; const t=setTimeout(()=>setNotice(""),3000); return ()=>clearTimeout(t)},[notice]);
  const handleNav=(item)=>{
    const before=active;
    onNav?.(item, msg=>setNotice(msg));
    if(item===before && ["Alertas","Histórico","Notificações","Privacidade","Instituições","Profissionais","Relatórios","Auditoria","Aprovações"].includes(item)) setNotice(`${item} selecionado.`);
  };
  return <div className="app-shell">
    <Header role={role}/>
    <div className="portal-body">
      <aside className="sidebar">
        <div className="select-mock"><span>{role}</span><span>⌄</span></div>
        <nav>{items.map(item=><button key={item} className={`nav-btn ${active===item?"active":""}`} onClick={()=>handleNav(item)}>{item}</button>)}</nav>
        <div className="sidebar-user"><div className="avatar">{user?.initials}</div><div className="user-copy"><b>{user?.name}</b><span>{user?.subtitle}</span></div></div>
      </aside>
      <main className="page">{children}</main>
    </div>
    {notice && <button className="toast" onClick={()=>setNotice("")}>{notice}</button>}
  </div>
}
