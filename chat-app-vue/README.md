# Canal de Mensagens

Este é o frontend de uma aplicação de chat em tempo real feito como desafio para a <a href="https://github.com/newbytesolucoesdigitais/desafio"> NewByte</a>, construído com **Vue 3**, **Vite**, **Vuex** e **Vue Router**. Ele se conecta a uma <a href="https://github.com/guerrinharj/chat_app">API Rails feita para o desafio</a> e usa **WebSockets (ActionCable)** para troca de mensagens em tempo real.

## 🚀 Funcionalidades

- Registro e login de usuários
- Armazenamento de token JWT no Vuex
- Conexão automática com WebSocket após login
- Envio e recebimento de mensagens em tempo real
- Interface responsiva e moderna
- Navegação entre páginas com Vue Router

## 🧩 Estrutura do Projeto (src)

- Componentes reutilizáveis como formulário e itens de mensagem
- Páginas principais: **Home**, **Login**, **Register**, **Chat**
- store/ # Vuex para autenticação e mensagens
- router/ # Configuração de rotas com guards de autenticação
- utils/ # Funções auxiliares (ex: conexão WebSocket)
- App.vue
- main.js
- style.css

## Configuração do .env

Para que a aplicação saiba para onde enviar as requisições HTTP e onde se conectar via WebSocket, você precisa criar um arquivo ```.env``` na raiz do projeto com as URLs da sua API e WebSocket.

Crie um arquivo chamado ```.env``` com o seguinte conteúdo:

```bash
VITE_API_BASE_URL=http://localhost:3000/api/v1
VITE_WS_URL=ws://localhost:3000/cable
```

Em produção, lembre-se de usar https e wss:

```bash
VITE_API_BASE_URL=https://sua-api.com/api/v1
VITE_WS_URL=wss://sua-api.com/cable
```

```bash
yarn dev
```

##  Instalação

###  Pré-requisitos

- Node.js `>= 18`
- Yarn
- A API backend Rails em execução em `http://localhost:3000`

1. Clone o repositório (ou entre na pasta do frontend):

```bash
cd chat_app_vue
```
2. Instale as dependências:

```bash
yarn
```
3. Inicie o servidor de desenvolvimento:

```bash
yarn dev
```


4. Acesse a aplicação:

```arduino 
http://localhost:5173
```