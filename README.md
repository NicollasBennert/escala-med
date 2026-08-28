# EscalaMed — projeto funcional

Projeto React + Vite baseado no protótipo do EscalaMed.

## Rodar no VS Code (Windows)

1. Abra esta pasta no VS Code.
2. Abra **Terminal > Novo Terminal**.
3. Se existir uma pasta `node_modules`, apague-a.
4. Execute:

```bash
npm install
npm run dev
```

5. Abra o endereço mostrado pelo Vite (normalmente `http://localhost:5173`).

## Fluxos funcionando

- Página inicial → Explorar fluxos / Conhecer a solução
- Escolha de perfil → cadastro de paciente ou profissional
- Cadastro de paciente com validação de CPF, e-mail e senha
- Cadastro profissional com validações
- Portal do paciente com navegação e ações
- Portal profissional com navegação
- Solicitação de troca de plantão com seleção de substituto
- Justificativa de falta com upload de arquivo, rascunho e envio
- Escala semanal com semana anterior/próxima e filtro
- Painel de gestão com aprovação/recusa e exportação de relatório

Os dados de cadastro usados no protótipo ficam apenas no `localStorage` do navegador; não existe backend ou banco de dados neste projeto.
