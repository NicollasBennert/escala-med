import React from "react";
import {
  Header,
  Button,
  Tag,
  Card,
  Banner
} from "../components";

export function Overview({ navigate }) {
  return (
    <div className="overview">

      <Header
        role="landing"
        tag="Protótipo TCC • 2026"
      />

      <section className="hero">

        <div className="hero-copy">

          <Tag tone="positive">
            Gestão hospitalar inteligente
          </Tag>

          <h1>
            Escalas mais justas.
            <br />
            Atendimento mais previsível.
          </h1>

          <p>
            O EscalaMed conecta profissionais,
            gestores e pacientes em uma única
            plataforma com IA para organizar
            plantões, prevenir sobrecarga e orientar
            a população pela demanda real das
            instituições.
          </p>

          <div className="actions">

            <Button
              onClick={() => navigate("/acesso")}
            >
              Explorar fluxos
            </Button>

            <Button
              variant="neutral"
              onClick={() => navigate("/acesso")}
            >
              Conhecer a solução
            </Button>

          </div>

        </div>

        <div className="ai-card">

          <div className="ai-title">

            <span className="spark">
              ✦
            </span>

            <div>
              <b>
                IA EscalaMed
              </b>

              <small>
                Monitoramento contínuo e responsável
              </small>
            </div>

          </div>

          <Banner title="Conformidade de jornada">
            Bloqueia plantões que desrespeitem
            limites de horas e descanso obrigatório.
          </Banner>

        </div>

      </section>

      <section className="pillars">

        <div className="section-heading">

          <div>
            <h2>
              Uma plataforma, três impactos diretos
            </h2>

            <p>
              Modelo B2B por assinatura,
              dimensionado ao porte da instituição.
            </p>
          </div>

          <div className="tag-row">

            <Tag>
              Pequeno • até 49
            </Tag>

            <Tag>
              Médio • 50–99
            </Tag>

            <Tag tone="positive">
              Grande • 100+
            </Tag>

          </div>

        </div>

        <div className="three-cards">

          <Card
            title="Gestão sem planilhas"
            body="Escalas, faltas, atestados e trocas ficam registrados em um fluxo oficial e rastreável."
          />

          <Card
            title="Jornada segura"
            body="A IA identifica sobrecarga, preserva descanso obrigatório e recomenda cobertura compatível."
          />

          <Card
            title="Paciente bem orientado"
            body="Demanda, profissionais disponíveis e tempo estimado ajudam o cidadão a escolher onde buscar atendimento."
          />

        </div>

      </section>

    </div>
  );
}