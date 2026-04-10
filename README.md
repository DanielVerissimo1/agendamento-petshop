<h1 align="center"> 
  <img width="200" alt="logo" src="src/assets/logo.svg" />
  <br>
   <p>
    <img src="https://img.shields.io/github/last-commit/DanielVerissimo1/agendamento-petshop?style=for-the-badge&logo=git&logoColor=white&color=6B73FF" alt="Last Commit">
    <img src="https://img.shields.io/github/languages/top/DanielVerissimo1/agendamento-petshop?style=for-the-badge&color=6B73FF" alt="Top Language">
    <img src="https://img.shields.io/github/languages/count/DanielVerissimo1/agendamento-petshop?style=for-the-badge&color=000DFF" alt="Languages Count">
  </p>
</h1>

**Mundo Pet** é um projeto desenvolvido como sistema de agendamento para petshop, servindo como trabalho final da etapa prática com JavaScript, focada na criação de aplicações interativas integradas a APIs. A proposta é simular um sistema de agendamento para petshop, onde o usuário pode cadastrar, visualizar, filtrar e remover agendamentos — com dados armazenados via **JSON Server**.

---

## 📸 Visualização do Projeto

<p align="center">
  <img alt="preview" src="https://github.com/user-attachments/assets/81d84517-dae5-4527-a008-6f2db09c206c" style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); max-width: 80%;">
</p>

---

## 🚀 Funcionalidades

| Funcionalidade | Descrição |
|----------------|-----------|
| 📅 **Adicionar agendamento** | Cadastre novo agendamento com nome do pet, tutor, data e serviço |
| ❌ **Remover agendamento** | Exclua agendamentos da lista |
| 🔍 **Filtrar por data** | Visualize agendamentos de uma data específica |
| 🔄 **API REST** | Consumo de API com métodos GET, POST e DELETE |
| 🗃️ **JSON Server** | Armazenamento local dos dados |

---

## 🛠️ Tecnologias Utilizadas

<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/JSON%20Server-000000?style=for-the-badge&logo=json&logoColor=white" alt="JSON Server">
  <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black" alt="Webpack">
  <img src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=black" alt="Babel">
</div>

---

## 📚 Conceitos aplicados

- JavaScript (ES6+)
- Manipulação de DOM
- Requisições com Fetch API
- Consumo de API REST com JSON Server
- Modularização e bundling com Webpack
- Transpilação com Babel
- Filtros dinâmicos por data

---

## ▶️ Como Rodar o Projeto

Após clonar o repositório, siga os passos abaixo:

```bash
# Instalar as dependências
npm install

# Iniciar o frontend com Webpack em modo desenvolvimento
npm run dev

# Iniciar o servidor local com JSON Server
npm run server

# Gerar o build do projeto com Webpack e Babel
npm run build
```

---

## 📁 Arquitetura do projeto

```bash
agendamento-petshop
│
├── src/
│   ├── assets/                  
│   ├── lib/
│   │   └── dayjs.js             # Configuração da biblioteca de datas
│   ├── modules/
│   │   ├── form/
│   │   │   ├── date-change.js   # Atualização de data no formulário
│   │   │   ├── formaters.js     # Formatação de dados do formulário
│   │   │   ├── show-form.js     # Exibição/ocultação do formulário
│   │   │   └── submit.js        # Envio do formulário
│   │   ├── schedules/
│   │   │   ├── cancel.js        # Cancelamento de agendamento
│   │   │   ├── load-schedules.js  # Carregamento dos agendamentos
│   │   │   └── show-schedules.js  # Renderização dos agendamentos
│   │   ├── services/
│   │   │   ├── api-config.js          # Configuração base da API
│   │   │   ├── cancel-schedule.js     # DELETE na API
│   │   │   ├── new-shcedule.js        # POST na API
│   │   │   └── schedules-fetch-by-day.js  # GET filtrado por dia
│   │   └── page-load.js         # Inicialização da página
│   ├── styles/
│   │   ├── form.css
│   │   ├── global.css
│   │   └── main.css
│   └── main.js                  # Entry point do JavaScript
│
├── index.html
├── server.json                  # Banco de dados do JSON Server
├── webpack.config.js
├── package.json
└── README.md
