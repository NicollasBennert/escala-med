import React, { useState } from "react";
import {
  PortalLayout,
  Heading,
  Tag,
  Button,
  Stats
} from "../components";

const nav = [
  "Visão geral",
  "Aprovações",
  "Escalas",
  "Profissionais",
  "Instituições",
  "Relatórios",
  "Auditoria"
];

const user = {
  initials: "MR",
  name: "Mariana Ribeiro",
  subtitle: "Gestora • Clínica Médica"
};

export function Management({ navigate }) {
  const [notice, setNotice] = useState(null);

  const requests = [
    [
      "Troca de plantão",
      "Dra. Helena Costa → Dr. Lucas Almeida • sex. 23, 19h–07h",
      "Colega aprovou • aguardando gestão"
    ],
    [
      "Justificativa de falta",
      "Dr. Rafael Nunes • sáb. 24, 07h–19h • atestado anexado",
      "Validação automática concluída"
    ],
    [
      "Aviso prévio de falta",
      "Dra. Marina Souza • dom. 25, 19h–07h • motivo pessoal",
      "2 substitutos sugeridos pela IA"
    ]
  ];

  const handleNavigation = (item) => {
    if (item === "Visão geral") {
      navigate("/gestao");
      return;
    }

    if (item === "Aprovações") {
      setNotice("Você já está na área de aprovações.");
      return;
    }

    if (item === "Escalas") {
      navigate("/profissional/escala");
      return;
    }

    if (item === "Profissionais") {
      setNotice("Área de profissionais selecionada.");
      return;
    }

    if (item === "Instituições") {
      setNotice("Área de instituições selecionada.");
      return;
    }

    if (item === "Relatórios") {
      exportReport();
      return;
    }

    if (item === "Auditoria") {
      setNotice("Histórico de auditoria selecionado.");
    }
  };

  const exportReport = () => {
    const report = `
ESCALAMED — RELATÓRIO DE GESTÃO

Gestora: ${user.name}
Setor: Clínica Médica

Cobertura prevista: 96%
Aprovações pendentes: 3
Profissionais dentro dos limites: 26
Plantões em risco: 2

SOLICITAÇÕES

1. Troca de plantão
Dra. Helena Costa → Dr. Lucas Almeida
Status: Aguardando gestão

2. Justificativa de falta
Dr. Rafael Nunes
Status: Validação automática concluída

3. Aviso prévio de falta
Dra. Marina Souza
Status: 2 substitutos sugeridos pela IA

Relatório gerado pelo EscalaMed.
`;

    const blob = new Blob([report], {
      type: "text/plain;charset=utf-8"
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "relatorio-escalamed.txt";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);

    setNotice("Relatório exportado com sucesso.");
  };

  const approve = () => {
    setNotice("Solicitação aprovada com sucesso.");
  };

  const reject = () => {
    setNotice("Solicitação recusada.");
  };

  return (
    <PortalLayout
      role="Gestão • Clínica Médica"
      user={user}
      items={nav}
      active="Visão geral"
      onNav={handleNavigation}
    >

      <Heading
        title="Painel da gestão"
        subtitle="Clínica Médica • visão operacional em tempo real"
        action="Exportar relatório"
        onAction={exportReport}
      />

      <div className="risk-banner">
        <span>!</span>

        <div>
          <b>
            Cobertura em risco no sábado à noite
          </b>

          <p>
            O plantão de 19h–07h ainda está aberto.
            A IA encontrou 3 profissionais compatíveis,
            respeitando função, descanso e deslocamento.
          </p>
        </div>
      </div>

      <Stats
        items={[
          {
            value: "96%",
            label: "Cobertura prevista"
          },
          {
            value: "3",
            label: "Aprovações pendentes"
          },
          {
            value: "26",
            label: "Profissionais dentro dos limites"
          },
          {
            value: "2",
            label: "Plantões em risco"
          }
        ]}
      />

      <div className="management-grid">

        <section className="panel approvals">

          <div className="panel-title">

            <div>
              <h2>
                Aprovações pendentes
              </h2>

              <small>
                Solicitações que precisam da decisão da gestão
              </small>
            </div>

            <Tag tone="warning">
              3 pendentes
            </Tag>

          </div>

          {requests.map((r, i) => (

            <div
              className="request"
              key={r[0]}
            >

              <div>

                <div className="request-title">

                  <b>
                    {r[0]}
                  </b>

                  <Tag
                    tone={
                      i === 1
                        ? "positive"
                        : "warning"
                    }
                  >
                    {i === 1
                      ? "Validado"
                      : "Aguardando"}
                  </Tag>

                </div>

                <span>
                  {r[1]}
                </span>

                <small>
                  {r[2]}
                </small>

              </div>

              <div className="request-actions">

                <Button
                  size="small"
                  onClick={approve}
                >
                  Aprovar
                </Button>

                <Button
                  size="small"
                  variant="neutral"
                  onClick={reject}
                >
                  Recusar
                </Button>

              </div>

            </div>

          ))}

        </section>

        <section className="panel ai-panel">

          <div className="ai-title">

            <span className="spark">
              ✦
            </span>

            <div>
              <b>
                IA operacional
              </b>

              <small>
                Recomendações explicáveis
              </small>
            </div>

          </div>

          <Insight
            title="Jornada e descanso"
            tag="26 ok"
          >
            26 profissionais dentro dos limites.
            Dois casos exigem ajuste antes da publicação.
          </Insight>

          <Insight
            title="Cobertura sugerida"
            tag="96%"
          >
            Dr. Lucas Almeida tem 96% de aderência
            ao plantão aberto de sábado.
          </Insight>

          <Insight
            title="Equidade da escala"
            tag="Equilibrada"
          >
            Distribuição de noites e fins de semana
            está equilibrada entre funções equivalentes.
          </Insight>

          <small>
            ◷ Decisões registradas no histórico oficial
          </small>

        </section>

      </div>

      {notice && (
        <div
          className="toast"
          onClick={() => setNotice(null)}
        >
          {notice}
        </div>
      )}

    </PortalLayout>
  );
}

function Insight({
  title,
  tag,
  children
}) {
  return (
    <div className="insight">

      <div>

        <b>
          {title}
        </b>

        <Tag tone="positive">
          {tag}
        </Tag>

      </div>

      <p>
        {children}
      </p>

    </div>
  );
}