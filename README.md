# VibeSync - Música para o seu Estilo

**VibeSync** é um aplicativo de streaming de música inspirado no Spotify, desenvolvido com **React Native** no frontend e **Express** no backend. O objetivo é proporcionar uma experiência única de audição, oferecendo aos usuários a capacidade de ouvir suas músicas favoritas e explorar novas faixas.

## Funcionalidades

- **Cadastro e Login de Usuário**: Crie uma conta e acesse o aplicativo.
- **Busca de Música**: Pesquise por faixas, álbuns, artistas ou playlists.
- **Reprodução de Música**: Ouça músicas em streaming com controles de play, pause, próximo e anterior.
- **Tela de Álbuns e Artistas**: Explore álbuns completos e discografias de artistas.

## Tecnologias Utilizadas

### Frontend (React Native)
### Backend (Express.js, PostgreSQL)

## Como Rodar o Projeto

### Pré-requisitos

- **Node.js** (v14 ou superior)
- **NPM** (gerenciador de pacotes)
- **PostgreSQL**

### Passos para Rodar o Backend e Frontend

1. Clone o repositório e faça o banco de dados no PostgreSQL com base no Sequelize:

   ```bash
   git clone https://github.com/devbiah/vibesync.git
   cd vibesync/backend
   npm install
   npm run dev
   cd vibesync/frontend
   npm install
   npm run start --tunnel
